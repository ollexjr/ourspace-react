import React from 'react';
import { observer } from 'mobx-react';
import { useThreadStore, ThreadStoreProvider } from '../../stores/thread';
import { Editor as XEditor, EditorState, convertFromHTML, convertToRaw } from 'draft-js';
import { Button, Overlay, Spinner } from 'react-bootstrap';
import Editor from 'rich-markdown-editor';
import { IComment, ICommentNode } from 'model/compiled';
import { InlineVoter } from './vote';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

//import { debounce } from 'lodash';

const TextEditor: React.FC<{ source?: string, onAccept: (data: any) => Promise<any>, onCancel?: () => any }> = ({ source, onAccept }) => {
    //const [state, setState] = React.useState<EditorState>(() => EditorState.createEmpty())
    const [state, setState] = React.useState<{
        value: string,
        readOnly: boolean,
        template: boolean
    }>({
        readOnly: false,
        template: false,
        //dark: localStorage.getItem("dark") === "enabled",
        value: "",
    });
    const [isWaiting, setWaiting] = React.useState<boolean>(false);
    const target = React.useRef(null);

    return (
        <div className="border rounded p-3 bg-white" style={{ position: 'relative' }} ref={target}>
            <div style={{
                visibility: isWaiting ? "visible" : "hidden",
                position: 'fixed',
                top: 0, right: 0, left: 0, bottom: 0,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, .5)'

            }}>
                <Spinner animation="border" variant="primary" />
            </div>
            <div style={{ marginLeft: "25px", marginBottom: "1em" }}>
                <Editor
                    defaultValue={source}
                    onChange={(v) => setState({ ...state, value: v() })}
                    //onSave={(v) => v()}
                    template={true}
                />
            </div>
            <div className="d-flex flex-row justify-content-between flex-row-reverse">
                <Button onClick={() => {
                    setWaiting(true);
                    onAccept(state.value).finally(() => setWaiting(false))
                }} >Accept</Button>
            </div>
        </div>
    )
}

const TextEditorDraftJs: React.FC<{ onAccept: (data: any) => Promise<any>, onCancel?: () => any }> = ({ onAccept }) => {
    const [state, setState] = React.useState<EditorState>(() => EditorState.createEmpty())
    const [isWaiting, setWaiting] = React.useState<boolean>(false);
    const target = React.useRef(null);

    return (
        <div className="border rounded p-3" style={{ position: 'relative' }} ref={target}>
            <div style={{
                visibility: isWaiting ? "visible" : "hidden",
                position: 'fixed',
                top: 0, right: 0, left: 0, bottom: 0,
                pointerEvents: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, .5)'

            }}>
                <Spinner animation="border" variant="primary" />
            </div>
            <XEditor
                placeholder={"Leave a comment"}
                editorState={state} onChange={(editorState) => setState(editorState)} />
            <Button onClick={() => {
                setWaiting(true);
                onAccept(convertToRaw(state.getCurrentContent())).finally(() => setWaiting(false))
            }} >Accept</Button>
        </div >
    )
}

const CommentPadding: React.FC<{ depth: number }> = ({ depth }) => {
    let e = [];
    for (let index = 0; index < depth; index++) {
        e.push(<span key={index} style={{ width: 10, borderLeft: `1px solid hsl(${index * 20}, 50%, 50%)` }}></span>)
    }
    return <div className="d-flex flex-row">{e}</div>
}

const ThreadCommentCard: React.FC<{ data: IComment }> = ({ data }) => {
    const store = useThreadStore();
    const [debug, setDebug] = React.useState(false);
    const [reply, setReply] = React.useState(false);
    const [edit, setEditing] = React.useState(false);

    let depth = (data?.depth ?? 0);
    return (
        <li className="list-group-item comment-container p-0 px-2 d-flex flex-row">
            <CommentPadding depth={depth} />
            <div className="flex-grow-1">
                <div className="d-flex justify-content-between">
                    <span>@{data?.user?.username ?? ""}</span>
                    <span>{moment.unix(data?.createdAt ?? 0).fromNow()}</span>
                </div>
                {debug && <pre>
                    {JSON.stringify(data)}
                </pre>}
                {edit ? <TextEditor source={data.content ?? "error, editing with no content"} onAccept={(t) => store.addComment(t, data?.uId ?? "")} /> :
                    <ReactMarkdown source={data.content ?? "# no content, ask a developer"} />
                }
                <div className="d-flex justify-content-between mb-1">
                    <InlineVoter
                        table={store.thread?.acceptedCommentVotes ?? []}
                        votes={data?.votes ?? undefined}
                        onClick={(v) => store.voteComment(data?.uId ?? "undefined", v)} value={data?.me?.vote ?? ""} />
                    <div className="rounded border">
                        {!reply && <Button variant="outline-dark" onClick={() => setEditing(!edit)}>{!edit ? "Edit" : "Cancel"}</Button>}
                        {!edit && <Button variant="outline-dark" onClick={() => setReply(!reply)}>{!reply ? "Reply" : "Cancel"}</Button>}
                    </div>
                </div>
                {reply && <TextEditor
                    onAccept={(t) => edit ?
                        store.editComment(t, data?.uId ?? "").then(t => setEditing(false)) :
                        store.addComment(t, data?.uId ?? "").then(t => setReply(false))} />}
            </div>
        </li>
    )
}

export const ThreadCommentView: React.FC = observer(() => {
    const store = useThreadStore();
    if (!store.comments || !store.comments.data) {
        return null;
    }

    const map: Array<IComment> = [];

    let recurse = (v: {
        [k: string]: ICommentNode
    }) => {
        for (let i in v) {
            let n = v[i]
            if (!n.comment) {
                continue
            }
            map.push(n.comment)
            if (n.children) {
                recurse(n.children)
            }
        }
    }
    if (store.commentsGraph?.data) {
        recurse(store.commentsGraph?.data)
    }
    //store.commentsGraph?.data.forEach(comment => <ThreadCommentCard data={comment} />
    const flat = false;
    return (
        <ul className="list-group list-group-flush">
            {flat && store.comments?.data.map(comment => <ThreadCommentCard data={comment} />)}
            {map.map(comment => <ThreadCommentCard key={comment.uId ?? ""} data={comment} />)}
        </ul>
    )
})

export const ThreadView: React.FC<{ threadId: string }> = ({ threadId }) => {
    const store = useThreadStore();
    return (
        <div>
            <div className="p-2">
                <h4>{store.thread?.title ?? "%notset%"}</h4>
                <h5>{store.thread?.link ?? "%notset%"}</h5>
                <TextEditor onAccept={(t) => store.addComment(t)} />
            </div>
            <ThreadCommentView />
        </div>
    )
}