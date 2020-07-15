import React from 'react';
import { observable, action, autorun } from 'mobx';
import { useLocalStore } from 'mobx-react';
import { UserStore } from './user';
import jwtDecode from 'jwt-decode';

export async function http(
    request: RequestInfo,
    init: RequestInit,
    expects: number,
): Promise<any> {
    const response = await fetch(request, init);
    if (response.status != expects) {
        return Promise.resolve(`expected ${expects} got ${response.status}`)
        //throw new Error("error");
    }
    const body = await response.json();
    return body;
}

export interface TokenPair {
    accessToken: string
    refreshToken: string
}

export interface Response {
    data: Array<any>
    token: string
}

const API = "http://app.prestigiousaddresses.com/api/v1/";
export class NetworkService {
    //api(request: RequestInfo,  init?: RequestInit | undefined, expects: number): Promise<any> {
    //    return http(request, expects);
    //}
    private getToken?: () => Promise<jwt>;
    constructor() { }
    setAuthCallback(f: () => jwt) {
        //this.getToken = f;
    }
    async getHeaders(): Promise<any> {
        if (this.getToken) {
            let jwt = await this.getToken();
            return {
                'Authorization': 'Bearer ' + ""
            }
        }
        return Promise.resolve({});
    }
    async endpointGet(path: string, args: any, expects: number): Promise<any> {
        const encodedArgs = args ? serialize(args) : undefined;
        path = encodedArgs ? (path + "?" + encodedArgs) : path;
        return http(API + path, {
            method: "GET",
            headers: await this.getHeaders(),
        }, expects);
    }
    async endpointPost(path: string, json: any, expects: number): Promise<any> {
        return http(API + path, {
            method: "POST",
            body: JSON.stringify(json)
        }, expects);
    }
}

export function serialize(obj: any, prefix: any = undefined): any {
    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
            str.push(typeof v == "object" ? serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return str.join("&");
}

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

class jwt {
    protected raw: string
    constructor(token: string) {
        this.raw = token;
    }
    get encoded(): string {
        return this.raw;
    }
    expired(): boolean {
        //token.expiry;
        return false
    }
}

class access_jwt extends jwt {
    protected token: AccessToken;
    constructor(token: string) {
        super(token);
        this.token = jwtDecode(token);
    }
}

interface Token {
    exp: number
}

interface AccessToken {
    username: string
    avatar: string
    exp: number
}

interface RefreshToken {
    exp: number
}

interface UserRef {
    username: string
}

export class AppStore {
    protected _api: NetworkService = new NetworkService();
    protected _access?: access_jwt;
    protected _refresh?: jwt;

    constructor(accessToken: string | undefined, refreshToken: string | undefined) {
        console.log("[app store] constructed")
        if (accessToken == undefined || refreshToken == undefined) {
            return
        }
        this._access = new access_jwt(accessToken);
        this._refresh = new jwt(refreshToken);
        console.log(jwtDecode(accessToken), this._access, jwtDecode(refreshToken), this._refresh);

        // hydrate account instance from jwt info
        this.active = new UserStore(this, "username");
    }
    accounts: Array<UserRef> = []
    auto = autorun((r) => this.persist())
    get api(): NetworkService {
        return this._api;
    }
    toJson(): any {
        return JSON.stringify({
            'access': this._access?.encoded,
            'refresh': this._refresh?.encoded,
            'accounts': this.accounts,
            //'active': this.active?.toJson(),
        });
    }

    persist() {
        console.log("persisting")
        if (this.active) {
            // xyz
        }
        window.localStorage.setItem("app", this.toJson())
    }

    @action
    logout() {
        //delete refresh token
        //this.acc.dispose();
        //this._api.setTokenCallback(undefined);
        this._refresh = undefined;
        this._access = undefined;
        this.active = null;
    }

    @observable active?: UserStore | null;
    get loggedIn(): boolean {
        return this.active != null;
    }

    @action
    signup(name: string, email: string, key: string): Promise<boolean> {
        //assert(name.length > 0)
        //assert(email.length > 0)
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
            return true
        });//.catch(() => false)
    }

    @action
    login(name: string, key: string): Promise<UserStore> {
        return this.api.endpointPost(
            "auth/jwt/login",
            { username: name, key: key },
            200,
        ).then((json: TokenPair) => {
            console.log("[app store] logged in")
            var acc = new UserStore(this, name);

            this._access = new access_jwt(json.accessToken);
            this._refresh = new jwt(json.refreshToken);
            this._api.setAuthCallback(() => {
                if (!this._access) {
                    throw "error";
                }
                if (this._access?.expired()) {
                    // get new token
                    //this._api.endpointGet("auth/jwt/refresh")
                }
                return this._access;
                //_token.expired()
            })
            this.active = acc;
            return acc;
        })
        //.finally((v) => {
        //    return new UserStore();
        //});
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