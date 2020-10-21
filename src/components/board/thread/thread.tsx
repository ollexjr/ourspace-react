import React from 'react';
import { observer } from 'mobx-react';
import { useThreadStore, ThreadStoreProvider } from '../../../stores/thread';
import { useBoardStore, Thread, User } from "../../../stores/board";

import { Navbar, Nav, Container, Button, Row, Col, Modal, Overlay, Spinner } from 'react-bootstrap';
import { TextEditor } from 'components/editor/editor';
import { IComment, ICommentNode } from 'model/compiled';
import { InlineVoter, VerticalVoter } from '../vote';
import moment from 'moment';

import ReactMarkdown from 'react-markdown';
import ReactPlayer from 'react-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faExternalLinkAlt, faReply, faPen, faEdit, faRandom, faShare, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { NetworkGateway } from 'components/network/gateway';
import { CircleAvatar } from 'components/user/avatar';
import { MediaSource } from 'components/media';
import { CommunityUserInline } from 'components/board/user';

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
                    <CommunityUserInline user={data?.user ?? undefined} />
                    <span>{moment.unix(data?.createdAt ?? 0).fromNow()}</span>
                </div>
                {debug && <pre>
                    {JSON.stringify(data)}
                </pre>}
                {edit ? <TextEditor
                    acceptText="Submit" cancelText="cancel"
                    source={data.content ?? "error, editing with no content"} onAccept={(t) => store.addComment(t, data?.uId ?? "")} /> :
                    <ReactMarkdown
                        className="wrap-all"
                        source={data.content ?? "%undefined%"} />
                }
                <div className="d-flex justify-content-between align-items-center mb-2">
                    <InlineVoter
                        table={store.thread?.acceptedCommentVotes ?? []}
                        votes={data?.votes ?? undefined}
                        onClick={(v) => store.voteComment(data?.uId ?? "undefined", v)} value={data?.me?.vote ?? ""} />
                    <div className="rounded button-row">
                        {canEdit && !reply && <Button size="sm" variant="outline-dark" onClick={() => setEditing(!edit)}>
                            {!edit ? <FontAwesomeIcon icon={faEdit} /> : "Cancel Edit"}
                        </Button>}
                        {canReply && !edit && <Button size="sm" variant="outline-dark" onClick={() => setReply(!reply)}>
                            {!reply ? <FontAwesomeIcon icon={faReply} /> : "Cancel"}
                        </Button>}
                    </div>
                </div>
                {reply && <div className="mb-2">
                    <small>Replying... </small>
                    <TextEditor
                        acceptText="Submit" cancelText="cancel"
                        onAccept={(t) => edit ?
                            store.editComment(t, data?.uId ?? "").then(t => setEditing(false)) :
                            store.addComment(t, data?.uId ?? "").then(t => setReply(false))} /></div>}
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

const ThreadNavbar = () => {
    const store = useBoardStore();
    return (
        <Navbar bg="white" variant="dark"
            className="shadow-sm justify-content-between border-y no-gutters mb-1 px-4 p-0"
            style={{
                zIndex: 4,
                position: 'sticky',
                top: 0,
            }}>
            <div className="d-flex flex-row align-items-center board-header mr-2">
                <CircleAvatar size={48} />
                <div className="d-flex flex-column p-2">
                    <span className="font-weight-bold">+{store.boardId}</span>
                    <span style={{ fontSize: ".78em", whiteSpace: "nowrap" }}>{store.info?.members} Members</span>
                </div>
            </div>
        </Navbar>
    )
}

export const ThreadView: React.FC<{ threadId: string }> = observer(({ threadId }) => {
    const store = useThreadStore();
    const [showModal, setModal] = React.useState(false);
    const canShowMedia = store.thread?.link && store.thread.link != null && ReactPlayer.canPlay(store.thread.link);
    return (
        <NetworkGateway retry={() => store.load()} state={() => store}>
            <ThreadNavbar />
            <Container className="p-0 pt-2 h-100">
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

                <div className="px-2 px-md-4 mb-2">
                    <div className="user-info mb-2 d-flex flex-row">
                        <span>Posted by</span>
                        <CommunityUserInline user={store.thread?.user ?? undefined} />
                        <span>{moment.unix(store.thread?.createdAt ?? 0).fromNow()}</span>
                    </div>
                    <div className="mb-2">
                        <h4>{store.thread?.title ?? "%notset%"}</h4>
                        {store.thread?.link &&
                            <a
                                target="_blank"
                                href={store.thread.link}>
                                <small>({(new URL(store.thread!.link)).hostname})</small>
                            </a>
                        }
                    </div>
                </div>

                <div className="container px-0 px-sm-2">
                    <MediaSource
                        //onOpen={() => setModal(true)}
                        preview
                        network="save"
                        src={store.thread?.link ?? ""} />
                </div>

                <div className="px-2 px-md-4 mb-4 _border-bottom mb-1">
                    <div className="d-flex flex-row button-row mb-2">
                        <Button size="sm" onClick={() => setModal(true)} ><FontAwesomeIcon icon={faRandom} /></Button>
                        <Button size="sm" onClick={() => setModal(true)} ><FontAwesomeIcon icon={faExpand} /></Button>
                        <Button size="sm" onClick={() => setModal(true)} ><FontAwesomeIcon icon={faShare} /></Button>
                    </div>
                    <InlineVoter
                        simple
                        size="sm"
                        className="d-flex flex-row"
                        table={store.thread?.acceptedVotes ?? []}
                        votes={store.thread?.votes ?? undefined}
                        onClick={(v) => store.voteThread(v)}
                        //onClick={(v) =>
                        //    store.voteThread(store.thread?.uId ?? "undefined", v)
                        //        .then(
                        //            t => store.thread!.me!.vote = t)} 
                        value={store.thread?.me?.vote ?? "unset"} />
                </div>

                <div id="reply" className="px-2 px-md-4 pb-4 border-bottom">
                    <small>Comment as @system</small>
                    <TextEditor acceptText="Submit" cancelText="cancel" onAccept={(t) => store.addComment(t)} />
                </div>

                <ThreadCommentView />
            </Container>
        </NetworkGateway>
    )
})