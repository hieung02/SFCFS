import React, {Component} from 'react';
import {Nav} from './nav';

const styles = {
  logo: {
    width: '95px',
    height: '99px'
  }
};

export default class Header extends Component {

  render() {
    return (
      <header className="header">
        <img style={styles.logo} src="../img/Logo_transp.png" alt="SF Charity Fashion Show logo"/>
        <Nav/>
      </header>
    );
  }
}
