import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from 'stores/app';
import { IEvent } from 'model/net';

const NotificationCard: React.FC<{ data: IEvent }> = ({ data }) => {
    return (
        <li className="list-group-item">
            <h6>{data.entityId}</h6>
            <p>

            </p>
        </li>
    )
}

export const NotificationListObserver: React.FC = observer(() => {
    const app = useAppStore();
    return (
        <ul className="list-group">
            {app.displayableEvent.slice(0, 5).map(t => <NotificationCard key={t.entityId} data={t} />)}
        </ul>
    )
})