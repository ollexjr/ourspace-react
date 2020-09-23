import React from 'react';

import { useAppStore } from 'stores/app';
import { RequireSignInGateway } from 'components/user/gateway'
import { Figure, Container, Row, Col, Image } from 'react-bootstrap';
import { CircleAvatar } from 'components/user/avatar';
import { ScreenScaffold } from 'components/screen';

const ScreenAccount: React.FC = ({ }) => {
    return (
        <ScreenScaffold title="Account">
            <RequireSignInGateway>
                <Row className="py-4 mt-1 align-items-center ">
                    <CircleAvatar />
                    <div className="mt-1 ml-5 py-2">
                        <h3>Hello, Orlando</h3>
                        <p>Profile</p>
                    </div>
                </Row>
            </RequireSignInGateway>
        </ScreenScaffold>
    )
}

export default ScreenAccount;