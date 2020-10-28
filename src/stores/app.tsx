import React from 'react';
import { observable, action, autorun, IObservableArray } from 'mobx';
import { useLocalStore } from 'mobx-react';
import { AccountStore, UserRef } from './user';
import { NetworkService, TokenPair, AccessJwt, Jwt } from '../service/api';
import JwtDecode from 'jwt-decode';
import { IEvent, join } from 'model/net';
import {
    ILoginResponse,
    ILoginRequest,
    IBoardCreate,
    IComment,
    IBoard,
    IThread,
    ICommunityUserRef,
    IBoardSubscription,
    ICommunitySelectRequest,
    ICommunitySelectResponse,
    ICommentReplyEvent
} from 'model/compiled'

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

    @observable UIanimatedHeader: boolean = false;
    @observable UIconstrainContainer: boolean = true;
    @observable UIshowEventDebug: boolean = false;
    @observable UIdarkTheme: boolean = false;

    @action
    assertInlineLogin(): Promise<any> {
        if (!this.loggedIn) {
            this.loginOverlay = true;
            return Promise.reject();
        }
        return Promise.resolve();
    }

    @observable protected _access?: AccessJwt;
    @observable protected _refresh?: Jwt;
    
    @observable isBottomOfPage: boolean = false;
    @observable displayableEvent: IObservableArray<IEvent> = observable.array([]);
    @observable commentReplyEvent: IObservableArray<ICommentReplyEvent> = observable.array([]);

    @observable recent: IObservableArray<IThread> = observable.array([]);
    @observable moderate?: IComment | IBoard | IThread | ICommunityUserRef;
    @observable loginOverlay: boolean = false;

    @observable trending: IObservableArray<IBoard> = observable.array([
        { uId: 'news' },
        { uId: 'pics' },
        { uId: 'development' },
        { uId: 'wiki' },
    ]);

    @observable defaults: IObservableArray<IBoardSubscription> = observable.array([
        { boardId: 'news' },
        { boardId: 'pics' },
        { boardId: 'development' },
        { boardId: 'wiki' },
    ]);
    @observable themeName: string = "light";

    isDarkTheme(): boolean {
        return this.themeName == 'dark';
    }

    async openSocket() {
        Notification.requestPermission();
        await this._api.initWebSocket().then(t => t.addEventListener('message', (ev) => {
            //debugger;
            let event: IEvent = JSON.parse(ev.data);
            this.addEvent(event);
        }))
    }

    addEvent(data: IEvent) {
        //debugger;
        let nop: NotificationOptions = {}
        switch (data.entityId) {
            case "comment.reply":
                let commentReply: ICommentReplyEvent = data.data;
                this.commentReplyEvent.push();
                this.displayableEvent.push(data);
                if (this.loggedIn && this.active?.username == commentReply.comment?.user?.username)
                    break;
                new Notification(
                    `@${commentReply.comment?.user?.username ?? "unknown"} replied to your comment with: "${commentReply.comment?.content ?? ""}"\n`, {});
                break;
            case "comment.moderate":
                break
            case "comment.user.mention":
                new Notification(
                    `@someone mentioned you in a thread`);
                break
            case "board.subscribe":
                new Notification(
                    `You subscribed to a community`, {});
                break
            case "board.unsubscribe":
                new Notification(
                    `You unsubscribed to a community`, {});
                break
            case "comment.vote":
                new Notification(
                    `You voted on a comment`, {});
                this.displayableEvent.push(data);
            case "thread.vote":
                new Notification(
                    `Thread vote`, {});
                this.displayableEvent.push(data);
            case "thread.crosspost":
                this.displayableEvent.push(data);
                break;
            case "thread.reply.crosspost":
                new Notification(
                    `Your thread was crossposted`, {});
                break;
        }
    }

    constructor(
        accessToken: string | undefined,
        refreshToken: string | undefined) {
        console.log("[app store] constructed with tokens =>", accessToken, refreshToken)
        //document.title = "ourspace";

        this.loadOther();
        this.openSocket();

        if (accessToken == undefined || refreshToken == undefined) {
            return
        }

        this.setupLogin(accessToken, refreshToken);
    }

    loadOther() {
        this.api.endpointGet("communities/default", {}, 200)
            .then((t: ICommunitySelectResponse) => {
                if (t.data)
                    this.defaults = observable.array(t.data.map(t => {
                        let o: IBoardSubscription = t;
                        o.boardId = t.uId;
                        return o;
                    }));
            })
        this.api.endpointGet("communities/trending", {}, 200)
            .then((t: ICommunitySelectResponse) => {
                if (!t.data)
                    return;
                this.trending = observable.array(t.data);
            }).catch(e => { });
    }

    accounts: Array<UserRef> = []
    auto = autorun((r) => this.persist())
    get api(): NetworkService {
        return this._api;
    }

    @observable active?: AccountStore | null;
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
        this.tearDownLogin();
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
    }

    addView(t: IThread) {
        this.recent.push(t);
    }

    private tearDownLogin() {
        this._refresh = undefined;
        this._access = undefined;
        this.active = undefined;
        this.api.unsetGetToken();
        this.persist();
    }

    private setupLogin(accessToken: string, refreshToken: string) {
        this._access = new AccessJwt(accessToken);
        this._refresh = new Jwt(refreshToken);
        this.api.setGetToken(this.getTokenCallback);
        this.persist();

        this.spotlightQuery("");

        this.api.closeWebSocket();
        this.openSocket();
        this.active = new AccountStore(this, this._access.token.uid);
    }

    protected getTokenCallback = (): Promise<Jwt> => {
        //console.log("[app] getting token");
        if (!this._access) {
            throw "error";
        }
        if (this._access?.expired()) {
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
            }).catch(t => {
                if (t.response == 401) {
                    // new refresh token required
                    // set user logged out
                    this.active!.invalidToken = true;
                }
                throw t;
            });
        }
        console.log("[app] using existing access token");
        return Promise.resolve(this._access);
    }

    @observable UIShowSpotlight: boolean = false

    @observable communitySearch?: ICommunitySelectResponse

    @action
    spotlightQuery(s: string): Promise<any> {

        let o: ICommunitySelectRequest = {
            query: s,
            limit: 5,
        }

        this.api.endpointGet("communities/search", o, 200).then((t: ICommunitySelectResponse) => {
            this.communitySearch = t;
            //this.communitySearch = join(this.communitySearch ?? { data: [], token: "" }, t);
        });

        return Promise.resolve();
    }

    @action
    showSpotlight() {
        this.UIShowSpotlight = true;
    }

    @action
    createCommunity(o: IBoardCreate): Promise<any> {
        return this.api.endpointPost("createcommunity", o, 200);
    }

    getCommunityLink(boardId: string) {
        return `/+${boardId}/`
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