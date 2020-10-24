import React from 'react';
import { observer } from 'mobx-react';
import { useHistory } from 'react-router-dom';
import { UserLoginForm } from "components/user/auth/login"
import { useAppStore } from 'stores/app';
import { Row, Col, Container } from 'react-bootstrap';
import { SiteNavbar, NavbarBase } from "components/navbar"
import { Jumbosheet } from 'components/jumbosheet';
import { Button } from 'react-bootstrap';

const ScreenLogin: React.FC = observer(({ }) => {
    const store = useAppStore();
    let history = useHistory();

    return (
        <Jumbosheet>
            <NavbarBase />
            <div>
                <Container className="py-md-5" style={{ maxWidth: 700 }}>
                    <h1 className="display-4 mb-5 mt-5">Recover account</h1>
                    {store.loggedIn && <div>
                        <h4>Signed in as @{store.active?.username}</h4>
                        <Button onClick={() => store.logout()} >You need to sign out first.</Button>
                    </div>}
                </Container>
            </div>
        </Jumbosheet>
    )
})

export default ScreenLogin;