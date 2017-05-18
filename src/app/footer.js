import React, {Component} from 'react';

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
          <a>{instagram}</a>
          <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fwww.sfcharityfashionshow.com%2FWP%2Ftickets%2F&text=Tickets%20are%20now%20on%20sale!">{twitter}</a>
          <a href="https://www.facebook.com/sharer.php?u=http%3A%2F%2Fwww.sfcharityfashionshow.com%2FWP%2Ftickets%2F">{facebook}</a>
          <a href="https://plus.google.com/share?url=http%3A%2F%2Fwww.sfcharityfashionshow.com%2FWP%2Ftickets%2F">{google}</a>
        </div>
        <hr/>
        <img className="footer_logo" src="../img/Logo_transp.png" alt="SF Charity Fashion Show logo"/>
        <p>SF Charity Fashion Show is a non-profit organization
 2017 SF Charity Fashion Show - All rights reserved</p>
        <p>Web Developer Hieu Nguyen &copy; 2017</p>
      </footer>
    );
  }
}
