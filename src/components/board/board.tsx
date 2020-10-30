import React from 'react';

import { Link, useHistory, useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import moment from 'moment';
import '@fortawesome/react-fontawesome';
import { useBoardStore, Thread, User } from "../../stores/board";
import { Form, Container, Tooltip, OverlayTrigger, Navbar, Button, Card, DropdownButton, Dropdown } from 'react-bootstrap';
import { trace } from "mobx";
import { InlineVoter, ArrowVoter } from 'components/board/vote';
import { CommunityLinkPopover } from 'components/board/avatar';
import { IUserRef, ThreadSelectFilters } from 'model/compiled';
import { EnumToArray, DropdownEnum, ButtonDropdown, ButtonDropdownItem } from 'components/dropdown';
import { ScrollEventProvider } from 'components/scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faReply, faBookmark, faCommentAlt, faShare,
    faSave, faLink, faPlus, faCompress, faPenFancy, faRetweet,
    faSync, faExternalLinkAlt, faUsers, faUsersSlash,
    faSortAmountDown, faSortAmountUp, faWindowMaximize, faStream, faPortrait
} from '@fortawesome/free-solid-svg-icons';
import Masonry from 'react-masonry-component';
import ReactPlayer from 'react-player';
import { NetworkGateway } from 'components/network/gateway';
import { PromiseButton, LinkButton, IconButton } from 'components/button';
import _ from 'lodash';
import { CircleAvatar } from 'components/user/avatar';
import { CommunityUserInline } from 'components/board/user';
import { MediaSource } from 'components/media';
import classNames from 'classnames';
import BoardSingleThreadOverlayObserver from 'components/board/overlay';

var isImage = RegExp("(gif|jpe?g|tiff?|png|webp|bmp)$")

function copyToClipboard(v: string) {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(v);
    }
}

const CardButtons: React.FC<{
    t: Thread,
    buttonClass: string,
    commentNum: number,
}> = ({ buttonClass, t, commentNum }) => {
    const store = useBoardStore();

    let items: Array<ButtonDropdownItem> = [
        { label: "Hide", icon: "" },
        { label: "Bookmark", icon: "", onClick: () => store.saveThread(t.uId!) },
        //{ label: "CrossPost", icon: "" },
        //{ label: "Share", icon: "" },
        { label: "Copy to clipboard", icon: "", onClick: () => copyToClipboard(t.url!) },
        { label: "Open in new tab", icon: "", onClick: () => window.open(t.url!, '_blank') },
        { label: 'Block ...', icon: "" }
    ];

    if (store.info?.isModerator) {
        items.push({ key: "m", label: "Moderate [M]", icon: "", onClick: () => store.moderateThread() });
    }

    const numCrossposts = undefined;
    return (
        <>
            <ButtonDropdown
                items={items}
            />
            <IconButton variant="outline" size="sm" icon={faShare}
                className={buttonClass}>
            </IconButton>
            <IconButton variant="outline" size="sm"
                onClick={() => store.setOverlay(t)}
                className={buttonClass}
                icon={faCommentAlt} >
                {commentNum}
            </IconButton>
            <IconButton
                variant="outline"
                size="sm"
                className={buttonClass} icon={faRetweet}>
                {numCrossposts}
            </IconButton>
        </>
    )
}


const ThreadCard: React.FC<{
    type?: number,
    className?: string,
    data: Thread, showContext: boolean
}> = ({
    type,
    className,
    data,
    showContext }) => {
        const store = useBoardStore();
        const history = useHistory();

        let cls = " post-container " + className ?? className;
        let innerClass = " d-flex flex-column rounded-iframe-container text-dark ";


        switch (type) {
            case 0:
                cls = cls + " p-0 p-sm-1 _p-md-1";
                innerClass += " card p-0 border-y page-link border-md-x border-md-y shadow-sm";
                break
            case 1:
                innerClass += " border-bottom p-1"
                break
        }

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
            if (e.target.id == 'thread-card' || e.target.id == 'thread-card-inner' || e.target.id == 'thread-card-title') {
                history.push(data.url!);
                //store.overlayThread = data;
            }
            //
            //store.overlayThread = undefined;
        }

        const width = type == 1 ? 100 : undefined;
        const height = type == 1 ? 100 : undefined;

        return (
            <div className={cls}>
                <div
                    onClick={onClick}
                    id="thread-card"
                    className={innerClass}>
                    <div className={
                        classNames("d-flex justify-content-between p-1",
                            { "flex-column": type == 0 },
                            { "flex-row-reverse": type == 1 })} >
                        <div className="d-flex flex-grow-1 mb-1">
                            <div className="mr-1 mr-md-2">
                                <ArrowVoter
                                    onVote={(v) => store.voteThread(data!.uId!, v)}
                                    vote={data?.me?.vote ?? undefined}
                                    votes={data?.votes ?? undefined}
                                />
                                {false && <InlineVoter
                                    loggedIn={store.app.loggedIn}
                                    preview
                                    size="sm"
                                    className="d-none _d-flex flex-column"
                                    table={data?.acceptedVotes ?? []}
                                    votes={data?.votes ?? undefined}
                                    onClick={(v) =>
                                        //store.voteThread(data?.uId ?? "undefined", v)
                                        //    .then(
                                        //        t => data!.me!.vote = t.typeCode)} 
                                        //value={data?.me?.vote ?? "unset"} 
                                        store.voteThread(data?.uId ?? "undefined", v)}
                                    value={data?.me?.vote ?? "unset"}
                                />}
                                {false && <div className="_d-flex flex-row flex-md-column justify-content-center align-items-center d-none">
                                    <CardButtons
                                        t={data}
                                        commentNum={data.numComments ?? 0}
                                        buttonClass="d-none d-md-none" />
                                </div>}
                            </div>
                            <div id="thread-card-inner" className="card-block text-left w-100">
                                <div className="text-left post-header d-flex flex-row flex-wrap justify-content-left">
                                    <CommunityLinkPopover boardId={data.boardId!}>
                                        <span className="mr-2">+{data.boardId}</span>
                                    </CommunityLinkPopover>
                                    <span className="mr-1">{moment.unix(data.createdAt).fromNow()} by </span>
                                    <CommunityUserInline className="mr-1" user={data.user} />
                                    {data.link && <a
                                        onClick={() => store.event("link/open")}
                                        target="_blank"
                                        href={data.link}>
                                        {url!.host}
                                        <FontAwesomeIcon className="ml-1" size="xs" icon={faExternalLinkAlt} />
                                    </a>}
                                </div>
                                <Card.Title
                                    id="thread-card-title"
                                    className="post-title mb-0 mb-md-2">
                                    {data.title}
                                </Card.Title>
                            </div>
                        </div>
                        <MediaSource
                            width={width}
                            height={height}
                            preview
                            network="save"
                            aspectRatio={data.thumbAspectRatio ?? undefined}
                            thumb={data.thumb ?? undefined}
                            src={data.link ?? undefined} />
                    </div>
                    <div className="d-flex flex-row justify-content-left px-1">
                        <CardButtons
                            t={data}
                            commentNum={data.numComments ?? 0}
                            buttonClass="d-block" />
                    </div>
                    {false && <InlineVoter
                        loggedIn={store.app.loggedIn}
                        //preview
                        size="sm"
                        className="d-none _d-flex flex-row"
                        table={data?.acceptedVotes ?? []}
                        votes={data?.votes ?? undefined}
                        onClick={(v) =>
                            store.voteThread(data?.uId ?? "undefined", v)}
                        value={data?.me?.vote ?? "unset"}
                    />}
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
                        "p-0 "
                        //    + store.isConstrained() && "container"
                    }
                >
                    {data.map((t) => t.uId &&
                        <ThreadCard
                            type={layout}
                            className={getCardClass()}
                            showContext={false} key={t.uId} data={t} />)}
                </Masonry>
            )
        }

        return data.map(
            (t) => t.uId && <ThreadCard
                type={layout}
                showContext={false}
                key={t.uId}
                data={t} />)

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
            className="shadow-sm justify-content-between border-bottom rounded-bottom no-gutters mb-1 px-1 px-md-4 p-0" style={{
                zIndex: 4,
                position: 'sticky',
                top: 0,
            }}>
            <div className="d-flex flex-row align-items-center board-header mr-2">
                <CircleAvatar className="d-block d-md-block" src={store.info?.icon ?? undefined} size={48} />
                <div className="d-flex flex-column p-2">
                    <span className="font-weight-bold">{store.getDisplayName()}</span>
                    <span style={{ fontSize: ".78em", whiteSpace: "nowrap" }}>{store.info?.members ?? "?"} Members</span>
                </div>
            </div>
            <div className="d-none d-md-flex flex-row">
                <DropdownEnum
                    title="Layout"
                    labels={[
                        { label: "Cards", icon: faWindowMaximize },
                        { label: "Compact", icon: faStream },
                        { label: "Gallery", icon: faPortrait }
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
                {false && <DropdownEnum
                    title="Direction"
                    labels={[
                        { label: "Decending", icon: faSortAmountDown },
                        { label: "Ascending", icon: faSortAmountUp }
                    ]}
                    values={EnumToArray(ThreadSelectFilters.Method)}
                    value={store.filters.sortDirection!}
                    onSelect={(t: number) => {
                        store.filters.sortDirection = t;
                        history.push({
                            search: store.getQueryParams(),
                        });
                    }} />}
            </div>
            <BoardTextSearch boardId={store.boardId} />
            {store.info &&
                <PromiseButton
                    className="d-flex d-lg-none"
                    icon={store.info.isMember ? faUsersSlash : faUsers}
                    variant={(store.info.isMember ? "primary" : "danger")}
                    onClick={() => store.info!.isMember ? store.unsubscribe() : store.subscribe()}>
                    <span className="d-none d-md-block">{store.info!.isMember ? "Leave" : "Join"}</span>
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
            <BoardSingleThreadOverlayObserver />
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