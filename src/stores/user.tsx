import React from 'react';
import { observable } from 'mobx';
import { useAppStore, AppStore } from './app';
import { IBoardSubscription } from 'model/compiled';

export interface UserRef {
    username: string
}

//subscriptions: Array<BoardSubscription>
interface AcccountState {
    subscriptions: Array<IBoardSubscription>;
    karma: number
    authorityLevel: number
}

export class AccountStore {
    readonly app: AppStore
    username: string



    @observable
    invalidToken: boolean = false;

    @observable subscriptions: Array<IBoardSubscription> = [];

    defaults: Array<IBoardSubscription> = [
        { boardId: "all", createdAt: 0 }];

    constructor(app: AppStore, username: string) {
        this.app = app;
        this.username = username;
        //this.subscriptions.concat(this.defaults);
        this.sync();
    }

    sync(): Promise<void> {
        return this.app.api.endpointGet("me/state", null, 200).then((json: AcccountState) => {
            if (!json.subscriptions) {
                return;
            }
            this.subscriptions = this.defaults.concat(json.subscriptions);
            return;
        })
    }
    toJson(): any {
        return {
            'username': this.username,
        }
    }
}


export class UserStore {
    readonly app: AppStore
    userId: string

    @observable
    invalidToken: boolean = false;
    constructor(app: AppStore, userId: string) {
        this.app = app;
        this.userId = userId;

        //if this.isSelf()

    }

    load() {

    }

    isSelf() {
        return this.app.loggedIn && this.app?.active?.username == this.userId;
    }
}


const userStoreContext = React.createContext<UserStore | null>(null);
export const UserStoreProvider: React.FC<{ userId: string }> = ({ children, userId }) => {
    const app = useAppStore();

    const [store, setStore] = React.useState<UserStore>();
    React.useEffect(() => {
        setStore(new UserStore(app, userId));
    }, [app, userId]);

    if (store) {
        return <userStoreContext.Provider value={store}>
            {children}
        </userStoreContext.Provider>
    }
    return (
        <>
            Loading...
        </>
    )
}

export const useUserStore = () => {
    const store = React.useContext(userStoreContext)
    if (!store) {
        throw new Error('userStoreContext must be used within a UserStoreProvider')
    }
    return store
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
