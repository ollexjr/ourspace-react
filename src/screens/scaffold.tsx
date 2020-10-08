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

import { ModalSheetWrapper } from "components/modal";

import { RouterBoard } from './board';
import { useAppStore, AppStoreProvider } from '../stores/app';
import { observer } from 'mobx-react';
import { ScreenFrontpage } from './home/front';
import { SubscriptionListWithSearch } from '../components/user/sub';
import ScreenCreate from 'screens/board/create';

import ScreenAccount from "screens/user/account"
import ScreenLogin from "screens/user/login"
import ScreenSignup from "screens/user/signup"
import { SiteNavbar } from "components/navbar"
import { NotificationListObserver } from 'components/user/notification';
import { ScreenExploreGraph } from 'screens/home/explore';
import { SpotlightModal } from 'components/spotlight';

//import info from './gitinfo.js';

const info = "";

// scaffold the navigation sidebar around the main screen
const Scaffold: React.FC = ({ children }) => {
  const app = useAppStore()
  const ref = React.useRef();

  return (
    <>
      <SiteNavbar />
      <Container fluid className="_header-spacer no-gutters _h-100" >
        <Row className="justify-content-around flex-xl-nowrap">
          <Col id="wrapper-screen-left" className="d-none d-md-block border-right bg-white col-12 col-md-2 col-xl-1" style={{
            maxWidth: "80px",
            minWidth: "64px"
          }}>
            <div id="screen-left" className="sticky">
              <SubscriptionListWithSearch />
              <NotificationListObserver />
            </div>
          </Col>
          <Col className="_h-100 main-content p-0 _p-md-3" style={{}}>
            {children}
          </Col>
          <Col id="wrapper-screen-right" className="d-none d-lg-block border-left _p-0 bg-white col-12 col-md-2 col-xl-2">
            <div id="screen-left" className="sticky">
              <div className="card footer p-2">
                <small><strong>Copyright</strong> ourspace 2020</small>
                <small>Version: {info ?? "not defined"}</small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export const BoardRouterWrapper: React.FC = () => {
  return (
    <Scaffold>
      <Switch>
        <Route path="/+:boardId" component={RouterBoard} />
        <Route path="/post/:threadId/:title" component={() => null} />
      </Switch>
    </Scaffold>
  )
}

export const CommunityWrapper: React.FC = () => {
  return (
    <>


    </>
  )
}

export const RouterRoot: React.FC = observer(({ }) => {
  return (
    <Router>
      <SpotlightModal />
      <Switch>
        <Route exact path="/login" component={ScreenLogin} />
        <Route exact path="/signup" component={ScreenSignup} />
        <Route path="/+:pathId" component={BoardRouterWrapper} />
        <Scaffold>
          <Route exact path="/create" component={ScreenCreate} />
          <Route exact path="/explore/graph" component={ScreenExploreGraph} />
          <Route exact path="/account" component={ScreenAccount} />
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