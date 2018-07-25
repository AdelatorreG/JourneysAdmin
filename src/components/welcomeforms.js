import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button, Footer } from 'react-materialize';
import Navigation from './Navigation';
import { Link, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';



export default class Welcome extends Component {


    render(){

        return (
            <div>

                  <Row>
                    <Col m={8} l={4} className='push-m2 push-l4'>
                        <h1 className='center'>Journeys </h1>
                        <img src={require('../images/logo.svg')} alt="Test" />
                        </Col>
                </Row>
                <Footer copyrights="Journeys ©2018 ArkusNexus" 
    links={
      <ul>
        <li><a className="grey-text text-lighten-3" href="#!">Avisos</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Privacidad</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Terminos y Condiciones</a></li>
      </ul>
    }
    brand='Journeys' right className='blue'
  >
  </Footer>;        
            </div>

        );
    }
};