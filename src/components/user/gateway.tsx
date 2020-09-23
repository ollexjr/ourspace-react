import React from 'react';
import { observer } from 'mobx-react';
import { AppStore, useAppStore } from "../../stores/app";
import { Link } from 'react-router-dom';
import { LinkButton } from 'components/button';
import { Container } from 'react-bootstrap';

export const AuthGateway: React.FC<{
    loggedIn: (u: AppStore) => any, //React.ReactElement<any, any> | null,
    loggedOut: (u: AppStore) => any
}> = observer(({ loggedIn, loggedOut }) => {
    const app = useAppStore();
    return app.loggedIn ? loggedIn(app) : loggedOut(app);
})

export const RequireSignInGateway: React.FC<{ loggedIn?: (u: AppStore) => any }> = ({ loggedIn, children }) => {
    return <AuthGateway
        loggedIn={() => children}
        loggedOut={(u) => (
            <div>
                You need to be signed in to see this.
                <Link to="/login" />
            </div>
        )} />
}

export const IsLoggedIn: React.FC = (props) => {
    return <AuthGateway loggedIn={() => props.children} loggedOut={(u) => null} />
}


export const RequireAuthOverlay: React.FC<{}> = observer(({ children }) => {
    const app = useAppStore()
    return (
        <div className="auth-wrapper">
            {!app.loggedIn && <Overlay>
                <h3 className="pb-2">You need to be logged in to view this</h3>
                <LinkButton to="/login">Login or Sign up</LinkButton>
            </Overlay>}
            {app.loggedIn && children}
        </div>
    )
})

const Overlay: React.FC = ({ children }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            minHeight: 600,
            backgroundColor: "white"
        }}>
            <Container className="p-2 text-center">
                {children}
            </Container>
        </div >
    )
}