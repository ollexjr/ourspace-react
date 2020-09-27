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

const HOST = "http://app.prestigiousaddresses.com/"
const API = "http://app.prestigiousaddresses.com/api/v1/";
const WEBSOCKET_HOST = "ws://app.prestigiousaddresses.com/api/v1/socket"
export class NetworkService {
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

    getWebSocket() {
        let s = new WebSocket(WEBSOCKET_HOST);
        s.addEventListener('open', function (event) {
            s.send('hello');
        });
        s.addEventListener('close', function (ev) {
            console.log("[socket] close: ", ev)
            alert("[socket] close: " + ev)
        });
        s.addEventListener('error', (ev) => {
            console.log("[socket] error: ", ev)
            alert("[socket] error: " + ev)
        })
        s.addEventListener('message', (ev) => {
            console.log("[socket] message: ", ev)
            alert("[socket] message: " + ev)
        })
        return s;
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