<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Welcome from './components/welcomeforms';
import Nav from './components/navbar';
import Login from './components/loginforms';
import Footer from './components/footer';
import App from './components/App';

//ReactDOM.render(<Welcome/>, document.getElementById('wel'));

//ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<Nav />, document.getElementById('nav'));
//ReactDOM.render(<Login />, document.getElementById('lg'));
//ReactDOM.render(<Footer/>, document.getElementById('ftr'));
registerServiceWorker();

/*
=======
>>>>>>> c1544250457fcc08fb5ad6e47331a670326c957f
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
<<<<<<< HEAD
app.use('/api/airports',require('./routes/journeys.routes'));
=======
app.use('/api/journeys',require('./routes/journeys.routes'));


>>>>>>> c1544250457fcc08fb5ad6e47331a670326c957f
//static files
app.use(express.static(path.join(__dirname,'public')));
//starting server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});*/
registerServiceWorker();
