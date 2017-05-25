import React, {Component} from 'react';

const menu = <span className="menu_line"/>;

export class Nav extends Component {

  render() {
    return (
      <div className="toggle_container">
        <input id="toggle" type="checkbox"/>
        <label htmlFor="toggle" className="menu_icon">
          {menu}
        </label>
        <nav className="nav">
          <hr/>
          <ul>
            <a href="/"><li className="nav_items">Home</li></a>
            <a href="/about"><li className="nav_items">About</li></a>
            <a href="/the-issue"><li className="nav_items">The Issue</li></a>
            <a href="/events"><li className="nav_items">Events</li></a>
            <a href="/volunteers"><li className="nav_items">Volunteers</li></a>
            <a href="/donation"><li className="nav_items">Donation</li></a>
            <a href="/contactus"><li className="nav_items">Contact Us</li></a>
          </ul>
        </nav>
      </div>
    );
  }
}
