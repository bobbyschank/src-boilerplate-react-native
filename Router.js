import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Home from './components/Home.js';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 55 }}>
        <Scene key="home" component={Home} title="Welcome" />
    </Router>
  );
};

export default RouterComponent;



  //  <Router sceneStyle={{ paddingTop: 55 }}>
  //    <Scene key="main">
  //      <Scene key="home" component={Home} title="Welcome" />
  //    </Scene>
  //  </Router>