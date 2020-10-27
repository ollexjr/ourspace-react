import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { observer } from 'mobx-react';

import {
  Navbar, Nav,
  Container, Form,
  ButtonGroup, Button,
  Row, Col, NavDropdown
} from 'react-bootstrap';

import { ModalSheetWrapper } from "components/modal";
import { RouterBoard } from './board';
import { useAppStore, AppStoreProvider } from '../stores/app';

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
import classNames from 'classnames';
import { ParallaxProvider } from 'react-scroll-parallax';
import Sticky from 'react-stickynode';
import { SidebarDefault } from 'components/app/sidebar';
import { ModeratorActionsGlobal } from 'components/board/moderator/actions';
import BoardSingleAuthenticationOverlayObserver from 'components/user/overlay';

import ScreenDonateRouter from 'screens/about/donate';
import ScreenStaticRouter from 'screens/static/scaffold';

//import info from './gitinfo.js';

const info = "";

// scaffold the navigation sidebar around the main screen
const Scaffold: React.FC = observer(({ children }) => {
  const app = useAppStore()
  const ref = React.useRef();
  document.body.className = "fadeIn " + app.themeName;

  return (
    <>
      <SiteNavbar />
      <Container fluid id="screen-wrapper" className="_header-spacer _no-gutters _p-0" style={{
        maxWidth: app.UIconstrainContainer ? 1500 : undefined
      }}>
        <Row id="screen-row" className={"justify-content-around flex-xl-nowrap " +
          (app.UIconstrainContainer && "_m-auto")}
          style={{
            //maxWidth: app.UIconstrainContainer ? 1400 : undefined
          }}>
          <Col id="wrapper-screen-left"
            className={classNames("d-none d-md-block border-right bg-white",
              app.UIconstrainContainer ? "col-md-4" : "col-12 col-md-2 col-xl-1")} style={{
                maxWidth: "80px",
                minWidth: "64px"
              }}>
            <Sticky>
              <SubscriptionListWithSearch />
            </Sticky>
            <div id="screen-left" className="sticky"></div>
          </Col>
          <Col className="_h-100 main-content p-0 _p-md-3">
            {children}
          </Col>
          <Col id="wrapper-screen-right"
            className={classNames("d-none d-lg-block border-left _p-0 bg-white",
              app.UIconstrainContainer ? "col-md-3" : "col-12 col-md-2 col-xl-2")}>
            <div className="_sticky mt-2">
              <Sticky>
                <SidebarDefault />
                <NotificationListObserver />
              </Sticky>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
})

export const BoardRouterWrapper: React.FC = () => {
  return (
    <Scaffold>
      <Switch>
        <Route path="/+:boardId" component={RouterBoard} />
        <Route path="/c/:boardId" component={RouterBoard} />
        <Route path="/post/:threadId/:title" component={() => null} />
        <Route path="/@:userId" component={() => null} />
        <Route path="/u/:userId" component={() => null} />
        <BoardSingleAuthenticationOverlayObserver />
      </Switch>
      <ModeratorActionsGlobal />
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
        <Route exact path="/login/recover" component={ScreenLogin} />
        <Route exact path="/signup" component={ScreenSignup} />
        <Route path="/+:pathId" component={BoardRouterWrapper} />
        <Route path="/c/:pathId" component={BoardRouterWrapper} />
        <Scaffold>
          <Route exact path="/create" component={ScreenCreate} />
          <Route exact path="/explore/graph" component={ScreenExploreGraph} />
          <Route exact path="/account" component={ScreenAccount} />
          <Route exact path="/@:userId" component={ScreenAccount} />

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
      <ParallaxProvider>
        <RouterRoot />
      </ParallaxProvider>
    </AppStoreProvider>
  )
}