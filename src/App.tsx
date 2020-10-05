import React from 'react';
import logo from './logo.svg';
import './App.scss';
import 'mobx-react-lite/batchingForReactDom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider, Observer } from 'mobx-react';
import { RouterScaffold } from "screens/scaffold"

function App() {
  return (
    <RouterScaffold />
  );
}

export default App;
