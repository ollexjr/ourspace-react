import React from 'react'

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

import { Navbar, Nav, Container, Form, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import { useAppStore, AppStoreProvider } from 'stores/app';
import { observer } from 'mobx-react';
import { InlineNavCard } from "components/user/card"
import { faAt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * favatar
 * forumly
 * react.site
 * discuss.ai
 * diskus.dev
 * 
 */
export const NavbarBase: React.FC = ({ children }) => {
    const url = "https://source.unsplash.com/collection/416021/1280x800";

    return (
        <Navbar
            expand="md"
            bg="white"
            //variant="dark"
            className="border-bottom sticky-header shadow-light"
            style={{
                //backgroundImage: `url('${url}')`,
                backgroundSize: "cover",
            }}
        >
            <Container fluid={true}>
                <Nav className="flex-grow-1">
                    <Link to="/">
                        <Navbar.Brand href="/" className="rounded _px-2" style={{
                            fontWeight: 900,
                        }}>
                        <FontAwesomeIcon className="rounded mr-1" icon={faPlus} />
                        ourspace<span>.dev</span></Navbar.Brand>
                    </Link>
                    <Nav.Link href="/+all">+All</Nav.Link>
                    <Nav.Link href="/about-and-faq">Help</Nav.Link>
                    <Nav.Link href="/blog">~Blogs</Nav.Link>
                </Nav>
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
                    <Nav.Item id="nav-center" className="flex-grow-1 py-4 p-md-0">
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
                                    <Button variant="outline-dark" className="px-md-4" style={{ borderRadius: '1em' }}>Sign Up</Button>
                                </Link>
                            ]) : null}
                        {/*store.loggedIn && <LinkButton to="/logout">Log out</LinkButton>*/}
                    </Nav.Item>
                </Navbar.Collapse>
            </NavbarBase>
        </div>
    )
})