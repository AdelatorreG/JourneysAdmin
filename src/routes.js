import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Airports from './components/Airports';
import Flights from './components/Flights';
import Page404 from './components/Page404';
import Permisos from './components/Permisos';

import loginforms from './components/loginforms';
import welcomeforms from './components/welcomeforms';
import Footer from './components/footer';
import Navigation from './components/Navigation';


const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/Airports" component={Airports}/>
            <Route exact path="/Vuelos" component={Flights}/>
            <Route exact path="/Page404" component={Page404}/>
            <Route exact path="/Permisos" component={Permisos}/>

            <Route exact path="/Footer" component={Footer}/>
            <Route exact path="/" component={Navigation}/>
            <Route exact path="/loginforms" component={loginforms}/>
            <Route exact path="/welcomeforms" component={welcomeforms}/>
            <Route  component={Page404}/>

        </Switch>
    </App>;

export default AppRoutes;