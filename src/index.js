import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Welcome from './components/welcomeforms';
import Nav from './components/navbar';
import Login from './components/loginforms';
import Footer from './components/footer';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Nav />, document.getElementById('nav'));
registerServiceWorker();