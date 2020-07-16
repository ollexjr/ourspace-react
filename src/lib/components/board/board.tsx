import React from 'react';
import { observer } from 'mobx-react';
import { useBoardStore, Thread } from "../../stores/board";
import Navbar from 'react-bootstrap/esm/Navbar';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';

import { trace } from "mobx"
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

function trimMax(s: string, max: number) {
    if (s.length > max) {
        return s.substr(0, max) + "..."
    }
    return s
}

const ThreadCard: React.FC<{ data: Thread }> = ({ data }) => {
    const content = () => {
        return (
            <Container fluid className="d-flex flex-row-reverse flex-md-row flex-nowrap justify-content-end">
                <div className="post-vote d-none d-md-block pr-2">
                    <span></span>
                    <span></span>

                </div>
                <Card.Header className="post-header">

                </Card.Header>
                <div className="card-block text-left x-scroll-parent my-md-auto w-100">
                    <div className="post-meta text-left d-none d-md-block mb-md-2">
                        <span></span>
                    </div>
                    <Card.Title className="post-title text-left w-lg-75 mb-0 mb-md-2"></Card.Title>
                    <Link to={`/+${data.boardId}/${data.uId}/`}>
                        {trimMax(data.title, 255)}
                    </Link>
                </div>
            </Container>
        )
    }
    return (
        <li className="list-group-item p-0 post-container">
            {content()}
        </li>
    )
}

const ThreadCardWrapper: React.FC = ({ children }) => {
    return (
        <div className="card">
            <ul className="list-group list-group-flush">
                {children}
            </ul>
        </div>
    )
}

export const ThreadsView: React.FC<{ data: Array<Thread> }> = observer(({ data }) => {
    return (
        <ThreadCardWrapper>
            {data.map((t) => <ThreadCard data={t} />)}
        </ThreadCardWrapper>
    )
})

export const BoardView: React.FC = observer(() => {
    //trace(true)
    const store = useBoardStore();
    return (
        <div>
            <Navbar bg="white">
                <Button onClick={() => store.request()}>Refresh</Button>
            </Navbar>
            <p>Id: {store.boardId}</p>
            <p>Length: {store.data.length}</p>
            <p>fetching: {store.isFetching} {store.requests} </p>
            <ThreadsView data={store.data} />
        </div>
    )
})