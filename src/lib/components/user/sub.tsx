import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from '../../stores/app';
import { Link   } from "react-router-dom";

const Subscription: React.FC<{ boardId: string }> = ({ boardId }) => {
    return (
        <Link to={`/+${boardId}`}>
            <div className="d-flex">
                <div className="circle-avatar" style={{ backgroundImage: "url(http://placekitten.com/g/200/400)" }} />
                #{boardId}
            </div>
        </Link>
    )
}

export const SubscriptionList: React.FC = observer(() => {
    const store = useAppStore()
    return (
        <div>
            <h4 className="pt-3">#Subscriptions</h4>
            {store.active ? store.active.subscriptions.map(t => <Subscription key={t.boardId} boardId={t.boardId} />) : null}
        </div>
    )
});