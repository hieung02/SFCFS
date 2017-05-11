import React, {Component} from 'react';
import {Nav} from './nav';

export class Header extends Component {

  render() {
    return (
      <header className="header">
        <img src="../img/Logo_transp.png" alt="SF Charity Fashion Show logo"/>
        <Nav/>
      </header>
    );
  }
}
