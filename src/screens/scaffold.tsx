import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {
  Navbar, Nav,
  Container, Form,
  ButtonGroup, Button,
  Row, Col, NavDropdown
} from 'react-bootstrap';

import { RouterBoard } from './board';
import { useAppStore, AppStoreProvider } from '../stores/app';
import { observer } from 'mobx-react';
import { UserLoginForm } from 'components/user/auth/login';
import { UserSignupForm } from 'components/user/auth/signup';
import { ScreenFrontpage } from './home/front';
import { NavUserCard } from '../components/user/card';
import { SubscriptionListWithSearch } from '../components/user/sub';

import ScreenAccount from "screens/user/account"
import ScreenLogin from "screens/user/login"
import ScreenSignup from "screens/user/signup"
import { SiteNavbar } from "components/navbar"

// scaffold the navigation sidebar around the main screen
const Scaffold: React.FC = ({ children }) => {
  return (
    <>
      <SiteNavbar />
      <Container fluid className="_header-spacer no-gutters h-100">
        <Row className="justify-content-around flex-xl-nowrap">
          <Col id="screen-left" className="d-none d-md-block border-right bg-white h-100 col-12 col-md-3 col-xl-2" style={{ minWidth: "64px" }}>
            <SubscriptionListWithSearch />
          </Col>
          <Col className="h-100 main-content p-0 p-md-3 _background">
            {children}
          </Col>
          <Col id="screen-right" className="d-none d-lg-block border-left p-0 bg-white col-12 col-md-2 col-xl-2">

          </Col>
        </Row>
      </Container>
    </>
  )
}

export const RouterRoot: React.FC = observer(({ }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/account" component={ScreenAccount} />
        <Route exact path="/login" component={ScreenLogin} />
        <Route exact path="/signup" component={ScreenSignup} />
        <Scaffold>
          <Route path="/+:boardId" component={RouterBoard} />
          <Route path="/post/:threadId/:title" component={RouterBoard} />
          <Route exact path="/all" component={ScreenFrontpage} />
          <Route exact path="/" component={ScreenFrontpage} />
        </Scaffold>
      </Switch>
    </Router>
  )
})

// add AppStore context into tree so it can be found by any widget
export const RouterScaffold: React.FC = () => {
  return (
    <AppStoreProvider>
      <RouterRoot />
    </AppStoreProvider>
  )
}