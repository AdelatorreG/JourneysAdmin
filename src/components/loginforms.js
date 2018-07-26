import React, { Component } from 'react'
import { Row, Col, Input, Icon, Button, Footer, Navbar, NavItem, Dropdown } from 'react-materialize';
import Navigation from './Navigation';
import welcomeforms from './welcomeforms';
import { Link, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
  } from 'react-router-dom';

export default class Login extends Component {
    
    state={
        name:'peter'
    }
    constructor(){
        super();
        this.state = {
            name:'jhon'
        };
    }
    
    state = {
        loggedIn:true
      }
      loginHandle = () => {
        this.setState(prevState => ({
         loggedIn: !prevState.loggedIn  
        }))
}
    componentWillUnmount() {
        console.log('Will Unmount');
      }

      unmountChild(){
          this.setState({name:'robert'});
      }

    render(){
       console.log('render');
        if(this.state.name=='robert'){
            return(<div/>)
        }
        return (
            <div>       
                <Navbar brand='Journeys' left className='blue'>
                </Navbar>            
                <Row>
                    <Col m={8} l={4} className='push-m2 push-l4'>
                        <h1 className='center'>Journeys </h1>
                        <Input type="email" label="Email"  s={12} validate><Icon>account_circle</Icon></Input>
                        <Input type="password" label="password" s={12} validate><Icon>lock</Icon></Input>
                        <Row>
                        <Col  s={12} m={12} className='center'>
                        <NavLink to="/welcomeforms">
                        <Button className='waves-effect waves-light btn blue'>Login </Button>
                        </NavLink>
                        </Col>
                        
                        </Row>

                    </Col>
                </Row>   
 <Footer copyrights="Journeys ©2018 ArkusNexus" 
    links={
      <ul align>
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


