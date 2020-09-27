import React from 'react';
import {
    BrowserRouter as Router, Route,
    Switch,
    RouteComponentProps,
    useParams,
} from "react-router-dom";

import { Container, Navbar, NavbarBrand, Jumbotron } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

import { observer } from 'mobx-react';
import { NetworkedButton } from 'components/button'
import { BoardStoreProvider, useBoardStore } from "../../stores/board";
import { ThreadStoreProvider } from '../../stores/thread';
import { BoardView, Portal, SidebarInfoCard, BoardModPreview } from "../../components/board/board";
import { ThreadView } from "../../components/board/thread";
import { Button, Row } from 'react-bootstrap';
import { CircleAvatar } from 'components/user/avatar';
import moment from 'moment';

const ScreenBoard: React.FC = () => {
    return (
        <BoardView />
    )
}

export const RouterThread: React.FC<{}> = ({ }) => {
    const { threadId } = useParams();
    return (
        <ThreadStoreProvider threadId={threadId}>
            <ThreadView threadId={threadId} />
        </ThreadStoreProvider>
    )
}

const BoardScaffold: React.FC<{ boardId: string }> = observer(({ boardId }) => {
    const store = useBoardStore();
    return (
        <Container fluid className="p-0 bg-white rounded">
            <Jumbotron fluid className="d-block d-md-none p-4 m-0">
                <h1>{store.info?.title ?? "%notset%"}</h1>
                <h6>+/{boardId}</h6>
            </Jumbotron>
            <Navbar bg="white" variant="dark" className="justify-content-between border-bottom no-gutters mb-1 px-4 p-0" style={{
                zIndex: 4,
                position: 'sticky',
                top: 0,
            }}>
                <div className="d-flex flex-row align-items-center board-header">
                    <CircleAvatar size={32} />
                    <div className="d-flex flex-column">
                        <h4>{store.info?.description ?? ""}</h4>
                        <h6>+{boardId}</h6>
                    </div>
                    <div>{store.info?.members} Members</div>
                    <div>{store.info?.posts} Posts</div>
                    <div>{store.info?.posts} Votes given</div>
                </div>
                {!store.info?.isMember && <NetworkedButton
                    message="Join"
                    successMessage="Unsubscribe"
                    onClick={() => store.subscribe()} />}
                {store.info?.isMember && <Button onClick={() => store.unsubscribe()}>Unsubscribe</Button>}
            </Navbar>
            <Switch>
                <Route path={`/+${boardId}/:threadId/`} component={RouterThread} />
                <Route exact path={`/+${boardId}`} component={BoardView} />
            </Switch>
            <Portal target="screen-left">
                <SidebarInfoCard>
                    {store.boardId}
                    <p>
                        <small>Created {moment.unix(store.info?.createdAt ?? 0).fromNow()}</small>
                    </p>
                    <BoardModPreview users={store.info?.preview ?? []} />
                </SidebarInfoCard>
            </Portal>
        </Container>
    )
})

export const RouterBoard: React.FC<RouteComponentProps<{}>> = ({ match }) => {
    console.log("[router/board] constructing, ", useParams())
    const { boardId } = useParams();
    return (
        <BoardStoreProvider boardId={boardId}>
            {console.log("[router/board] render")}
            <BoardScaffold boardId={boardId} />
        </BoardStoreProvider>
    )
}