import React, {Component}from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Row, Col, Input, Icon, Button, Footer } from 'react-materialize';

import * as routes from '../constants/routes';

class Navigation extends Component{
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
    return(
      <div>
 <Row>
      <Col m={8} l={4} className='push-m2 push-l4'>
        <Row>
            <Col  s={12} m={12} className='center'>
            <img src={require('../images/playne.jpg')} width="350" height="350" />
            </Col>
        </Row>
        <Row>
          <Col s={12} m={12} className='center'>
              <NavLink to="/loginforms">
                <Button onClick={this.unmountChild.bind(this)}
                className='waves-effect waves-light btn blue'>Get start</Button>
              </NavLink>
              </Col>
        </Row>
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

export default Navigation;

/*
const Navigation = () =>
  <div>
    <ul>
      <li><Link to={routes.LOG_IN}>Sign In</Link></li>
    </ul>
  </div>*/
/*
  export default class Navigation extends Component {
  render() {
    return (
      <div>
      <ul>
        <li><Link to={routes.LOG_IN}></Link></li>
      </ul>
    </div>
    );
  }
 } 
*/
