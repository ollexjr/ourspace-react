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

const Brand: React.FC<{ className: string }> = ({ className }) => {
    return (
        <Link to="/">
            <Navbar.Brand href="/" className={"rounded _px-2 " + className} style={{
                fontWeight: 900,
            }}>
                <FontAwesomeIcon className="d-none rounded mr-1" icon={faPlus} />
            our+space<span></span></Navbar.Brand>
        </Link>
    )
}

export const NavbarBase: React.FC = ({ children }) => {
    const store = useAppStore();
    const url = "https://source.unsplash.com/collection/416021/1280x800";
    const wrap = (child: any) => {
        if (store.isDarkTheme() && !store.UIanimatedHeader) {
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
                <Brand className="d-block" />
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
                    <Nav.Link href="/+all">+All</Nav.Link>
                    <Nav.Link href="/about-and-faq">Help</Nav.Link>
                    <Nav.Link href="/blog">~Blogs</Nav.Link>
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