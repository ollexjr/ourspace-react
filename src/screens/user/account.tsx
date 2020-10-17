import React from 'react';

import { useParams } from 'react-router-dom';

import { useAppStore } from 'stores/app';
import { RequireSignInGateway } from 'components/user/gateway'
import { Figure, Container, Row, Col, Image, Card, Navbar, Nav, Button, Jumbotron } from 'react-bootstrap';
import { CircleAvatar } from 'components/user/avatar';
import { ScreenScaffold } from 'components/screen';
import { UserStoreProvider, useUserStore } from 'stores/user';
import { ImageHeader } from 'components/header';

const ProvideUserScaffold: React.FC = () => {
    const { userId } = useParams();
    return (
        <UserStoreProvider userId={userId}>
            <UserScaffold />
        </UserStoreProvider>
    )
}

const UserScaffold: React.FC = () => {
    const store = useUserStore();
    const isSelf = store.isSelf();
    return (
        <div>
            <ImageHeader src="">

            </ImageHeader>
            <Navbar className="sticky shadow-light border-bottom d-flex flex-row justify-content-between align-items-center">
                <h5>@{store.userId}</h5>
                <div className="button-row">
                    <Button variant="outline-primary" className="rounded">Follow</Button>
                    <Button variant="outline-primary" className="rounded">Blog</Button>
                    <Button variant="outline-primary" className="rounded">Block</Button>
                    <Button variant="outline-primary" className="rounded">Report</Button>
                </div>
            </Navbar>
            <Container>
                <Card>
                    {store.userId} moderates 5 communites.
                </Card>
                <Card>
                    Comments from communities with comments visible from the users profile:
                </Card>
            </Container>
        </div>
    )
}

const ScreenAccount: React.FC = ({ }) => {
    const appstore = useAppStore();
    return (
        <ProvideUserScaffold />
    )
}

export default ScreenAccount;