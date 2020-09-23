import { observable } from 'mobx';
import JwtDecode from 'jwt-decode';

interface Token {
    exp: number
}

interface AccessToken extends Token {
    username: string
    avatar: string
    exp: number
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
        return Date.now() > this.token.exp * 1000
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
export async function http(
    request: RequestInfo,
    init: RequestInit,
    expects: number,
): Promise<any> {
    const response = await fetch(request, init);
    if (response.status != expects) {
        return Promise.reject(`expected ${expects} got ${response.status}`)
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

const API = "http://app.prestigiousaddresses.com/api/v1/";
export class NetworkService {
    private getToken?: () => Promise<Jwt>;
    constructor() { }
    setAuthCallback(f: () => Promise<Jwt>) {
        this.getToken = f;
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