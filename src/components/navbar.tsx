import React from 'react'

import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";

import { Navbar, Nav, Container, Form, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import { useAppStore, AppStoreProvider } from 'stores/app';
import { observer } from 'mobx-react';
import { InlineNavCard } from "components/user/card"
import { faAt, faPlus, faProjectDiagram, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommunityAvatar } from 'components/board/avatar';

/**
 * favatar
 * forumly
 * react.site
 * discuss.ai
 * diskus.dev
 * 
 */

const Brand: React.FC<{ className: string }> = ({ className }) => {
    return (
        <Link to="/">
            <Navbar.Brand href="/" className={className} style={{
                //fontWeight: 900,
            }}>
                <CommunityAvatar className="d-none _d-md-inline" size={36} />
                <FontAwesomeIcon className="d-none rounded ml-1 mr-1" icon={faPlus} />
                <span className="d-inline d-sm-inline ml-2">
                    our/
                </span>
                <span className="text-primary">
                    space
                </span>
            </Navbar.Brand>
        </Link>
    )
}

export const NavbarBase: React.FC = ({ children }) => {
    const store = useAppStore();
    const url = "https://source.unsplash.com/collection/416021/1280x800";
    const wrap = (child: any) => {
        if (!store.UIanimatedHeader) {
            return child;
        }
        return (
            <div>
                <div className="bar gradient-horizontal"></div>
                {child}
            </div>
        )
    }
    return (
        wrap(<Navbar
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
                <Brand className="d-inline-block" />
                {children}
            </Container>
        </Navbar>)
    )
}

export const SiteNavbar: React.FC = observer(() => {
    const store = useAppStore();
    return (
        <NavbarBase>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{
                //flexGrow: 2,
            }}>
                <Nav className="d-flex flex-grow-1 align-items-center">
                    {false && <Nav.Item id="nav-center" className="_flex-grow-1 py-4 p-md-0">
                        <Form.Control type="text" placeholder="Search" />
                    </Nav.Item>}
                    {false && <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>}
                    <Brand className="d-block d-sm-none" />
                    <Nav.Link href="/+all">
                        <FontAwesomeIcon className="mr-1" icon={faProjectDiagram} />
                        Big Spaces
                    </Nav.Link>
                    <Nav.Link href="/+all">
                        <FontAwesomeIcon className="mr-1" icon={faAddressCard} />
                        Little Spaces
                    </Nav.Link>
                    <Nav.Link href="/about-and-faq">Help</Nav.Link>
                    <Nav.Link href="/+all">Support Us</Nav.Link>
                    <Nav.Item className="flex-grow-1 flex-row text-right py-2 p-md-0 d-flex d-md-flex _d-md-block justify-content-end">
                        {store.loggedIn && <InlineNavCard />}
                        {!store.loggedIn ?
                            ([
                                <Link to="/login">
                                    <Button variant="primary" className="mr-2 px-md-4" style={{ borderRadius: '1em' }}>Sign In</Button>
                                </Link>,
                                <Link to="/signup">
                                    <Button variant="outline-dark" className="px-md-4" style={{ borderRadius: '1em' }}>Sign Up</Button>
                                </Link>
                            ]) : null}
                        {/*store.loggedIn && <LinkButton to="/logout">Log out</LinkButton>*/}
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </NavbarBase>
    )
})