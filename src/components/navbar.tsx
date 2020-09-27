import React from 'react'

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

import { Navbar, Nav, Container, Form, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import { useAppStore, AppStoreProvider } from 'stores/app';
import { observer } from 'mobx-react';
import { InlineNavCard } from "components/user/card"

/**
 * favatar
 * forumly
 * react.site
 */
export const NavbarBase: React.FC = ({ children }) => {
    return (
        <Navbar expand="md" bg="primary" variant="dark" className="border-bottom sticky-header shadow-light">
            <Container fluid={true}>
                <Nav.Item className="flex-grow-1">
                    <Link to="/">
                        <Navbar.Brand href="/">forumly<span>.com</span></Navbar.Brand>
                    </Link>
                </Nav.Item>
                {children}
            </Container>
        </Navbar>
    )
}

export const SiteNavbar: React.FC = observer(() => {
    const store = useAppStore();
    return (
        <div>
            <NavbarBase>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" style={{
                    flexGrow: 2,
                }}>
                    <Nav.Item className="flex-grow-1 py-4 p-md-0">
                        {<Form.Control type="text" placeholder="Search" />}
                    </Nav.Item>
                    <Nav.Item className="flex-grow-1 flex-row text-right py-2 p-md-0 d-flex d-md-flex _d-md-block justify-content-end">
                        {store.loggedIn && <InlineNavCard />}
                        {!store.loggedIn ?
                            ([
                                <Link to="/login">
                                    <Button variant="light" className="mr-2 px-md-4" style={{ borderRadius: '1em' }}>Sign In</Button>
                                </Link>,
                                <Link to="/signup">
                                    <Button variant="outline-light" className="px-md-4" style={{ borderRadius: '1em' }}>Sign Up</Button>
                                </Link>
                            ]) : null}
                        {/*store.loggedIn && <LinkButton to="/logout">Log out</LinkButton>*/}
                    </Nav.Item>
                </Navbar.Collapse>
            </NavbarBase>
        </div>
    )
})