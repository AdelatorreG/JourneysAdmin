import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button, Footer, Navbar, NavItem, Dropdown } from 'react-materialize';
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
                <Navbar brand='Journeys' left className='blue'>
                    <Dropdown trigger={
                        <Button floating waves='light' className='blue'><i class="material-icons">dehaze</i></Button>
                    }>
                        <NavItem>Aeropuerto</NavItem>
                        <NavItem>Vuelos</NavItem>
                        <NavItem divider />
                        <NavItem>Cerrar Sesion</NavItem>
                    </Dropdown>

                </Navbar>
                  <Row>
                    <Col m={8} l={4} className='push-m2 push-l4'>
                        <h1 className='center'>Journeys </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col  s={12} m={12} className='center'>
                      <img src={require('../images/grafica2.jpg')} width="800" height="500" />
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