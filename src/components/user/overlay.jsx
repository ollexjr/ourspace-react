import React from 'react';
import { observer } from 'mobx-react';
import { Modal } from 'react-bootstrap';
import { useAppStore } from 'stores/app';
import { ThreadStoreProvider } from 'stores/thread';
import { BoardStoreProvider } from 'stores/board';

import { ThreadView } from 'components/board/thread/thread';
import { Switch, Route } from 'react-router-dom';
import { UserSignupForm } from "components/user/auth/signup"
import { UserLoginForm } from "components/user/auth/login"
import { useHistory } from 'react-router-dom';

const BoardSingleAuthenticationOverlayObserver = observer(() => {
    const store = useAppStore();
    const [mode, setMode] = React.useState();
    const history = useHistory();

    console.log("[BoardSingleAuthenticationOverlayObserver]")
    //return store.overlayThread != undefined ? 
    return (
        <Modal
            //className="primary"
            show={store.loginOverlay}
            onHide={() => store.loginOverlay = false}
            size="lg"
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    Login/Signup
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                <div>
                    {mode ? <UserSignupForm onSubmit={
                        (name, email, key) =>
                            store.signup(name, email, key)
                                .then(t => history.length > 2 ? history.goBack() : history.replace("/"))} /> :
                        <UserLoginForm
                            onSubmit={(name, key) =>
                                store.login(name, key).then(t => history.length > 2 ? history.goBack() : history.push("/"))} />
                    }
                </div>
            </Modal.Body>
        </Modal >
    );
});

export default BoardSingleAuthenticationOverlayObserver;