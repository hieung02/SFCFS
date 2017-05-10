import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Header} from './app/header';
import {Home} from './app/pages/home';
import {About} from './app/pages/about';
import {Event} from './app/pages/events';
import {Volunteers} from './app/pages/volunteers';
// import {VolunteerForms} from './app/pages/volunteerforms';
import {Donation} from './app/pages/donation';
import {Contact} from './app/pages/contact';
import {Footer} from './app/footer';

import './style/index.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header/>
      <Switch>
        <Route path="/about" component={About}/>
        <Route path="/subscribe" component={Home}/>
        <Route path="/events" component={Event}/>
        <Route path="/volunteers" component={Volunteers}/>
        {/* <Route path="/volunteerforms" component={VolunteerForms}/> */}
        <Route path="/donation" component={Donation}/>
        <Route path="/contactus" component={Contact}/>
        <Route path="/" component={Home}/>
      </Switch>
      <Footer/>
    </div>
  </BrowserRouter>,
  root
);
