import React from 'react';

import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useAppStore } from 'stores/app';
import { RequireSignInGateway } from 'components/user/gateway'
import { Figure, Container, Row, Col, Image, Card, Navbar, Nav, Button, Jumbotron } from 'react-bootstrap';
import { CircleAvatar } from 'components/user/avatar';
import { ScreenScaffold } from 'components/screen';
import { UserStoreProvider, useUserStore } from 'stores/user';
import { ImageHeader } from 'components/header';
import { IconButton } from 'components/button';

const ProvideUserScaffold: React.FC = () => {
    const { userId } = useParams();
    return (
        <UserStoreProvider userId={userId}>
            <UserScaffold />
        </UserStoreProvider>
    )
}

const UserScaffold: React.FC = observer(() => {
    const store = useUserStore();
    const isSelf = store.isSelf();
    return (
        <div>
            <ImageHeader src="">

            </ImageHeader>

            <Navbar className="sticky sticky-top bg-white shadow-light border-bottom">
                <div className="container d-flex flex-row justify-content-between align-items-center">
                    <div>
                        <h6 className="display-5 font-bold mb-0">@{store.userId}</h6>
                        <span className="small text-muted">@{store.userId}</span>
                    </div>
                    <div className="button-row">
                        {isSelf && <IconButton variant="light" className="rounded">Report</IconButton>}
                    </div>
                </div>
            </Navbar>
            <Container>
                
            </Container>
        </div>
    )
})

const ScreenAccount: React.FC = ({ }) => {
    const appstore = useAppStore();
    return (
        <ProvideUserScaffold />
    )
}

export default ScreenAccount;