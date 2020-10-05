import React from 'react';
import { observer } from 'mobx-react';
import { useThreadStore, ThreadStoreProvider } from '../../stores/thread';
import { Editor as XEditor, EditorState, convertFromHTML, convertToRaw } from 'draft-js';
import { Button, Row, Col, Modal, Overlay, Spinner } from 'react-bootstrap';
import Editor from 'rich-markdown-editor';
import { IComment, ICommentNode } from 'model/compiled';
import { InlineVoter, VerticalVoter } from './vote';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faExternalLinkAlt, faRandom, faShare, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { NetworkGateway } from 'components/network/gateway';

const TextEditor: React.FC<{
    source?: string,
    cancelText: string,
    acceptText: string,
    onAccept: (data: any) => Promise<any>,
    onCancel?: () => any
}> = ({ source, onAccept, onCancel }) => {
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
            <div className="d-flex flex-row justify-content-end button-row">
                <Button onClick={() => {
                    setWaiting(true);
                    onAccept(state.value).finally(() => setWaiting(false))
                }} >Accept</Button>
                <Button onClick={() => onCancel && onCancel()} >Cancel</Button>
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

    const canReply = store.app.loggedIn;
    const canEdit = canReply && (data.user!.username == store.app.active?.username);
    let depth = (data?.depth ?? 0);
    return (
        <li className="thread-link-card list-group-item comment-container p-0 px-2 d-flex flex-row">
            <CommentPadding depth={depth} />
            <div className="flex-grow-1">
                <div className="poster-info d-flex justify-content-between">
                    <span className="username">@{data?.user?.username ?? ""}</span>
                    <span>{moment.unix(data?.createdAt ?? 0).fromNow()}</span>
                </div>
                {debug && <pre>
                    {JSON.stringify(data)}
                </pre>}
                {edit ? <TextEditor
                    acceptText="Submit" cancelText="cancel"
                    source={data.content ?? "error, editing with no content"} onAccept={(t) => store.addComment(t, data?.uId ?? "")} /> :
                    <ReactMarkdown source={data.content ?? "# no content, ask a developer"} />
                }
                <div className="d-flex justify-content-between align-items-center mb-1">
                    <InlineVoter
                        table={store.thread?.acceptedCommentVotes ?? []}
                        votes={data?.votes ?? undefined}
                        onClick={(v) => store.voteComment(data?.uId ?? "undefined", v)} value={data?.me?.vote ?? ""} />
                    <div className="rounded button-row">
                        {canEdit && !reply && <Button size="sm" variant="outline-dark" onClick={() => setEditing(!edit)}>{!edit ? "Edit" : "Cancel"}</Button>}
                        {canReply && !edit && <Button size="sm" variant="outline-dark" onClick={() => setReply(!reply)}>{!reply ? "Reply" : "Cancel"}</Button>}
                    </div>
                </div>
                {reply && <TextEditor
                    acceptText="Submit" cancelText="cancel"
                    onAccept={(t) => edit ?
                        store.editComment(t, data?.uId ?? "").then(t => setEditing(false)) :
                        store.addComment(t, data?.uId ?? "").then(t => setReply(false))} />}
            </div>
        </li>
    )
}

export const ThreadCommentView: React.FC = observer(() => {
    const store = useThreadStore();
    if (!store.commentsGraph || !store.commentsGraph.data) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
                <h5>No comments yet...</h5>
            </div>
        )
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
    return (
        <ul className="list-group list-group-flush">
            {map.map(comment => <ThreadCommentCard key={comment.uId ?? ""} data={comment} />)}
        </ul>
    )
})

export const ExternalFrame: React.FC<{ src: string }> = ({ src }) => {
    const [loaded, setLoaded] = React.useState(false);
    return (
        <iframe className="external-link"
            onLoadStart={(v) => console.log("[iframe]", v)}
            onScroll={(v) => console.log("[iframe]", v)}
            marginWidth={0}
            marginHeight={0}
            frameBorder={0}
            onLoad={() => setLoaded(true)}
            style={{
                minHeight: "82vh",
            }} src={src} />
    )
}

export const ThreadView: React.FC<{ threadId: string }> = observer(({ threadId }) => {
    const store = useThreadStore();
    const [showModal, setModal] = React.useState(false);
    const canShowMedia = store.thread?.link && store.thread.link != null && ReactPlayer.canPlay(store.thread.link);
    return (
        <NetworkGateway retry={() => store.load()} state={() => store}>
            <div>
                <Modal size="xl" className="iframe-container" show={showModal} onHide={() => setModal(false)}>
                    <Modal.Header closeButton>
                        <div>
                            <Modal.Title>"{store.thread?.title ?? ""}"</Modal.Title>
                            <small>{store.thread?.link ?? ""}</small>
                        </div>
                    </Modal.Header>
                    <ExternalFrame
                        src={store.thread?.link ?? ""} />
                </Modal>
                <div className="p-2">
                    <div className="user-info mb-2">
                        <span>Posted by</span>
                        <span><strong>@<span>{store.thread?.user?.username}</span></strong></span>
                        <span>{moment.unix(store.thread?.createdAt ?? 0).fromNow()}</span>
                    </div>
                    <div className="mb-2">
                        <h4>{store.thread?.title ?? "%notset%"}</h4>
                        {store.thread?.link &&
                            <a 
                                target="_blank" 
                                href={store.thread.link}>
                                <small>({(new URL(store.thread!.link)).hostname})</small>
                            </a>}
                        {//store.thread?.link && <a href={store.thread!.link!}>{store.thread!.link!.trimMax(100)}</a>
                        }
                    </div>
                    {canShowMedia && <div className="d-flex justify-content-center rounded-iframe-container mb-2">
                        <ReactPlayer
                            light
                            controls
                            onPlay={() => store.event("link/playing")}
                            onPause={() => store.event("link/pause")}
                            url={store.thread?.link ?? ""} />
                    </div>}
                    <div className="d-flex flex-row button-row">
                        <Button size="sm" onClick={() => setModal(true)} ><FontAwesomeIcon icon={faRandom} /></Button>
                        <Button size="sm" onClick={() => setModal(true)} ><FontAwesomeIcon icon={faExpand} /></Button>
                        <Button size="sm" onClick={() => setModal(true)} ><FontAwesomeIcon icon={faShare} /></Button>
                    </div>
                </div>
                <InlineVoter
                    simple
                    size="sm"
                    className="d-flex flex-row"
                    table={store.thread?.acceptedVotes ?? []}
                    votes={store.thread?.votes ?? undefined}
                    onClick={(v) => Promise.reject()}
                    //onClick={(v) =>
                    //    store.voteThread(store.thread?.uId ?? "undefined", v)
                    //        .then(
                    //            t => store.thread!.me!.vote = t)} 
                    value={store.thread?.me?.vote ?? "unset"} />
                <div className="p-2">
                    <small>Comment as @system</small>
                    <TextEditor acceptText="Submit" cancelText="cancel" onAccept={(t) => store.addComment(t)} />
                </div>
                <ThreadCommentView />
            </div>
        </NetworkGateway>
    )
})