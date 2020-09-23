import React from 'react'

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

import { Navbar, Nav, Container, Form, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import { useAppStore, AppStoreProvider } from 'stores/app';
import { observer } from 'mobx-react';
import { InlineNavCard } from "components/user/card"

export const NavbarBase: React.FC = ({ children }) => {
    return (
        <Navbar expand="md" bg="white" className="border-bottom sticky-header shadow-light">
            <Container fluid={true}>
                <Nav.Item className="flex-grow-1">
                    <Link to="/">
                        <Navbar.Brand href="#home">Talk<span>.xyz</span></Navbar.Brand>
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
                <Navbar.Collapse id="basic-navbar-nav" className="">
                    <Nav.Item className="flex-grow-1 py-4 p-md-0">
                        {/*<Form.Control type="text" placeholder="Search" />*/}
                    </Nav.Item>
                    <Nav.Item className="flex-grow-1 flex-row text-right py-2 p-md-0 d-flex d-md-flex _d-md-block justify-content-end">
                        {store.loggedIn && <InlineNavCard />}
                        {!store.loggedIn ?
                            ([
                                <Link to="/signup">
                                    <Button variant="outline-primary mr-2">Sign Up</Button>
                                </Link>,
                                <Link to="/login">
                                    <Button variant="primary">Sign In</Button>
                                </Link>
                            ]) : null}
                        {/*store.loggedIn && <LinkButton to="/logout">Log out</LinkButton>*/}
                    </Nav.Item>
                </Navbar.Collapse>
            </NavbarBase>
        </div>
    )
})