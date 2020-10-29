import React, { useEffect } from 'react';
import { useLocalStore } from 'mobx-react';
import { AppStore, useAppStore } from "./app";
import { ObservableRequestState, APIError, Response } from "service/api"
import { useBoardStore, useBoardStoreUnsafe, BoardStore, Board, Thread } from "./board";
import {
    IThread, IThreadWithBoardContext,
    ICommunityUserRef,
    ICommentSelectGraphResponse, IComment, ICommentNode,
    ICommentCreateRequest, ICommentSelectResponse,
    IEntityVoteRequest, IVote, IThreadsSelectResponse
} from 'model/compiled'
import { observable } from 'mobx';

interface ThreadResponse {
    thread: Thread,
    board: Board,
    comments: Array<any>
}

export class ThreadStore extends ObservableRequestState {
    app: AppStore
    board?: BoardStore
    threadId: string
    @observable
    requests: number = 0
    threadctx?: IThreadWithBoardContext
    @observable
    thread?: IThread
    //@observable
    //comments?: ICommentSelectResponse
    @observable
    commentsGraph?: ICommentSelectGraphResponse
    
    @observable
    flatComments: Array<IComment> = [];

    constructor(app: AppStore, threadId: string, board?: BoardStore, init?: IThreadWithBoardContext) {
        super();
        this.board = board;
        this.app = app;
        this.threadId = threadId;
        console.log("[thread-store] => construct");
        this.load();
    }

    event(event: string) {
        this.app.api.endpointPost(`board/event/thread`, { threadId: this.threadId, action: event }, 200);
    }

    addComment(content: string, parentId?: string): Promise<void> {
        let comment: IComment = {
            user: {
                username: this.app.active!.username!
            },
            content: content,
            parentId: parentId,
        }
        let wrapper: ICommentCreateRequest = {
            threadId: this.threadId,
            comment: comment,
        }
        // this is a bit silly
        //this.ignore = true;
        //return this.wrap(() => this.app.api.endpointPost("board/thread/comment", wrapper, 200)
        //    .then(t => this.insertComment(comment))
        //    .finally(() => this.ignore = false));
        return this.app.api.endpointPost("board/thread/comment", wrapper, 200)
            .then(t => this.insertComment(comment))
    }

    insertComment(comment: IComment) {
        if (!comment.parentId) {
            this.flatComments.push(comment);
        }
    }

    editComment(content: string, commentId: string): Promise<void> {
        if (this.isFetching) {
            return Promise.reject();
        }
        this.isFetching = true;
        return this.app.api.endpointPost("board/thread/comment", {}, 200).
            then((t: IComment) => {
                //inject into data
            }).finally(() => this.isFetching = false);
    }

    voteThread(action: string): Promise<any> {
        return this.board?.voteThread(this.threadId, action) ?? Promise.reject();
    }

    loadComments(more: boolean = false) { }

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
        return this.app.api.endpointPost("board/thread/comment/vote", vote, 200).finally(() => this.isFetching = false);
    }

    _flattenComments = (
        map: Array<IComment>,
        v: {
            [k: string]: ICommentNode
        }) => {
        for (let i in v) {
            let n = v[i]
            if (!n.comment) {
                continue
            }
            map.push(n.comment)
            if (n.children) {
                this._flattenComments(map, n.children)
            }
        }
    }

    load(): Promise<void> {

        const withContext: boolean = (this.thread == undefined);
        this.event("open");
        return this.wrap(() => this.app.api.endpointGet("board/thread", {
            'threadId': this.threadId,
            'withContext': withContext,
        }, 200).then((t: IThreadWithBoardContext) => {
            this.thread = t.thread ?? undefined;
            this.app.addView(this.thread!);

            //this.comments = t.comments ?? undefined;
            this.commentsGraph = t.commentsGraph ?? undefined;
            if (this.commentsGraph) {
                this._flattenComments(this.flatComments, this.commentsGraph!.data!)
            }
        }))
    }

    assertInlineLogin():Promise<any> {
       return this.app.assertInlineLogin();
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
        throw new Error('threadStoreContext must be used within a ThreadStoreProvider')
    }
    return store
}