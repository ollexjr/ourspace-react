import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from 'stores/app';
import { Link } from 'react-router-dom';

export const ActivityRecentThreads: React.FC<{}> =
    observer(() => {
        const app = useAppStore();
        if (app.recent.length < 1) {
            return null;
        }
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mb-0">Recently viewed</h5>
                </div>
                <ul className="list-group list-group-flush mb-2">
                    {app.recent.reverse().map((t, i) => (i < 3) &&
                        <li className="list-group-item">
                            <Link to={`/+${t.boardId}`}>
                                <div>
                                    <small>+{t.boardId}</small>
                                </div>
                                <h6>{t.title}</h6>
                            </Link>
                        </li>)}
                </ul>
            </div>
        )
    })