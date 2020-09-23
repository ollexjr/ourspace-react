import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import moment from 'moment';
import '@fortawesome/react-fontawesome';
import { useBoardStore, Thread, User } from "../../stores/board";
import { Container, Tooltip, OverlayTrigger, Navbar, Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { trace } from "mobx";
import { InlineVoter } from 'components/board/vote';
import { IUserRef, Vote } from 'model/compiled';
import { useThreadStore } from 'stores/thread';

function trimMax(s: string, max: number) {
    if (s.length > max) {
        return s.substr(0, max) + "..."
    }
    return s
}

const ThreadCard: React.FC<{ data: Thread, showContext: boolean }> = ({ data, showContext }) => {
    const store = useBoardStore();
    const content = () => {
        const placement = "bottom";
        if (!data || !data.link || !data.title || !data.createdAt || !data.user) {
            return null;
        }
        return (
            <Container fluid>
                <div className="d-flex flex-nowrap flex-row-reverse flex-md-row justify-content-end">
                    <div className="post-vote d-none d-md-block pr-2">
                        <span></span>
                        <span></span>
                    </div>
                    {(data.link?.length ?? false) < 0 &&
                        <img src="https://source.unsplash.com/random" className="card-img-top" />}
                    <div className="card-block text-left x-scroll-parent my-md-auto w-100">
                        <div className="post-meta text-left d-none d-md-block mb-md-2">
                            <span className="mr-2">
                                <Link to={`/+${data.boardId}`}>+{data.boardId}</Link>
                            </span>
                            <span className="mr-2"><small>{moment.unix(data.createdAt).fromNow()} by <strong>@{data.user.username} </strong></small></span>
                            <span><small>({(new URL(data.link)).hostname})</small></span>
                        </div>
                        <Card.Title className="post-title text-left w-lg-75 mb-0 mb-md-2"></Card.Title>
                        <Link to={`/+${data.boardId}/${data.uId}/`}>
                            {trimMax(data.title, 255)}
                        </Link>
                    </div>
                </div>
                <div>
                    <InlineVoter
                        table={data?.acceptedVotes ?? []}
                        onClick={(v) =>
                            store.voteThread(data?.uId ?? "undefined", v)
                                .then(
                                    t => data!.me!.vote = t.typeCode)} value={data?.me?.vote ?? "unset"} />
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
        <ul className="list-group list-group-flush">
            {children}
        </ul>
    )
}

export const ThreadsView: React.FC<{ data: Array<Thread> }> = observer(({ data }) => {
    return (
        <ThreadCardWrapper>
            {data.map((t) => t.uId && <ThreadCard showContext={false} key={t.uId} data={t} />)}
        </ThreadCardWrapper>
    )
})

export const SidebarInfoCard: React.FC = ({ children }) => {
    return (
        <div className="border-bottom p-2">
            {children}
        </div>
    )
}

export const Portal: React.FC<{ target: string }> = ({ children, target }) => {
    const v = document.getElementById(target);
    if (!v) {
        return <div></div>
    }
    return ReactDOM.createPortal(children, v);
}

export const BoardModPreview: React.FC<{ users: Array<IUserRef> }> = ({ users }) => {
    return (
        <div>
            <h5>Moderators</h5>
            {users.map(u => <div>{u.username}</div>)}
        </div>
    )
}

export const BoardView: React.FC = observer(() => {
    //trace(true)
    const store = useBoardStore();
    return (
        <>
            <Navbar bg="white">
                <div className="d-flex">
                    <ThreadFilterTime />
                </div>
                <div className="border-right">
                    <ThreadFilterSort />
                </div>
                <div className="ml-auto">
                    <Button variant="outline-primary" onClick={() => store.request()}>Refresh</Button>
                </div>
            </Navbar>
            {store.debug && <div>
                <p>Id: {store.boardId}</p>
                <p>Length: {store.data.length}</p>
                <p>fetching: {store.isFetching} {store.requests} </p>
            </div>}
            <ThreadsView data={store.data} />
        </>
    )
})

export interface DropDownItem {
    label: string,
    key: string,
}

export const DropDown: React.FC<{ items: Array<DropDownItem>, onSelected: (key: string) => void, value: string }> = ({ items }) => {
    const set = (t: string | null, e: any): void => {
        //store.filters.sortTime = t!
    }
    return (
        <DropdownButton variant="outline-muted" id="dropdown-basic-button" title={""}>
            <Dropdown.Header>Time span</Dropdown.Header>
            {items.map((t) => <Dropdown.Item eventKey={t.key} onSelect={set}>{t.label}</Dropdown.Item>)}
        </DropdownButton>
    )
}

export const ThreadFilterTime: React.FC = observer(() => {
    const store = useBoardStore();
    return (
        <DropDown
            items={[]}
            value={store.filters?.sortDirection ?? "default"}
            onSelected={(k) => store.filters.sortDirection = k} />
    )
})

export const ThreadFilterSort: React.FC = observer(() => {
    const store = useBoardStore();
    return (
        <DropdownButton variant="outline-dark" id="dropdown-basic-button" title="Sort">
            <Dropdown.Header>Sort filter</Dropdown.Header>
            <Dropdown.Item href="?action-1=true">Top</Dropdown.Item>
            <Dropdown.Item href="?action-2=true">Another action</Dropdown.Item>
            <Dropdown.Item href="?action-3=true">Something else</Dropdown.Item>
        </DropdownButton>
    )
})