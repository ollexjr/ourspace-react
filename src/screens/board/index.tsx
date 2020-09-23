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
import { BoardStoreProvider, useBoardStore } from "../../stores/board";
import { ThreadStoreProvider } from '../../stores/thread';
import { BoardView, Portal, SidebarInfoCard, BoardModPreview } from "../../components/board/board";
import { ThreadView } from "../../components/board/thread";
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

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
                <h1>Hello, world!</h1>
            </Jumbotron>
            <Row className="border-bottom no-gutters mb-1">
                <Col>
                    <h4>+{store.info?.description ?? ""}</h4>
                    <h6>+{boardId}</h6>
                </Col>
            </Row>
            <Switch>
                <Route path={`/+${boardId}/:threadId/`} component={RouterThread} />
                <Route exact path={`/+${boardId}`} component={BoardView} />
            </Switch>
            <Portal target="screen-left">
                <SidebarInfoCard>
                    {store.boardId}
                    <p>
                        <small>Created {store.info?.createdAt}</small>
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