import React from 'react';
import {match, Route, IndexRoute } from 'react-router';
import Main from '../components/Main.jsx';
import Properties from '../components/properties/propertiesContainer.jsx';
import Analytics from '../components/analytics/analytics.jsx';
import MapContainer from '../components/map/mapContainer.jsx';
import CameraContainer from '../components/camera/cameraContainer.jsx';
import Guest from '../components/guest/guest.jsx';
import Greet from '../components/guest/greet.jsx';

module.exports = (
  <Route path='/' component={Main}>
    <Route path='/properties' component={Properties} />
    <Route path='/analytics' component={Analytics} />
    <Route path='/map' component={MapContainer} />
    <Route path='/camera' component={CameraContainer} />
    <Route path='/guest' component={Guest} />
    <Route path='/greetGuest' component={Greet} />
  </Route>

);
    // <Route path='/settings' component={Settings} />