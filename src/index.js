import React from 'react';
import ReactDOM from 'react-dom';

import Welcome from './components/welcomeforms';
import Nav from './components/navbar';
import Login from './components/loginforms';
import Footer from './components/footer';
import App from './components/App';
var mongoose = require('mongoose');

//ReactDOM.render(<Welcome/>, document.getElementById('wel'));

//mongoose.connect("mongodb://localhost/journeys");

//ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<App />, document.getElementById('app'));
//ReactDOM.render(<Nav />, document.getElementById('nav'));
//ReactDOM.render(<Login />, document.getElementById('lg'));
//ReactDOM.render(<Footer/>, document.getElementById('ftr'));

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
app.use('/api/journeys',require('./routes/journeys.routes'));


//static files
app.use(express.static(path.join(__dirname,'public')));
//starting server
app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`);
});*/
