import React from 'react';
import { observer } from 'mobx-react';
import { AppStore, useAppStore } from "../../stores/app";
import { Link } from 'react-router-dom';

type GatewayProps = {

}

export const AuthGateway: React.FC<{
    loggedIn: (u: AppStore) => any, //React.ReactElement<any, any> | null,
    loggedOut: (u: AppStore) => any
}> = observer(({ loggedIn, loggedOut }) => {
    const app = useAppStore();
    return app.loggedIn ? loggedIn(app) : loggedOut(app);
})

export const RequireSignInGateway: React.FC<{ loggedIn: (u: AppStore) => any }> = ({ loggedIn }) => {
    return <AuthGateway
        loggedIn={loggedIn}
        loggedOut={(u) => (
            <div>
                You need to be signed in to see this.
                <Link to="/login" />
            </div>)} />
}

export const IsLoggedIn: React.FC = (props) => {
    return <AuthGateway loggedIn={() => props.children} loggedOut={(u) => null} />
}