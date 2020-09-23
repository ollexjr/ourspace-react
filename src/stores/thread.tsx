import React, { useEffect } from 'react';
import { useLocalStore } from 'mobx-react';
import { AppStore, useAppStore } from "./app";
import { Response } from "service/api"
import { useBoardStore, useBoardStoreUnsafe, BoardStore, Board, Thread } from "./board";
import { IThread, IThreadWithBoardContext, IThreadsSelectResponse, ICommentSelectGraphResponse, IComment, IVote, ICommentCreateRequest, IEntityVoteRequest, ICommentSelectResponse } from 'model/compiled'
import { observable } from 'mobx';

interface Comment {
    parentId: string
}

interface ThreadResponse {
    thread: Thread,
    board: Board,
    comments: Array<any>
}

export class ThreadStore {
    app: AppStore
    board?: BoardStore
    threadId: string

    @observable
    isFetching: boolean = false

    @observable
    requests: number = 0
    threadctx?: IThreadWithBoardContext

    @observable
    thread?: IThread

    @observable
    comments?: ICommentSelectResponse

    @observable
    commentsGraph?: ICommentSelectGraphResponse


    constructor(app: AppStore, threadId: string, board?: BoardStore, init?: IThreadWithBoardContext) {
        this.board = board;
        this.app = app;
        this.threadId = threadId;

        //this.thread = init;
        //this.comments = null;

        console.log("[thread-store] => construct");
        this.load();
    }

    addComment(content: string, parentId?: string): Promise<void> {
        let comment: IComment = {
            content: content,
            parentId: parentId,
        }
        let wrapper: ICommentCreateRequest = {
            threadId: this.threadId,
            comment: comment,
        }
        return this.app.api.endpointPost("thread/comment", wrapper, 200)
            .then(t => this._insertCommentList(comment))
            .finally(() => this.isFetching = false);
    }

    _insertCommentList(comment: IComment) {
        if (this.comments && this.comments.data) {
            this.comments.data.splice(1, 0, comment);
        }
    }

    editComment(content: string, commentId: string): Promise<void> {
        if (this.isFetching) {
            return Promise.reject();
        }
        this.isFetching = true;
        return this.app.api.endpointPost("thread/comment", {}, 200).
            then((t: IComment) => { }).
            finally(() => this.isFetching = false);
    }

    voteThread(): Promise<void> {
        return Promise.reject();
    }

    voteComment(commentId: string, action: string): Promise<void> {
        let v: IVote = {
            type: 1,
            typeCode: action,
        }
        let vote: IEntityVoteRequest = {
            type: "comment",
            entityId: commentId,
            vote: v,
        }
        return this.app.api.endpointPost("thread/comment/vote", vote, 200).finally(() => this.isFetching = false);
    }

    load(): Promise<void> {
        if (this.isFetching) {
            return Promise.reject();
        }
        const withContext: boolean = (this.thread == undefined);
        this.isFetching = true;
        this.requests++
        return this.app.api.endpointGet("thread", {
            'threadId': this.threadId,
            'withContext': withContext,
        }, 200).then((t: IThreadWithBoardContext) => {
            this.thread = t.thread ?? undefined;
            this.comments = t.comments ?? undefined;
            this.commentsGraph = t.commentsGraph ?? undefined;
            return
        }).finally(() => this.isFetching = false);
    }

    requestMore(commentId: string): Promise<void> {
        return Promise.reject();
    }
}

const threadStoreContext = React.createContext<ThreadStore | null>(null);
export const ThreadStoreProvider: React.FC<{ threadId: string, initData?: Thread }> = ({ children, threadId, initData }) => {
    //const store = useLocalStore(() => new ThreadStore(props.app));
    const app = useAppStore();
    const board = useBoardStoreUnsafe();
    const [store, setStore] = React.useState<ThreadStore>();
    React.useEffect(() => {
        setStore(new ThreadStore(app, threadId, board ?? undefined, undefined));
    }, [app, board, threadId]);

    if (store) {
        return <threadStoreContext.Provider value={store}>
            {children}
        </threadStoreContext.Provider>
    }
    return (
        <>
            Loading...
        </>
    )
}

export const useThreadStore = () => {
    const store = React.useContext(threadStoreContext)
    if (!store) {
        throw new Error('appStoreContext must be used within a StoreProvider.')
    }
    return store
}