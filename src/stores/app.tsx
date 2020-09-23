import React from 'react';
import { observable, action, autorun } from 'mobx';
import { useLocalStore } from 'mobx-react';
import { UserStore, UserRef } from './user';
import { NetworkService, TokenPair, AccessJwt, Jwt } from '../service/api';
import JwtDecode from 'jwt-decode';
import { ILoginResponse, ILoginRequest } from 'model/compiled'


const hydrateAppStore = (): AppStore => {
    // load a new app object, or
    // if we can find one, load it from local storage
    let o = window.localStorage.getItem("app")
    if (!o) {
        return new AppStore(undefined, undefined);
    }
    let json = JSON.parse(o);
    return new AppStore(json['access'], json['refresh']);
}

export class AppStore {
    protected _api: NetworkService = new NetworkService();
    @observable protected _access?: AccessJwt;
    @observable protected _refresh?: Jwt;

    constructor(
        accessToken: string | undefined,
        refreshToken: string | undefined) {
        console.log("[app store] constructed with tokens =>", accessToken, refreshToken)
        if (accessToken == undefined || refreshToken == undefined) {
            return
        }
        this.setupLogin(accessToken, refreshToken);
    }
    accounts: Array<UserRef> = []
    auto = autorun((r) => this.persist())
    get api(): NetworkService {
        return this._api;
    }

    @observable active?: UserStore | null;
    get loggedIn(): boolean {
        return this.active != null;
    }

    toJson(): any {
        return JSON.stringify({
            'access': this._access?.encoded,
            'refresh': this._refresh?.encoded,
            //'accounts': this.accounts,
            'active': this.active?.toJson(),
        });
    }

    persist() {
        console.log("persisting")
        if (this.active) { }//trick mobx
        window.localStorage.setItem("app", this.toJson())
    }

    @action
    logout(): Promise<void> {
        //delete refresh token
        this._refresh = undefined;
        this._access = undefined;
        this.active = undefined;
        this.persist();
        return Promise.resolve();
    }

    @action
    signup(name: string, email: string, key: string): Promise<any> {
        if (name.length < 1 || email.length < 1) {
            return Promise.reject();
        }
        return this.api.endpointPost(
            "auth/signup",
            {
                username: name,
                email: email,
                key: key,
            },
            200
        ).then(() => {
            console.log("[app store] signed up successfully")
            this.login(name, key);
        });//.catch(() => false)
    }

    @action
    login(name: string, key: string): Promise<void> {
        return this.api.endpointPost(
            "auth/jwt/login",
            { username: name, password: key } as ILoginRequest,
            200,
        ).then((json: ILoginResponse) => {
            console.log("[app store] logged in");
            this.setupLogin(json.tokens!.accessToken!, json.tokens!.refreshToken!);
        })
        //.finally((v) => {
        //    return new UserStore();
        //});
    }

    private setupLogin(accessToken: string, refreshToken: string) {
        this._access = new AccessJwt(accessToken);
        this._refresh = new Jwt(refreshToken);
        this.api.setAuthCallback(this.getTokenCallback);
        this.persist();
        this.active = new UserStore(this, this._access.token.username);
    }

    protected getTokenCallback = (): Promise<Jwt> => {
        console.log("[app] getting token");
        if (!this._access) {
            throw "error";
        }
        if (!this._access?.expired()) {
            console.log("[app] getting NEW access token");
            return this.api.basicPost("auth/jwt/renewtoken", {
                'RefreshToken': this._refresh?.encoded,
            }, 200, {
                'Authorization': 'Bearer ' + this._access?.encoded
            }).then((json: TokenPair) => {
                console.log("[app] got new access token")
                this._access = new AccessJwt(json.accessToken);
                this.persist()
                return this._access!;
            })
        }
        return Promise.resolve(this._access);
    }
}

function useClassStore<T>(init: T): T {
    const [store] = React.useState<T>(init)
    return store
}

const appStoreContext = React.createContext<AppStore | null>(null);
export const AppStoreProvider: React.FC = (props) => {
    const store = hydrateAppStore();
    //const store = useLocalStore(() => hydrateAppStore());
    return (
        <appStoreContext.Provider value={store}>
            {props.children}
        </appStoreContext.Provider>
    )
}

export const useAppStore = () => {
    const store = React.useContext(appStoreContext)
    if (!store) {
        throw new Error('appStoreContext must be used within a StoreProvider.')
    }
    return store
}