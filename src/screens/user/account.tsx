import React from 'react';

import { useParams } from 'react-router-dom';

import { useAppStore } from 'stores/app';
import { RequireSignInGateway } from 'components/user/gateway'
import { Figure, Container, Row, Col, Image, Card, Navbar, Nav } from 'react-bootstrap';
import { CircleAvatar } from 'components/user/avatar';
import { ScreenScaffold } from 'components/screen';
import { UserStoreProvider, useUserStore } from 'stores/user';

const ProvideUserView: React.FC = () => {
    const { userId } = useParams();
    return (
        <UserStoreProvider userId={userId}>
            <UserView />
        </UserStoreProvider>
    )
}

const UserView: React.FC = () => {
    const store = useUserStore();
    const isSelf = store.isSelf();
    return (
        <Container className="py-4 mt-1 align-items-center ">
            <Card>
                <Card.Body>
                    <CircleAvatar />
                    <div className="mt-1 ml-5 py-2">
                        <h3>Hello, {store.userId ?? "%undefined%"}</h3>
                        <p>Profile</p>
                    </div>
                </Card.Body>
            </Card>
            <Navbar>
                <Nav>
                    
                </Nav>
            </Navbar>
        </Container>
    )
}

const ScreenAccount: React.FC = ({ }) => {
    const appstore = useAppStore();
    return (
        <ScreenScaffold title="Account">
            <ProvideUserView />
        </ScreenScaffold>
    )
}

export default ScreenAccount;