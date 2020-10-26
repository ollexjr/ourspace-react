import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from 'stores/app';

export const ActivityRecentThreads: React.FC<{}> =
    observer(() => {
        const app = useAppStore();
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mb-0">Recently viewed</h5>
                </div>
                <ul className="list-group list-group-flush mb-2">
                    {app.recent.reverse().map((t, i) => (i < 3) &&
                        <li className="list-group-item">
                            <div></div>
                            <h6>+{t.boardId} - {t.title}</h6>
                        </li>)}
                </ul>
            </div>
        )
    })