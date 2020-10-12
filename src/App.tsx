import React from 'react';
import logo from './logo.svg';


import { Provider, Observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom'

//import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { RouterScaffold } from "screens/scaffold"

function App() {
  return (
    <RouterScaffold />
  );
}

export default App;
