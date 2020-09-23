import React from 'react';
import { useAppStore } from 'stores/app';
import { Container } from 'react-bootstrap';
import { NavbarBase } from "components/navbar"
import { Jumbosheet } from 'components/jumbosheet';

const ScreenLogoutConfirm: React.FC = () => {
    const app = useAppStore()
    return (
        <>
            <NavbarBase />
            <div>
                <Container className="py-md-5" style={{ maxWidth: 700 }}>
                    <h1 className="display-4 mb-5 mt-5">Logout</h1>
                </Container>
            </div>
        </>
    )
}

export default ScreenLogoutConfirm;