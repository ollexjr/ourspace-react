import { observable } from 'mobx';
import { AppStore } from './app';

interface BoardSubscription {
    boardId: string
    createdAt: number
}

export interface UserRef {
    username: string
}

//subscriptions: Array<BoardSubscription>
interface AcccountState {
    subscriptions: Array<BoardSubscription>
    karma: number
    authorityLevel: number
}

export class UserStore {
    readonly app: AppStore
    username: string

    @observable
    invalidToken: boolean = false;
    
    @observable subscriptions: Array<BoardSubscription> = [];

    constructor(app: AppStore, username: string) {
        this.app = app;
        this.username = username;
        this.subscriptions = [];
        this.sync();
    }

    sync(): Promise<void> {
        return this.app.api.endpointGet("me/state", null, 200).then((json: AcccountState) => {
            this.subscriptions = json.subscriptions;
            return;
        })
    }
    toJson(): any {
        return {
            'username': this.username,
        }
    }
}

const fetch_retry = async (url: string, options: any, n: number) => {
    let error;
    for (let i = 0; i < n; i++) {
        try {
            return await fetch(url, options);
        } catch (err) {
            error = err;
        }
    }
    throw error;
};
