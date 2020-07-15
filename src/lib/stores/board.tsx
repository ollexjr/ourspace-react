import React from 'react';
import { observable, action, IObservableArray } from 'mobx';
import { observer, useLocalStore } from "mobx-react";
import { Response, AppStore, useAppStore } from "./app";
import { ExecFileOptionsWithStringEncoding } from 'child_process';


export interface User {
    username: string
    avatar: string
}

export interface Thread {
    uId: string
    title: string
    content: string
    link: string
    createdAt: number
    boardId: string
    thumb: string
    up: string
    down: string
    locked: boolean
    archived: boolean
}

export class BoardStore {
    app: AppStore

    token?: string
    @observable boardId: string
    @observable isFetching: boolean = false
    @observable requests: number = 0
    //@observable data: Array<Thread> = observable.array([])
    data: IObservableArray<Thread> = observable.array([])

    constructor(app: AppStore, boardId: string) {
        console.log("[boardstore] init");
        this.app = app;
        this.boardId = boardId;
        this.request();
    }

    @action
    request(): Promise<void> {
        if (this.isFetching) {
            return Promise.reject();
        }
        this.isFetching = true;
        this.requests++
        return this.app.api.endpointGet((this.boardId == '_' ? 'all' : "board/threads"), {
            'boardId': this.boardId,
        }, 200).then((res: Response) => {
            this.token = res.token;
            //this.data = res.data;
            this.data = observable.array<Thread>(res.data);
            console.log("insert", this.data);
            return
        }).finally(() => this.isFetching = false)
    }

    @action
    requestMore() {
        if (this.isFetching) {
            return Promise.reject();
        }
        this.requests++
        this.isFetching = true;
        return this.app.api.endpointGet(this.boardId == '_' ? 'all' : "board/threads", {
            'boardId': this.boardId,
        }, 200).then((res: Response) => {
            this.token = res.token;
            this.data.concat(res.data);
            return
        }).finally(() => this.isFetching = false)
    }
}

export const boardStoreContext = React.createContext<BoardStore | null>(null);
export const BoardStoreProvider: React.FC<{ boardId: string }> = (props) => {
    const app = useAppStore();
    const store = useLocalStore<BoardStore>(() => new BoardStore(app, props.boardId));
    return (
        <boardStoreContext.Provider value={store}>
            {props.children}
        </boardStoreContext.Provider>
    )
}

export const useBoardStore = (): BoardStore => {
    const store = React.useContext(boardStoreContext)
    if (!store) {
        throw new Error('useBoardStore must be used within a "boardStore" StoreProvider.')
    }
    return store
}