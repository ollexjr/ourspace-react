import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';

import { Button, Card } from 'react-bootstrap';
import { SystemMessages } from 'components/app/messages';
import { SidebarSettings } from 'components/uisettings';
import { useAppStore } from 'stores/app';
import { IBoard } from 'model/compiled';
import { CommunityAvatar } from 'components/board/avatar';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserNotifications } from 'components/user/card';
import { LinkButton } from 'components/button';
import { Link } from 'react-router-dom';
import { ActivityRecentThreads } from 'components/user/recent';
import { Brand } from 'components/brand';

export const SidebarCard: React.FC = ({ children }) => {
    return (
        <div className="card mb-2">
            {children}
        </div>
    )
}

export const TrendingCommunitiesList: React.FC<{}> = observer(({ }) => {
    //data: Array<IBoard>

    const app = useAppStore();

    return (
        <div className="card mb-2">
            <div className="card-body">
                <h5 className="card-title d-flex align-items-center">
                    <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                    Trending
                </h5>
                <p className="mb-0">Popular communities</p>
            </div>
            <ul className="list-group list-group-flush">
                {app.trending.map(e => <li className="list-group-item">
                    <Link to={`/+${e.uId}`}>
                        <CommunityAvatar size={32} src={e.icon!} className="mr-2" />
                        <span>+{e.uId}</span>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
})

const SiteCard: React.FC<{}> =
    observer(() => {
        const app = useAppStore();
        if (app.loggedIn) {
            return null;
        }

        return (
            <div className="card mb-2">
                <div className="card-body">
                    <h5 className="card-title">New to the 'verse?</h5>
                    <p className="card-subtitle small mb-2">Signup now to get in on the action</p>
                    <div className="btn-group d-flex justify-content-between">
                        <LinkButton to="/login">Login</LinkButton>
                        <LinkButton to="/signup">Signup</LinkButton>
                    </div>
                </div>
            </div>
        )
    })

export const Portal: React.FC<{ target: string }> = ({ children, target }) => {
    const v = document.getElementById(target);
    if (!v) {
        return <div></div>
    }
    return ReactDOM.createPortal(children, v);
}

export const SidebarDefault: React.FC = () => {
    const app = useAppStore();

    return (
        <div className="mt-2">
            <div id="screen-right" ></div>
            <SystemMessages />
            <SiteCard />
            <SidebarSettings />
            <TrendingCommunitiesList />
            <UserNotifications />
            <ActivityRecentThreads />
            <footer>
                <Link to="/about">
                    <small className="p-2 text-muted">© OurSpaces {new Date().getFullYear()}</small>
                </Link>
                <Link to="/terms">
                    <small className="p-2 text-muted">Terms of Service</small>
                </Link>
                <Link to="/contact">
                    <small className="p-2 text-muted">Contact</small>
                </Link>
                <Link to="/contact/report">
                    <small className="p-2 text-muted">Report Abuse</small>
                </Link>
            </footer>
        </div>
    );
}