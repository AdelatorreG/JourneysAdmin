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
<<<<<<< HEAD
//ReactDOM.render(<Login />, document.getElementById('lg'));
//ReactDOM.render(<Footer/>, document.getElementById('ftr'));
registerServiceWorker();

/*
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./database');
const app = express();
//settings
app.set('port',process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'));
app.use(express.json());//cada vez que llega un dato verifica que sea un json 
//routes
app.use('/api/airports',require('./routes/journeys.routes'));
//static files
app.use(express.static(path.join(__dirname,'public')));
//starting server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});*/
=======
registerServiceWorker();
>>>>>>> e7fd5bde40550326711a8fabf3ca5f16ca91fd15
