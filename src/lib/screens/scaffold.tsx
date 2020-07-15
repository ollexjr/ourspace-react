import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RouterBoard } from './board';
import { useAppStore } from '../stores/app';
import { observer } from 'mobx-react';
import { UserLoginForm } from '../components/auth/login';
import { UserSignupForm } from '../components/auth/signup';
import { ScreenFrontpage } from './home/front';
import { NavUserCard } from '../components/user/card';

const Blank: React.FC = () => {
  return (
    <div>
      rendering Blank
    </div>
  )
}

const Scaffold: React.FC = ({ children }) => {
  return (
    <Container fluid className="header-spacer no-gutters">
      <Row className="justify-content-around">
        <Col className="d-none d-md-block border-right" style={{ maxWidth: "200px", minWidth: "64px" }}></Col>
        <Col className="h-100 main-content background">{children}</Col>
        <Col className="d-none d-md-block border-left" style={{ maxWidth: "200px" }}></Col>
      </Row>
    </Container>
  )
}

export const RouterRoot: React.FC = observer(({ }) => {
  const store = useAppStore();
  return (
    <Router>
      <Navbar expand="md" bg="light" fixed="top" className="border-bottom">
        <Container fluid={true}>
          <Nav.Item className="flex-grow-1">
            <NavbarBrand>
              Lum
            </NavbarBrand>
          </Nav.Item>
          <Nav.Item className="flex-grow-1">
            <Form.Control type="email" placeholder="Search" />
          </Nav.Item>
          <Nav.Item className="flex-grow-1 text-left">
            {store.loggedIn ? <NavUserCard /> : null}
            {!store.loggedIn ?
              <ButtonGroup aria-label="Basic example">
                <Link to="/signup">
                  <Button variant="outline-primary">Sign Up</Button>
                </Link>
                <Link to="/login">
                  <Button variant="primary">Sign In</Button>
                </Link>
              </ButtonGroup> : null}
            {}
          </Nav.Item>
        </Container>
      </Navbar>
      <Switch>
        <Scaffold>
          <Route path="/account" component={Blank} />
          <Route path="/login" component={UserLoginForm} />
          <Route path="/signup" component={UserSignupForm} />
          <Route path="/+:boardId" component={RouterBoard} />
          <Route path="/post/:threadId/:title" component={RouterBoard} />
          <Route path="/all" component={ScreenFrontpage} />
          <Route exact path="/" component={Blank} />
        </Scaffold>
      </Switch>
    </Router>
  )
})