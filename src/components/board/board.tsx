import React from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom';
import { observer } from 'mobx-react';
import moment from 'moment';
import '@fortawesome/react-fontawesome';
import { useBoardStore, Thread, User } from "../../stores/board";
import { Form, Container, Tooltip, OverlayTrigger, Navbar, Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { trace } from "mobx";
import { InlineVoter } from 'components/board/vote';
import { IUserRef, ThreadSelectFilters } from 'model/compiled';
import { EnumToArray, DropdownEnum } from 'components/dropdown';
import { ScrollEventProvider } from 'components/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Masonry from 'react-masonry-component';
import ReactPlayer from 'react-player';
import { NetworkGateway } from 'components/network/gateway';
import { NetworkedButton } from 'components/button';
import _ from 'lodash';
import LazyLoad from 'react-lazyload';

// @ts-ignore


var isImage = RegExp("(gif|jpe?g|tiff?|png|webp|bmp)$")

const ThreadCard: React.FC<{
    className?: string,
    data: Thread, showContext: boolean
}> = ({ className, data, showContext }) => {
    const store = useBoardStore();
    const history = useHistory();
    const cls = "_list-group-item _border-none p-0 p-sm-1 p-md-2 post-container " + className ?? className;

    if (!data || !data.link || !data.title || !data.createdAt || !data.user) {
        return null;
    }
    console.log(data.link);

    const canShowImage = isImage.test(data.link ?? "");
    const canShowMedia = data.link &&
        data.link != null &&
        ReactPlayer.canPlay(data.link);

    let url: URL
    try {
        // TODO: handle weird urls on the server
        // amend self urls to point to the hostname
        url = new URL(data.link)
    } catch {
        return null;
    }
    //<Link to={data.url!}>
    return (
        <div className={cls}>
            <div
                onClick={() => history.push(data.url!)}
                className="card border-none d-flex flex-column rounded-iframe-container shadow-sm page-link">
                <div className="d-flex mb-1">
                    <InlineVoter
                        simple
                        size="sm"
                        className="d-flex flex-column mr-1"
                        table={data?.acceptedVotes ?? []}
                        votes={data?.votes ?? undefined}
                        onClick={(v) =>
                            store.voteThread(data?.uId ?? "undefined", v)
                                .then(
                                    t => data!.me!.vote = t.typeCode)} value={data?.me?.vote ?? "unset"} />
                    <div className="card-block text-left w-100">
                        <div className="post-meta text-left">
                            <span className="mr-2">
                                <Link to={`/+${data.boardId}`}>+{data.boardId}</Link>
                            </span>
                            <span className="mr-2">
                                <small>
                                    {moment.unix(data.createdAt).fromNow()} by
                                    <strong>@{data.user.username}</strong>
                                </small>
                            </span>
                            <a
                                target="_blank"
                                href={data.link}>
                                <small className="mr-1">{`${url.host}`}</small>
                                <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} />
                            </a>
                        </div>
                        <Card.Title className="post-title text-left w-lg-75 mb-0 mb-md-2">{data.title}</Card.Title>
                    </div>
                </div>
                {(canShowImage || canShowMedia) &&
                    <LazyLoad debounce once>
                        {console.log("lazy loaded")}
                        {canShowImage && <img className="card-img-top rounded" src={data.link}></img>}
                        {canShowMedia && <ReactPlayer
                            light
                            width="100%"
                            controls
                            onPlay={() => store.event("link/playing")}
                            onPause={() => store.event("link/pause")}
                            url={data.link!} />}
                    </LazyLoad>}
            </div>
        </div>
    )
}

const ThreadCardWrapper: React.FC = ({ children }) => {
    return (
        <ul className="list-group list-group-flush">
            {children}
        </ul>
    )
}

export const ThreadsView: React.FC<{
    layout: string,
    data: Array<Thread>
}> = observer(({ layout, data }) => {
    const store = useBoardStore();
    return (
        <ScrollEventProvider
            listener={document}
            target={document.body}
            onScrollBottom={() => store.requestMore()}
        >
            {store.error && <div className="d-flex flex-column justify-content-center p-4 rounded border m-5">
                <h2>Uh Oh</h2>
                <h5>Something went wrong while loading +{store.boardId}</h5>
                <p>{store.error.message}" ({store.error.response.statusText})</p>
                <Button onClick={() => store.request()} >Try again</Button>
            </div>}
            {layout == "masonry" ?
                <Masonry
                    elementType="div"
                    className="_list-group _list-group-flush"
                >
                    {data.map((t) => t.uId &&
                        <ThreadCard
                            className="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12"
                            showContext={false} key={t.uId} data={t} />)}
                </Masonry>
                : data.map((t) => t.uId && <ThreadCard showContext={false} key={t.uId} data={t} />)
            }
        </ScrollEventProvider>
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


const BoardTextSearch: React.FC<{ value?: string, boardId?: string }> = observer(({ value, boardId }) => {
    const store = useBoardStore();
    const [state, setState] = React.useState("");

    React.useEffect(() => {
        setState("");
    }, [boardId])
    const onChange = _.debounce((v: any) => {
        store.filters.query = v.target.value;
        store.request();
    }, 100);

    return (
        <Form.Control
            className="mr-2"
            type="text"
            value={state}
            onSubmit={() => {
                onChange(state);
            }}
            //https://stackoverflow.com/questions/46986259/react-lodash-debounce-always-return-null
            placeholder="Search"
            onChange={(e) => {
                e.persist();
                setState(e.target.value);
                onChange(e);
            }} />
    )
})

const BoardNavbar: React.FC = observer(() => {
    const store = useBoardStore();
    const history = useHistory();
    return (
        <Navbar bg="white" variant="dark"
            className="shadow-sm justify-content-between border no-gutters mb-1 px-4 p-0" style={{
                zIndex: 4,
                position: 'sticky',
                top: 0,
            }}>
            <div className="d-flex flex-row align-items-center board-header mr-2">
                <div className="d-flex flex-column p-2">
                    <span>+{store.boardId}</span>
                    <span style={{ fontSize: ".78em", whiteSpace: "nowrap" }}>{store.info?.members} Members</span>
                </div>
            </div>
            <div className="d-none d-md-flex flex-row">
                <DropdownEnum
                    title="Ranking"
                    labels={["Hot", "Top", "Controversial"]}
                    values={EnumToArray(ThreadSelectFilters.Method)}
                    value={store.filters.rankMethod!}
                    onSelect={(t: number) => {
                        store.filters.rankMethod = t;
                        history.push({
                            search: store.getQueryParams(),
                        });
                    }} />
                <DropdownEnum
                    title="Direction"
                    labels={["Decending", "Ascending"]}
                    values={EnumToArray(ThreadSelectFilters.Method)}
                    value={store.filters.sortDirection!}
                    onSelect={(t: number) => {
                        store.filters.sortDirection = t;
                        history.push({
                            search: store.getQueryParams(),
                        });
                    }} />
            </div>
            <BoardTextSearch boardId={store.boardId} />
            {!store.info?.isMember && <NetworkedButton
                message="Join"
                successMessage="Unsubscribe"
                onClick={() => store.subscribe()} />}
            {store.info?.isMember && <Button onClick={() => store.unsubscribe()}>Unsubscribe</Button>}
            <Button className="ml-2" variant="outline-primary" onClick={() => store.request()}>
                <FontAwesomeIcon icon={faSync} />
            </Button>
        </Navbar>
    )
})

export const BoardView: React.FC = observer(() => {
    const store = useBoardStore();
    return (
        <>
            <BoardNavbar />
            <NetworkGateway retry={() => store.request()} state={() => store}>
                {store.debug && <div>
                    <p>Id: {store.boardId}</p>
                    <p>Length: {store.data.length}</p>
                    <p>fetching: {store.isFetching} {store.requests} </p>
                </div>}
                <ThreadsView layout="masonry" data={store.data} />
            </NetworkGateway>
        </>
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