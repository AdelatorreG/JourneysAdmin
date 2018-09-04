import propTypes from 'prop-types';

import React, { Component } from 'react';

import NavbarWhenLogged from './components/NavbarWhenLogged';
import PageFooter from './components/footer';
import Content from './components/Content';


class App extends Component {


  static propTypes ={
    children: propTypes.object.isRequired
  };


    render() {
      const { children } = this.props;
        return (
          [
            <header>
              <NavbarWhenLogged/>
            </header>,
            <main>
              <Content  body={children} />
            </main>,
            <footer>
              <PageFooter/>
            </footer>
          ]
        )
    }
}


export default App;

