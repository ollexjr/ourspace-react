import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from '../../stores/app';
import { Link, useLocation, useHistory, useParams } from 'react-router-dom';
import { LinkButton } from 'components/button';

import { OverlayTrigger, Tooltip, Form, Button, Badge, Modal } from 'react-bootstrap';
import { CircleAvatar } from "components/user/avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faHashtag, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { IBoardSubscription } from 'model/compiled';
import { CommunityAvatar } from 'components/board/avatar';

/*
const CircleAvatar: React.FC<{ url: string }> = ({ url }) => {
    return (
        <a className="circle-avatar" href="" style={{ width: 32, height: 32 }} />
    )
}*/

const SubscriptionIcon: React.FC<{ data: IBoardSubscription, active: boolean }> = ({ active, data }) => {
    const o = active ? "border-primary community-icon-active" : "community-icon";
    return (
        <div className="item">
            <OverlayTrigger
                trigger={['focus', 'hover']}
                overlay={
                    <Tooltip id="tooltip-disabled">+{data.boardId}
                        <Badge variant="primary">
                            {data.members}
                        </Badge>
                    </Tooltip>
                }>
                <Link to={`/+${data.boardId}`}>
                    <CommunityAvatar
                        className={o}
                        src={data.icon ?? undefined}
                        label={data.boardId ?? undefined}
                        size={48} />
                </Link>
            </OverlayTrigger>
        </div >
    )
}

interface Params {
    pathId: string
}

const SubscriptionList: React.FC<{ data: Array<any> }> = observer(({ data }) => {
    const params: Params = useParams();
    console.log("router params => ", params)
    return (
        <div className="subscription-items d-flex flex-column align-items-center">
            {data.map(t =>
                <SubscriptionIcon
                    active={params.pathId == t.boardId}
                    key={t.boardId}
                    data={t} />)}
        </div>
    );
});


export const SubscriptionListWithSearch: React.FC = observer(() => {
    const [state, setFilter] = React.useState("");
    const [showOverlay, setOverlay] = React.useState<boolean>(false);
    
    const history = useHistory();
    const store = useAppStore();
    const subscriptions = store.active?.subscriptions ?? store.defaults;
    
    return (
        <div className="subscription-list pt-2">
            {showOverlay && <Modal
                onHide={() => setOverlay(false)}
                show={showOverlay}>
                <Modal.Header className="border-none" closeButton>
                    <Modal.Title>
                        Subscriptions
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    {subscriptions.map(data => data && (
                        <div className="p-1 mb-1 border-bottom d-flex justify-content-between align-content-center">
                            <div>
                                <CommunityAvatar
                                    wrapperClassName="mr-2"
                                    src={data.icon ?? undefined}
                                    label={data.boardId ?? undefined}
                                    size={48} />
                                <span className="mr-2">
                                    +{data.boardId}
                                </span>
                                <span className="mr-2">
                                    {data.members} Members
                                </span>
                            </div>
                            <div className="d-flex align-content-center">
                                <LinkButton to={store.getCommunityLink(data.boardId!)} className="mr-1">View</LinkButton>
                                <Button>Mute</Button>
                            </div>
                        </div>
                    ))}
                </Modal.Body>
            </Modal>}

            <div className="d-flex flex-column align-items-center mb-2 button-column">
                <Button onClick={() => store.showSpotlight()} >
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
                <Button onClick={() => history.push("/+all")} >
                    <FontAwesomeIcon icon={faHashtag} />
                </Button>
                <Button onClick={() => history.push("/create")} >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <Form.Control type="text"
                className="mb-2 d-none"
                placeholder="Search subscriptions"
                onChange={(v) => setFilter(v.target.value)} />
            <SubscriptionList
                data={
                    (state.length == 0) ? subscriptions.slice(0, 12) :
                        subscriptions.filter((v, i) => (v.boardId?.startsWith(state) && i < 10) ? v : null) ?? []} />
            {subscriptions.length > 0 && <div className="d-flex flex-column align-items-center button-column">
                <Button onClick={() => setOverlay(true)} >
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </div>}
        </div>
    )
})