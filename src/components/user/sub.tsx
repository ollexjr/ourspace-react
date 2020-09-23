import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from '../../stores/app';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CircleAvatar: React.FC<{ url: string }> = ({ url }) => {
    return (
        <a className="circle-avatar" href="" style={{ width: 32, height: 32 }} />
    )
}

const Subscription: React.FC<{ boardId: string }> = ({ boardId }) => {
    return (
        <Link to={`/+${boardId}`}>
            <div className="d-flex">
                <CircleAvatar url="" />
                <span>+{boardId}</span>
            </div>
        </Link>
    )
}

const SubscriptionList: React.FC<{ data: Array<any> }> = observer(({ data }) => {
    return (
        <div>
            <h4 className="pt-3 d-none">Subscriptions</h4>
            {data.map(t => <Subscription key={t.boardId} boardId={t.boardId} />)}
        </div>
    )
});

export const SubscriptionListWithSearch: React.FC = observer(() => {
    const store = useAppStore();
    const [state, setFilter] = React.useState("");

    return (
        <div className="pt-2 h-100 _d-flex _flex-column">
            <Form.Control type="text"
                placeholder="Search subscriptions"
                onChange={(v) => setFilter(v.target.value)} />
            <div /*style={{ maxHeight: "800px", overflowY: "scroll", overflowX: "hidden" }}*/ >
                <SubscriptionList
                    data={
                        (state.length == 0) ? store.active?.subscriptions ?? [] :
                            store.active?.subscriptions.filter((v, i) => (v.boardId.startsWith(state) && i < 10) ? v : null) ?? []} />
            </div>
        </div>
    )
})