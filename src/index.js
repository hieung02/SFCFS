import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './app/header';
import {Home} from './app/pages/home';
import {About} from './app/pages/about';
import {Issue} from './app/pages/issue';
import {EventTickets} from './app/pages/event_tickets';
import {Volunteers} from './app/pages/volunteers';
import {Thanks} from './app/pages/thanks';
import {Designers} from './app/pages/designers';
import {DesignerForm} from './app/pages/designer_form';
import {Models} from './app/pages/models';
import {Admin} from './app/pages/admin';
import {Donation} from './app/pages/donation';
import {Contact} from './app/pages/contact';
import {Footer} from './app/footer';

import './style/index.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <div className="container">
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/designer_volunteers" component={Designers}/>
      <Route path="/designer_form" component={DesignerForm}/>
      <Route path="/model_volunteers" component={Models}/>
      <Route path="/administrator_volunteers" component={Admin}/>
      <Route path="/about" component={About}/>
      <Route path="/subscribe" component={Home}/>
      <Route path="/the-issue" component={Issue}/>
      <Route path="/event_tickets" component={EventTickets}/>
      <Route path="/volunteers" component={Volunteers}/>
      <Route path="/thank-you" component={Thanks}/>
      <Route path="/donation" component={Donation}/>
      <Route path="/contactus" component={Contact}/>
      <Footer/>
    </div>
  </BrowserRouter>,
  root
);
