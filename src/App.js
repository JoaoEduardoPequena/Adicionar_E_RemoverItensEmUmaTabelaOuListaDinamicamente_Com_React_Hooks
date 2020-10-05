import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import {CadUsuario} from './components/CadUsuario';

export default class App extends Component {
  
  render () {
    return (
 
      <Layout>
        <Route exact path='/' component={CadUsuario} />
        <Route path='/cadastrousuario' component={CadUsuario} />
      </Layout>
    
    );
  }
}
