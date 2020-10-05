import React from 'react';
import {
    BrowserRouter as Router, Route,
    Switch,
    RouteComponentProps,
    useParams,
    useHistory,
} from "react-router-dom";

import { useAsObservableSource } from "mobx-react";
import { Button, Row, Form, Container, Navbar, Jumbotron } from 'react-bootstrap';
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

import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IUserRef, ThreadSelectFilters } from 'model/compiled';
import { EnumToArray, DropdownEnum } from 'components/dropdown';

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
            }}
        >
            <Container
                className="card p-0 rounded"
                fluid={store.fluid}
                style={{
                    minHeight: "100vh"
                }}
            >
                <Jumbotron fluid className="d-block _d-md-none p-4 m-0 contrast-background" style={{
                    backgroundImage: "url(https://source.unsplash.com/collection/wallpapers/1280x800)",
                    backgroundSize: "cover",
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