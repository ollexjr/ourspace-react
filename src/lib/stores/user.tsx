import { observable } from 'mobx';
import { AppStore } from './app';

export class UserStore {
    username: string
    app: AppStore
    constructor(app: AppStore, username: string) {
        this.app = app;
        this.username = username;
    }
    toJson(): any {
        return {
            'username': this.username,
        }
    }
    delete() {

    }
}