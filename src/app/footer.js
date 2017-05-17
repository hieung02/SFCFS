import React, {Component} from 'react';
// import FontA from 'react-fontawesome';

const instagram = (<i className="fa fa-instagram" aria-hidden="true"/>);

const twitter = (<i className="fa fa-twitter-square" aria-hidden="true"/>);

const facebook = (<i className="fa fa-facebook-square" aria-hidden="true"/>);

const google = (<i className="fa fa-google-plus" aria-hidden="true"/>);

// const sfcfs = "../img/Logo_transp.png";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="iconContainer">
          {instagram}
          {twitter}
          {facebook}
          {google}
        </div>
        <hr/>
        <img className="footer_logo" src="../img/Logo_transp.png" alt="SF Charity Fashion Show logo"/>
        <p>SF Charity Fashion Show is a non-profit organization
 2017 SF Charity Fashion Show - All rights reserved</p>
        <p>Web Developer Hieu Nguyen | &copy; 2017</p>
      </footer>
    );
  }
}
