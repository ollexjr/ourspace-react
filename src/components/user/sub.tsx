import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from '../../stores/app';
import { Link, useLocation, useHistory, useParams } from 'react-router-dom';
import { OverlayTrigger, Tooltip, Form, Button } from 'react-bootstrap';
import { CircleAvatar } from "components/user/avatar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faArrowRight } from '@fortawesome/free-solid-svg-icons';
/*
const CircleAvatar: React.FC<{ url: string }> = ({ url }) => {
    return (
        <a className="circle-avatar" href="" style={{ width: 32, height: 32 }} />
    )
}*/

const Subscription: React.FC<{
    active: boolean,
    boardId: string
}> = ({ active, boardId }) => {
    const o = active ? "border-primary community-icon-active" : "community-icon";
    return (
        <Link to={`/+${boardId}`}>
            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">+{boardId}</Tooltip>}>
                <div className="d-flex flex-row flex-no-wrap mb-2 align-items-center" style={{ overflowX: 'hidden' }}>
                    <CircleAvatar className={o} src="" label={boardId} size={48} />
                    <span className="d-none ml-2" >+{boardId}</span>
                </div>
            </OverlayTrigger>
        </Link>
    )
}

interface Params {
    pathId: string
}

const SubscriptionList: React.FC<{ data: Array<any> }> = observer(({ data }) => {
    const params: Params = useParams();
    console.log("router params => ", params)
    return (
        <>
            {data.map(t => <Subscription
                active={params.pathId == t.boardId}
                key={t.boardId}
                boardId={t.boardId} />)}
        </>
    )
});

export const SubscriptionListWithSearch: React.FC = observer(() => {
    const store = useAppStore();
    const [state, setFilter] = React.useState("");
    const history = useHistory();

    const subscriptions = store.active?.subscriptions ?? []
    return (
        <div className="subscription-list pt-2">
            <div className="d-flex flex-column align-items-center mb-2 button-column">
                <Button onClick={() => store.showSpotlight()} >
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
                <Button onClick={() => history.push("/create")} >
                    <FontAwesomeIcon icon={faPlus} />
                </Button>
            </div>
            <Form.Control type="text"
                className="mb-2 d-none"
                placeholder="Search subscriptions"
                onChange={(v) => setFilter(v.target.value)} />
            <div /*style={{ maxHeight: "800px", overflowY: "scroll", overflowX: "hidden" }}*/ >
                <SubscriptionList
                    data={
                        (state.length == 0) ? subscriptions :
                            subscriptions.filter((v, i) => (v.boardId.startsWith(state) && i < 10) ? v : null) ?? []} />
            </div>
            {subscriptions.length > 0 && <div className="d-flex flex-column align-items-center button-column">
                <Button onClick={() => history.push("/create")} >
                    <FontAwesomeIcon icon={faArrowRight} />
                </Button>
            </div>}
        </div>
    )
})