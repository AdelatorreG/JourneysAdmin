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
            name:'jhon',
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
    emailValid: false,
    passwordValid: false,
    formValid: false
        };
    
    }
    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
                      () => { this.validateField(name, value) });
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

      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
      
        switch(fieldName) {
          case 'email':
            emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            break;
          case 'password':
            passwordValid = value.length >= 6;
            fieldValidationErrors.password = passwordValid ? '': ' is too short';
            break;
          default:
            break;
        }
        this.setState({formErrors: fieldValidationErrors,
                        emailValid: emailValid,
                        passwordValid: passwordValid
                      }, this.validateForm);
      }
      
      validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
      }
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
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
                       
                        <Row className={'Form-Login${this.errorClass(this.state.formErrors.email)}'}>  
                           <Input type="email" label="Email"  s={12} validate 
                            name="email"     
                            value={this.state.email}
                            onChange={(event) => this.handleUserInput(event)}>
                            <Icon>account_circle</Icon>
                            </Input>

                            <Input type="password" label="password" s={12} validate 
                            name="password" 
                            value={this.state.password}
                            onChange={(event) => this.handleUserInput(event)}>
                            <Icon>lock</Icon>
                            </Input>
                        </Row>
                        <Row>
                        <Col  s={12} m={12} className='center'>
                        <NavLink to="/welcomeforms">
                        <Button className='waves-effect waves-light btn blue' disabled={!this.state.formValid}>Login </Button>
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

