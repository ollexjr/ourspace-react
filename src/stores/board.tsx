import React from 'react';
import { observable, action, IObservableArray, autorun } from 'mobx';
import { observer, useLocalStore, useAsObservableSource } from "mobx-react";
import { AppStore, useAppStore } from "stores/app";
import { Response } from "service/api";
import { IThread, IThreadSelectFilters, IBoard, IThreadsSelectResponse, IThreadsSelectResponseWithBoardContext, Thread, IVote } from 'model/compiled';
export type { IThread as Thread, IUser as User, IBoard as Board } from 'model/compiled';

export class BoardStore {
    app: AppStore
    token?: string
    boardId: string

    @observable isFetching: boolean = false
    @observable requests: number = 0
    @observable info?: IBoard
    @observable debug: boolean = false
    @observable filters: IThreadSelectFilters = {
        sortDirection: "ASC",
        rankMethod: "Hot",
        createdStart: 0,
        createdEnd: 0,
        token: ""
    }

    //_source = useAsObservableSource({})
    //_auto = autorun(() => {})

    //@observable data: Array<Thread> = observable.array([])
    @observable data: IObservableArray<IThread> = observable.array([])

    constructor(app: AppStore, boardId: string) {
        console.log("[boardstore] init => ", boardId);
        this.app = app;
        this.boardId = boardId;
        this.request();
    }

    @action
    request(): Promise<void> {
        if (this.isFetching) {
            console.log("[board] rejecting, request active")
            return Promise.reject();
        }
        this.isFetching = true;
        this.requests++
        this.token = undefined;

        console.log("[board] requesting...")
        const withContext = this.info == null && this.boardId != '_';
        return this.app.api.endpointGet((this.boardId == '_' ? 'all' : "board/threads"), {
            ...{
                'boardId': this.boardId,
                'withContext': withContext,
            }, ...this.filters
        }, 200).then((res: any) => {
            console.log("[board] got data");
            if (withContext) {
                //let o: IThreadSelectResponse = res;
                // parse nested object with board ifno
                this.info = res.board;
                res = res.threads;
            }
            this.token = res?.token;
            this.data = observable.array<IThread>(res.data);
            return
        }).finally(() => this.isFetching = false)
    }

    @action
    requestMore() {
        if (this.isFetching || !this.token) {
            return Promise.reject();
        }
        this.requests++
        this.isFetching = true;
        return this.app.api.endpointGet(this.boardId == '_' ? 'all' : "board/threads", {
            'boardId': this.boardId,
            'sort': this.filters,
        }, 200).then((res: Response) => {
            this.token = res.token;
            this.data.concat(res.data);
            return
        }).finally(() => this.isFetching = false)
    }

    @action
    voteThread(threadId: string, action: string): Promise<IVote> {
        if (!this.app.loggedIn)
            return Promise.reject();
        return this.app.api.endpointPost("thread/vote", {
            threadId: threadId,
        }, 200);
    }
}

export const boardStoreContext = React.createContext<BoardStore | null>(null);
export const BoardStoreProvider: React.FC<{ boardId: string }> = ({ boardId, children }) => {
    console.log("[BoardStoreProvider] constructing ", boardId)
    const app = useAppStore();
    //const store = new BoardStore(app, boardId);
    const [store, setStore] = React.useState<BoardStore>();
    React.useEffect(() => {
        setStore(new BoardStore(app, boardId));
    }, [app, boardId]);

    //const [store] = React.useState(new BoardStore(app, boardId))
    //const store = useLocalStore<BoardStore>(() => new BoardStore(app, props.boardId));
    if (store) {
        return <boardStoreContext.Provider value={store}>
            {children}
        </boardStoreContext.Provider>;
    }
    return (
        <div>
            Loading
        </div>
    )
}

export const useBoardStore = (): BoardStore => {
    const store = React.useContext(boardStoreContext)
    if (!store) {
        throw new Error('useBoardStore must be used within a "boardStore" StoreProvider.')
    }
    return store
}

export const useBoardStoreUnsafe = (): BoardStore | null => {
    return React.useContext(boardStoreContext)
}