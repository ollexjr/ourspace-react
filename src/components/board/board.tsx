import React from 'react';

import { Link, useHistory, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import moment from 'moment';
import '@fortawesome/react-fontawesome';
import { useBoardStore, Thread, User } from "../../stores/board";
import { Form, Container, Tooltip, OverlayTrigger, Navbar, Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { trace } from "mobx";
import { InlineVoter } from 'components/board/vote';
import { CommunityLinkPopover } from 'components/board/avatar';
import { IUserRef, ThreadSelectFilters } from 'model/compiled';
import { EnumToArray, DropdownEnum, ButtonDropdown, ButtonDropdownItem } from 'components/dropdown';
import { ScrollEventProvider } from 'components/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faBookmark, faCommentAlt, faShare, faSave, faLink, faPlus, faCompress, faSync, faExternalLinkAlt, faUsers, faUsersSlash } from '@fortawesome/free-solid-svg-icons';
import Masonry from 'react-masonry-component';
import ReactPlayer from 'react-player';
import { NetworkGateway } from 'components/network/gateway';
import { PromiseButton, LinkButton } from 'components/button';
import _ from 'lodash';
import { CircleAvatar } from 'components/user/avatar';
import { CommunityUserInline } from 'components/board/user';
import { MediaSource } from 'components/media';

var isImage = RegExp("(gif|jpe?g|tiff?|png|webp|bmp)$")

const CardButtons: React.FC<{
    buttonClass: string,
    commentNum: number,
}> = ({ buttonClass, commentNum }) => {
    const store = useBoardStore();

    let items: Array<ButtonDropdownItem> = [
        { label: "Hide", icon: "" },
        { label: "Bookmark", icon: "" },
        //{ label: "CrossPost", icon: "" },
        //{ label: "Share", icon: "" },
        { label: "Copy to clipboard", icon: "" },
        { label: "Open in new tab", icon: "" },
    ];

    if (store.info?.isModerator) {
        items.push({ key: "m", label: "Moderate [M]", icon: "", onClick: () => store.moderateThread() });
    }

    return (
        <>
            <ButtonDropdown
                items={items}
            />
            <Button variant="outline"
                className={buttonClass}>
                <FontAwesomeIcon icon={faShare} />
            </Button>
            <Button variant="outline" className={buttonClass}>
                <FontAwesomeIcon icon={faCommentAlt} />
                {commentNum}
            </Button>
            <Button variant="outline" className={buttonClass}>
                <FontAwesomeIcon icon={faLink} />
            </Button>
        </>
    )
}


const ThreadCard: React.FC<{
    className?: string,
    data: Thread, showContext: boolean
}> = ({ className, data, showContext }) => {
    const store = useBoardStore();
    const history = useHistory();
    const cls = "_list-group-item _border-none p-0 p-sm-1 p-md-2 post-container " + className ?? className;

    if (!data || !data.title || !data.createdAt || !data.user) {
        return null;
    }

    const src = data.thumb;

    const canShowImage = isImage.test(src ?? "");
    const canShowMedia = data.link && ReactPlayer.canPlay(data.link);

    let url: URL
    try {
        if (data.link)
            // TODO: handle weird urls on the server
            // amend self urls to point to the hostname
            url = new URL(data.link)
    } catch {
        return null;
    }

    const onClick = (e: any) => { //React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target.id == 'thread-card' || e.target.id == 'thread-card-inner' || e.target.id == 'thread-card-title')
            history.push(data.url!);
    }

    //<Link to={data.url!}>
    // _className="d-flex flex-column justify-content-center align-items-center"
    return (
        <div className={cls}>
            <div
                onClick={onClick}
                id="thread-card"
                className="card border-none border-md-x border-md-y d-flex flex-column rounded-iframe-container shadow-sm page-link text-dark">
                <div className="d-flex mb-1">
                    <div className="mr-1 mr-md-2">
                        <InlineVoter
                            simple
                            size="sm"
                            className="d-flex flex-column"
                            table={data?.acceptedVotes ?? []}
                            votes={data?.votes ?? undefined}
                            onClick={(v) =>
                                //store.voteThread(data?.uId ?? "undefined", v)
                                //    .then(
                                //        t => data!.me!.vote = t.typeCode)} 
                                //value={data?.me?.vote ?? "unset"} 
                                store.voteThread(data?.uId ?? "undefined", v)}
                            value={data?.me?.vote ?? "unset"}
                        />
                        {false && <div className="_d-flex flex-row flex-md-column justify-content-center align-items-center d-none">
                            <CardButtons
                                commentNum={data.numComments ?? 0}
                                buttonClass="d-none d-md-none" />
                        </div>}
                    </div>
                    <div id="thread-card-inner" className="card-block text-left w-100">
                        <div className="post-meta text-left d-flex flex-row flex-wrap justify-content-left">
                            <CommunityLinkPopover boardId={data.boardId!}>
                                <span className="mr-2">+{data.boardId}</span>
                            </CommunityLinkPopover>
                            <span className="mr-1">{moment.unix(data.createdAt).fromNow()} by </span>
                            <CommunityUserInline className="mr-1" user={data.user} />
                            {data.link && <a
                                className="small"
                                onClick={() => store.event("link/open")}
                                target="_blank"
                                href={data.link}>
                                {url!.host}
                                <FontAwesomeIcon size="xs" icon={faExternalLinkAlt} />
                            </a>}
                        </div>
                        <Card.Title
                            id="thread-card-title"
                            className="post-title text-left w-lg-75 mb-0 mb-md-2">
                            {data.title}
                        </Card.Title>
                    </div>
                </div>
                <MediaSource
                    preview
                    network="save"
                    aspectRatio={data.thumbAspectRatio ?? undefined}
                    thumb={data.thumb ?? undefined}
                    src={data.link ?? undefined} />
                <div className="d-flex flex-row justify-content-left">
                    <CardButtons commentNum={data.numComments ?? 0} buttonClass="d-block" />
                </div>
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
    layout: number,
    data: Array<Thread>
}> = observer(({ layout, data }) => {
    const store = useBoardStore();

    const getCardClass = () => {
        if (store.isConstrained()) {
            //return "col-12 col-md-6 col-lg-4";
            return "col-12 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-4";
            //return "col-xl-4 col-lg-6 col-md-6 col-sm-12 col-xs-12";
        }
        return "col-xl-3 col-lg-6 col-md-6 col-sm-12 col-xs-12";
    }

    const getLayout = () => {
        if (layout == 0) {
            return (
                <Masonry
                    elementType="div"
                    className={
                        "_h-100 _list-group _list-group-flush p-0 "
                        //    + store.isConstrained() && "container"
                    }
                >
                    {data.map((t) => t.uId &&
                        <ThreadCard
                            className={getCardClass()}
                            showContext={false} key={t.uId} data={t} />)}
                </Masonry>
            )
        }

        return data.map((t) => t.uId && <ThreadCard showContext={false} key={t.uId} data={t} />)

    }

    return (
        <ScrollEventProvider
            listener={document}
            target={document.getElementById("screen-row")}
            onScrollBottom={() => store.requestMore()}
        >
            {store.error && <div className="d-flex flex-column justify-content-center p-4 rounded border m-5">
                <h2>Uh Oh</h2>
                <h5>Something went wrong while loading the board +{store.boardId}</h5>
                <p>{store.error.message}" ({store.error.response.statusText})</p>
                <Button onClick={() => store.request()} >Try again</Button>
            </div>}
            {getLayout()}
        </ScrollEventProvider>
    )
})

export const BoardModPreview: React.FC<{ users: Array<IUserRef> }> = ({ users }) => {
    return (
        <div>
            <h6>Moderators</h6>
            <div>
                {users.map(u => <small>@{u.username}</small>)}
            </div>
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
    //const params: { boardId: string } = useParams();
    return (
        <Navbar bg="white" variant="dark"
            className="shadow-sm justify-content-between border-bottom no-gutters mb-1 px-1 px-md-4 p-0" style={{
                zIndex: 4,
                position: 'sticky',
                top: 0,
            }}>
            <div className="d-flex flex-row align-items-center board-header mr-2">
                <CircleAvatar className="d-block d-md-block" src={store.info?.icon ?? undefined} size={48} />
                <div className="d-flex flex-column p-2">
                    <span className="font-weight-bold">+{store.boardId}</span>
                    <span style={{ fontSize: ".78em", whiteSpace: "nowrap" }}>{store.info?.members} Members</span>
                </div>
            </div>
            <div className="d-none d-md-flex flex-row">
                <DropdownEnum
                    title="Layout"
                    labels={[
                        { label: "Compact", icon: faSave },
                        { label: "Cards", icon: faSave },
                        { label: "Gallery", icon: faSave }
                    ]}
                    values={[0, 1, 2]}
                    value={store.UIdatalayout}
                    onSelect={(t: number) => store.UIdatalayout = t} />
                <DropdownEnum
                    title="Ranking"
                    labels={[{ label: "Hot", icon: faSave }, { label: "Top", icon: faSave }, { label: "Controversial", icon: faSave }]}
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
                    labels={[{ label: "Decending", icon: faSave }, { label: "Ascending", icon: faSave }]}
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
            <Button className="mr-2" variant="outline-primary" onClick={() => store.request()}>
                <FontAwesomeIcon icon={faSync} />
            </Button>
            <LinkButton to={`+${store.boardId}/create`}>
                <FontAwesomeIcon icon={faPlus} />
            </LinkButton>
            {

                /*!store.info?.isMember && <NetworkedButton
                    message="Join"
                    successMessage="Unsubscribe"
                    onClick={() => store.subscribe()} />
                    */
                //store.info?.isMember && <Button onClick={() => store.unsubscribe()}>Unsubscribe</Button>
                store.info && <PromiseButton
                    icon={store.info.isMember ? faUsersSlash : faUsers}
                    variant={(store.info.isMember ? "primary" : "danger")}
                    onClick={() => store.info!.isMember ? store.unsubscribe() : store.subscribe()}>
                </PromiseButton>
            }
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
                <ThreadsView
                    layout={store.UIdatalayout}
                    data={store.data} />
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