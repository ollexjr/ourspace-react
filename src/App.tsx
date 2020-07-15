import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'mobx-react-lite/batchingForReactDom'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, Observer } from 'mobx-react';
import { AppStore, AppStoreProvider } from './lib/stores/app';
import { RouterRoot } from "./lib/screens/scaffold";

function App() {
  return (
    <AppStoreProvider>
      <RouterRoot />
    </AppStoreProvider>
  );
}

export default App;
