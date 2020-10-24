import React from 'react';
import { observable, computed, action, IObservableArray, autorun, IReactionDisposer } from 'mobx';
import { observer, useLocalStore, useAsObservableSource, Provider } from "mobx-react";
import { AppStore, useAppStore } from "stores/app";
import { ObservableRequestState, Response, APIError } from "service/api";
import {
    IThread,
    IBoard,
    IThreadSelectFilters,
    ThreadSelectFilters,
    IThreadCreateRequest,
    IThreadsSelectResponse,
    IThreadsSelectResponseWithBoardContext,
    IEntityVoteRequest,
    IVote
} from 'model/compiled';

import { useHistory } from 'react-router';
export type {
    IThread as Thread,
    IUser as User,
    IBoard as Board
} from 'model/compiled';

export class BoardStore extends ObservableRequestState {
    app: AppStore
    token?: string
    boardId: string

    //"_masonry" 
    @observable UIdatalayout: number = 0;
    @observable UIcontainerFluid: boolean = true;
    @observable backgroundImage?: string;// = `url("https://dev.ourspace.dev/res/bg-2.png")`;
    headerImage?: string = `url(https://source.unsplash.com/pCcGpVsOHoo/1090x130)`;
    //"url(https://source.unsplash.com/collection/street-photography/1280x200)"; //"url('https://dev.ourspace.dev/res/bg-1.png')"
    iconImage?: string;

    //`url("https://source.unsplash.com/collection/wallpapers/1280x800")`;
    backgroundRepeat: string = "repeat";
    backgroundSize: string = 'unset'; //"cover";

    @observable info?: IBoard
    @observable debug: boolean = false
    @observable filters: IThreadSelectFilters = {
        sortDirection: ThreadSelectFilters.SortDirection.DESC,
        rankMethod: ThreadSelectFilters.Method.TOP,
        limit: 25,
        query: "",
        page: 0,
        //createdStart: 0,
        //createdEnd: 0,
        //token: ""
    }

    isConstrained() {
        return this.app.UIconstrainContainer;// || !this.UIcontainerFluid;
    }

    filtersPrev?: IThreadSelectFilters
    autoQuery: IReactionDisposer = autorun((r) => {
        //history.push({ pathname: "" })
        console.log("autorun => ", this.filters);
        this.filtersPrev = this.filters;

        // diff keys
        Object.keys(this.filters).forEach(t => {
            //if (this.filters[t] != this.filtersPrev[t]) {}
            console.log("key => ", t);
        });

        if (this.filters.rankMethod) {
            //const history = useHistory();
            //history.push("test");
        }

    })

    static getDefaultQueryParams(): string {
        let o: IThreadSelectFilters = {}
        return Object.entries(o).map(([key, value]) => `${key}=${value}`).join("&");
    }

    getQueryParams(): string {
        return Object.entries(this.filters).map(([key, value]) => `${key}=${value}`).join("&");
    }

    @observable data: IObservableArray<IThread> = observable.array([])
    constructor(app: AppStore, boardId: string) {
        super();

        console.log("[boardstore] init => ", boardId);
        this.app = app;
        this.boardId = boardId;
        //this.filters.boardId = boardId;
        this.request();
    }

    @action
    unsubscribe(): Promise<void> {
        if (!this.info) {
            return Promise.reject();
        }
        return this.app.api.endpointPostEx("board/subscription", null, {
            action: "unsubscribe",
            boardId: this.boardId,
        }, 200).then(t => {
            this.info!.isMember = false;
        })
    }

    @action
    subscribe(): Promise<void> {
        if (!this.info) {
            return Promise.reject();
        }
        return this.app.api.endpointPostEx("board/subscription", null, {
            action: "subscribe",
            boardId: this.boardId,
        }, 200).then(t => {
            this.info!.isMember = true;
        });
    }

    getCollection(s: string): string {
        switch (s) {
            case "all":
                return "all"
            case "popular":
                return "collections/all"
            default:
                return "board/threads"
        }
    }

    @action
    request(): Promise<void> {
        this.token = undefined;
        this.error = undefined;
        this.ignore = false;
        this.filters.page = 0;

        const withContext = this.info == null && this.boardId != 'all';
        return this.wrap(() => this.app.api.endpointGet(
            this.getCollection(this.boardId), {
            ...{
                'withContext': withContext,
                'boardId': this.boardId,
                'token': this.token,
            }, ...this.filters
        }, 200).then((res: any) => {
            console.log("[board] got data");
            if (withContext) {
                this.info = res.board;
                res = res.threads;
            }
            this.token = res.token;
            this.data = observable.array<IThread>(res.data);
            return
        }))
    }

    @action
    requestMore() {
        this.ignore = true;
        this.filters!.page!++;
        return this.wrap(() => this.app.api.endpointGet(this.getCollection(this.boardId), {
            ...{
                'boardId': this.boardId,
                'sort': this.filters,
                'token': this.token,
            }, ...this.filters
        }, 200).then((res: Response) => {
            this.token = res.token;
            if (res.data?.length > 0)
                this.data.push(...res.data);
        })).finally(() => this.ignore = false)
    }

    @action
    event(event: string) {
        this.app.api.endpointPost(`board/event`, { boardId: this.boardId, action: event, }, 200);
    }

    @action
    voteThread(threadId: string, action: string): Promise<IVote> {
        if (!this.app.loggedIn)
            return Promise.reject();
        let v: IVote = {
            type: 1,
            typeCode: action,
        }
        let vote: IEntityVoteRequest = {
            type: "thread",
            entityId: threadId,
            vote: v,
        }
        return this.app.api.endpointPost("board/thread/vote", vote, 200);
    }

    createThread(s: IThreadCreateRequest): Promise<any> {
        return this.app.api.endpointPost("board/newthread?boardId=" + s.boardId, s, 200);
    }


    getThreadLink(threadId: string) {
        return `/+${this.boardId}/${threadId}`;
    }

    @action
    uploadIcon(file: File): Promise<any> {
        return this.app.api.endpointPostFile(`board/media?area=icon&boardId=${this.boardId}`, file, 200);
    }

    @action
    uploadBanner(file: File): Promise<any> {
        return this.app.api.endpointPostFile(`board/media?area=banner&boardId=${this.boardId}`, file, 200);
    }

    moderateThread() {
        this.app.moderate = this.info; 
    }

    moderateComment(c: IComment) {
        this.app.moderate = c; 
    }
}

export const boardStoreContext = React.createContext<BoardStore | null>(null);
export const BoardStoreProvider: React.FC<{ boardId: string }> = ({ boardId, children }) => {

    console.log("[BoardStoreProvider] called with => ", boardId)
    const app = useAppStore();
    const store = new BoardStore(app, boardId);

    /*
    const [store, setStore] = React.useState<BoardStore>();
    
    React.useEffect(() => {
        console.log("[BoardStoreProvider] creating new state for ", boardId);
        setStore(undefined);
        setStore(new BoardStore(app, boardId));
    }, [app, boardId]);
    */

    //const [store] = React.useState(new BoardStore(app, boardId))
    //const store = useLocalStore<BoardStore>(() => new BoardStore(app, props.boardId));
    if (store) {
        return (
            <boardStoreContext.Provider value={store}>
                {children}
            </boardStoreContext.Provider>
        )
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