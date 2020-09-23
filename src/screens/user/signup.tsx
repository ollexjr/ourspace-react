import React from 'react';
import { observer } from 'mobx-react';

import { UserSignupForm } from "components/user/auth/signup"
import { useAppStore } from 'stores/app';
import { Container } from 'react-bootstrap';
import { Jumbosheet } from 'components/jumbosheet';
import { SiteNavbar, NavbarBase } from "components/navbar"
import { Button } from 'react-bootstrap';

const ScreenLogin: React.FC = observer(({ }) => {
    const store = useAppStore();

    return (
        <Jumbosheet>
            <NavbarBase />
            <Container className="py-md-3" style={{ maxWidth: 700 }}>
                <h1 className="display-4 mb-5 mt-5">Sign up</h1>
                {store.loggedIn && <div>
                    <h4>Signed in as @{store.active?.username}</h4>
                    <Button onClick={() => store.logout()} >You need to sign out first.</Button>
                </div>}
                {!store.loggedIn && <UserSignupForm onSubmit={(name, email, key) => store.signup(name, email, key)} />}
            </Container>
        </Jumbosheet>
    )
})

export default ScreenLogin;