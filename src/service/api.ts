import { observable } from 'mobx';
import JwtDecode from 'jwt-decode';
import { observer } from "mobx-react";
interface Token {
    exp: number
}

interface AccessToken extends Token {
    username: string
    avatar: string
    exp: number
    uid: string
}

export interface TokenPair {
    accessToken: string
    refreshToken: string
}

export interface Response {
    data: Array<any>
    token: string
}

export class Jwt {
    readonly token: Token;
    protected raw: string
    constructor(token: string) {
        this.raw = token;
        this.token = this.decode(token);
    }
    protected decode<T>(token: string): T {
        console.log("[jwt decode] => ", token)
        //let header = JwtDecode<T>(token, { header: true });
        let body = JwtDecode<T>(token, { header: false });
        return body;
    }
    public get encoded(): string {
        return this.raw;
    }
    public expired(): boolean {
        // undefined bug, todo: fix this
        let o = Date.now() / 1000;
        return o >= this.token.exp;
    }
}

export class AccessJwt extends Jwt {
    readonly token: AccessToken;
    //protected raw: string
    constructor(rawToken: string) {
        super(rawToken);
        this.token = this.decode<AccessToken>(rawToken);
    }
}

export interface RequestState {
    networkError: false,
    response: globalThis.Response;
    message: string;
}

export interface APIError {
    response: globalThis.Response;
    message: string
}

export async function http(
    request: RequestInfo,
    init: RequestInit,
    expects: number,
): Promise<any> {
    const response = await fetch(request, init).catch(res => {
        let o: APIError = {
            response: res,
            message: `network error`,
        }
        return Promise.reject(o);
    });
    if (response.status != expects) {
        let o: APIError = {
            response: response,
            message: `expected ${expects} got ${response.status}`,
        }
        return Promise.reject(o);
    }
    return await response.json();
}

export interface TokenPair {
    accessToken: string
    refreshToken: string
}

export interface Response {
    data: Array<any>
    token: string
}

const subdomain = "www.";
export const HOST = `https://${subdomain}ourspace.dev/`;
export const API = `https://${subdomain}ourspace.dev/api/v1/`;
export const WEBSOCKET_HOST = `wss://${subdomain}ourspace.dev/api/v1/socket`;

export class NetworkService {
    socket?: WebSocket
    private getToken?: () => Promise<Jwt>;
    constructor() { }
    setGetToken(f: () => Promise<Jwt>) {
        this.getToken = f;
    }
    unsetGetToken() {
        this.getToken = undefined;
    }
    async getHeaders(): Promise<any> {
        console.log("[api] get headers...")
        if (this.getToken) {
            let jwt = await this.getToken();
            return {
                'Authorization': 'Bearer ' + jwt.encoded,
            }
        }
        return Promise.resolve({});
    }

    timer?: NodeJS.Timeout
    retryFactor: number = 1

    async closeWebSocket() {
        this.socket = undefined;
    }

    setupSocket(token?: string) {
        this.socket = token ? new WebSocket(WEBSOCKET_HOST, ["Bearer", token]) : new WebSocket(WEBSOCKET_HOST);
        this.socket.addEventListener('open', (event) => {
            console.log("[NetworkService] opened socket connection");
            //new Notification(`Connected to event server`, {});
            this.retryFactor = 1;
        });
        this.socket.addEventListener('close', (ev) => {
            console.log("[socket] close: ", JSON.stringify(ev))
            //new Notification(`Disconnected from event server`, {});
            this.socket = undefined;
            if (this.retryFactor < 10) {
                this.retryFactor += .8;
            }
            console.log("[NetworkService] retry scale: ", this.retryFactor, (1000 * this.retryFactor) / 1000)
            this.timer = setTimeout(() => this.initWebSocket(), 1000 * this.retryFactor);
        });
        this.socket.addEventListener('error', (ev) => {
            console.log("[socket] error: ", JSON.stringify(ev))
        })
        this.socket.addEventListener('message', (ev) => {
            console.log("[socket] message: ", JSON.stringify(ev.data))
        })
        return this.socket;
    }

    getSocket(): WebSocket | undefined {
        return this.socket;
    }

    async initWebSocket(): Promise<WebSocket> {
        if (this.socket) {
            return this.socket;
        }

        console.log("[NetworkService] trying socket connection ...");
        try {
            return this.setupSocket(this.getToken ? await this.getToken().then(t => t.encoded) : undefined);
        } catch {
            return this.setupSocket(undefined);
        }
        //let token = this.getToken ? this.getToken().then(t => this.setupSocket(t.encoded)) : this.setupSocket(undefined);
        //this.setupSocket(token ?? undefined);
        //return this.socket!;
    }

    basicGet(path: string, args: any, expects: number): Promise<any> {
        const encodedArgs = args ? serialize(args) : undefined;
        path = encodedArgs ? (path + "?" + encodedArgs) : path;
        return http(API + path, {
            method: 'GET',
        }, expects);
    }
    basicPost(path: string, json: any, expects: number, headers: any = {}): Promise<any> {
        return http(API + path, {
            method: "POST",
            body: JSON.stringify(json),
            headers: headers
        }, expects)
    }
    endpointGet(path: string, args: any, expects: number): Promise<any> {
        const encodedArgs = args ? serialize(args) : undefined;
        path = encodedArgs ? (path + "?" + encodedArgs) : path;
        return this.getHeaders().then(h => http(API + path, {
            method: "GET",
            headers: h,
        }, expects))
    }
    endpointPost(path: string, json: any, expects: number): Promise<any> {
        return this.getHeaders().then(h => http(API + path, {
            headers: h,
            method: "POST",
            body: JSON.stringify(json)
        }, expects));
    }
    endpointPostFile(path: string, file: File, expects: number): Promise<any> {
        let formData = new FormData();
        formData.append("file", file);
        return this.getHeaders().then(h => http(API + path, {
            headers: h,
            method: "POST",
            body: formData,
        }, expects));
    }
    endpointPostEx(path: string, json: any, args: any, expects: number): Promise<any> {
        const encodedArgs = args ? serialize(args) : undefined;
        path = encodedArgs ? (path + "?" + encodedArgs) : path;
        return this.getHeaders().then(h => http(API + path, {
            headers: h,
            method: "POST",
            body: JSON.stringify(json)
        }, expects));
    }
}

function serialize(obj: any, prefix: any = undefined): any {
    var str = [];
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            var k = prefix ? prefix + "[" + p + "]" : p, v = obj[p];
            str.push(typeof v == "object" ? serialize(v, k) : encodeURIComponent(k) + "=" + encodeURIComponent(v));
        }
    }
    return str.join("&");
}


export class ObservableRequestState {
    @observable isFetching: boolean = false
    @observable requests: number = 0
    @observable error?: APIError
    @observable ignore: boolean = false
    wrap(f: () => Promise<any>): Promise<any> {
        if (this.isFetching) {
            console.log("[networkwrapper] rejecting, already fetching")
            return Promise.reject();
        }
        this.isFetching = true;
        return f().catch((t: APIError) => {
            this.error = t;
            throw t;
        }).finally(() => this.isFetching = false)
    }

    loadedOk(): boolean {
        return this.isFetching == false && !this.error;
    }
}