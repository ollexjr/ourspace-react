import React from 'react';
import {
    BrowserRouter as Router, Route,
    RouteComponentProps,
    useParams,
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col'

import { useLocalStore } from 'mobx-react';
import { BoardStoreProvider, useBoardStore } from "../../stores/board";
import { BoardView } from "../../components/board/board";
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/esm/Button';

const Blank: React.FC = () => {
    return (
        <div></div>
    )
}

const ScreenThread: React.FC = () => {
    return (
        <div></div>
    )
}

const ScreenBoard: React.FC = () => {
    return (
        <BoardView />
    )
}

const BoardScaffold: React.FC = () => {
    const store = useBoardStore();
    return (
        <Router>
            <div className="board">
                <Row className="border-bottom sticky">
                    <Col className="bg-white">
                        <Navbar expand="md" className="d-flex align-items-center px-0">
                            <NavbarBrand>Board "{store.boardId}"</NavbarBrand>
                            <div className="ml-auto">
                                <Button variant="outline-primary">Join</Button>
                            </div>
                        </Navbar>
                    </Col>
                </Row>
                <Jumbotron fluid className="d-block d-md-none">
                    <h1>Hello, world!</h1>
                </Jumbotron>
                <Container fluid className="d-none d-md-block">
                    <Col>
                    </Col>
                </Container>
                <Route path="" component={ScreenBoard} />
                <Route path=":threadId" component={ScreenThread} />
            </div>
        </Router>

    )
}

export const RouterBoard: React.FC<RouteComponentProps<{}>> = ({ match }) => {
    const { boardId } = useParams();
    //const todo = useLocalStore<BoardStore>(() => new BoardStore(boardId));
    return (
        <BoardStoreProvider boardId={boardId}>
            <BoardScaffold />
        </BoardStoreProvider>
    )
}