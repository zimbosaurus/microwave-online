
import React, { Component } from 'react';

import Home from './home';
import About from './about';

const ROUTES = {
    Home: '/home',
    About: '/about',
}

const ROUTE_NAMES = Object.values(ROUTES);

export { Home, About, ROUTES as routes, ROUTE_NAMES as routeNames };