import React from 'react';
import {
    BrowserRouter as Router, Route,
    Switch,
    RouteComponentProps,
    useParams,
    useHistory,
} from "react-router-dom";

import { useAsObservableSource } from "mobx-react";
import { Button, Col, Row, Form, Container, Navbar, Jumbotron, Modal } from 'react-bootstrap';
import { observer } from 'mobx-react';
import { NetworkedButton } from 'components/button'
import { BoardStoreProvider, useBoardStore } from "../../stores/board";
import { ThreadStoreProvider } from '../../stores/thread';
import { BoardView, Portal, SidebarInfoCard, BoardModPreview } from "../../components/board/board";
import { ThreadView } from "../../components/board/thread";
import { CircleAvatar } from 'components/user/avatar';
import ScreenEdit from 'screens/board/edit';
import moment from 'moment';
import _ from 'lodash';
import { useWindowSize } from 'components/layout';

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IUserRef, ThreadSelectFilters } from 'model/compiled';
import { EnumToArray, DropdownEnum } from 'components/dropdown';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

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

const TwoPaneScaffold: React.FC<{ renderPane: () => any, onHandle?: () => any }> = ({ onHandle, renderPane, children }) => {
    const [width, height] = useWindowSize();
    return (
        <Row>
            <Col>
                <p>{width}{height}</p>
                {children}
            </Col>
            {width > 800 && <Col>
                {renderPane()}
            </Col>}
        </Row>
    )
}

const BoardThreadOverlay: React.FC<{}> = observer(({ }) => {
    const store = useBoardStore();
    return (
        <Modal show={false}>
            <Modal.Header closeButton>
                <Modal.Title>""</Modal.Title>
                <Modal.Body>
                    <Switch>
                        <Route path={`/+${store.boardId}/:threadId/`} component={RouterThread} />
                    </Switch>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    )
})

const BoardScaffold: React.FC<{ boardId: string }> = observer(({ boardId }) => {
    const store = useBoardStore();
    const history = useHistory();
    //const source = useAsObservableSource();
    React.useEffect(() => {
        console.log("scaffold arguments changed");
    }, [store]);

    return (
        <Container
            fluid
            className="m-0 p-0"
            style={{
                backgroundImage: store.backgroundImage,
                backgroundSize: store.backgroundSize,
                backgroundRepeat: store.backgroundRepeat,
                backgroundAttachment: 'fixed',
            }}
        >

            <Container
                className="border-none border-y p-0 rounded"
                fluid={store.containerFluid}
                style={{
                    minHeight: 'calc(100vh - 20px);'
                }}
            >
                <Jumbotron fluid className="d-block _d-md-none p-4 m-0 contrast-background" style={{
                    backgroundImage: store.headerImage,
                    backgroundSize: 'unset',
                }}>
                    <h1>{store.info?.title ?? boardId}</h1>
                    <h4>{store.info?.description ?? ""}</h4>
                    <h6>+/{boardId}</h6>
                </Jumbotron>
                <Switch>
                    <Route exact path={`/+${boardId}/edit`} component={ScreenEdit} />
                    <Route path={`/+${boardId}/:threadId/`} component={RouterThread} />
                    <Route exact path={`/+${boardId}`} component={BoardView} />
                </Switch>
            </Container>
            <BoardThreadOverlay />
            <Portal target="screen-right">
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