import React from 'react'

import {
    BrowserRouter as Router,
    Link,
    useHistory,
} from "react-router-dom";

import { Navbar, Nav, Container, Form, ButtonGroup, Button, Row, Col } from 'react-bootstrap';
import { useAppStore, AppStoreProvider } from 'stores/app';
import { observer } from 'mobx-react';
import { InlineNavCard } from "components/user/card"
import { faAt, faPlus, faDice, faRandom, faProjectDiagram, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CommunityAvatar } from 'components/board/avatar';
import { Brand } from 'components/brand';
import { IconButton } from 'components/button';
/**
 * favatar
 * forumly
 * react.site
 * discuss.ai
 * diskus.dev
 * 
 */

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
                backgroundSize: "repeat",
                //backgroundImage: `url(https://dev.ourspaces.app/img/static/tile1.png)`
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
    const history = useHistory();
    return (
        <NavbarBase>
            <Navbar.Toggle aria-controls="basic-navbar-nav"

            />
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
                        <IconButton variant="" icon={faDice} className="mr-2 px-md-4" onClick={() => store.getRandomCommunity().then(t => history.push(`/+${t}`))} />
                        {store.loggedIn && <InlineNavCard />}
                        {!store.loggedIn ?
                            ([
                                <Link to="/login">
                                    <Button variant="" className="mr-2 px-md-4">Sign In</Button>
                                </Link>,
                                <Link to="/signup">
                                    <Button variant="primary" className="px-md-4">Sign Up</Button>
                                </Link>
                            ]) : null}
                        {/*store.loggedIn && <LinkButton to="/logout">Log out</LinkButton>*/}
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </NavbarBase >
    )
})