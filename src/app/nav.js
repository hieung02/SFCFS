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
        {/*<input id="events_dropdown" type="checkbox"/>*/}
        <nav className="nav">
          <hr/>
          <ul>
            <a href="/"><li className="nav_items">Home</li></a>
            <a href="/about"><li className="nav_items">About Us</li></a>
            <a href="/the-issue"><li className="nav_items">The Issue</li></a>
            <div name="events">
              
              
                <li className="nav_items">
                  {/*<label htmlFor="events_dropdown">*/}
                    Events
                    <i className="down arrow"></i>
                  {/*</label>*/}
                  
                  <ul className="sub_nav">
                    <li className="sub_items">Previous Shows</li>
                    <li className="sub_items">Fashion Show Tickets</li>
                  </ul>
                </li>
            </div>
            <div name="volunteers">
              <li className="nav_items">Volunteers
                <i className="down arrow"></i>
                <ul className="sub_nav">
                  <li className="sub_items"><a href="/designer_volunteers">Designers</a></li>
                  <li className="sub_items"><a href="/model_volunteers">Models</a></li>
                  <li className="sub_items"><a href="/administrator_volunteers">Administrators</a></li>
                </ul>
              </li>
            </div>
            <a href="/donation"><li className="nav_items">Donation</li></a>
            <a href="/contactus"><li className="nav_items">Contact Us</li></a>
          </ul>
        </nav>
      </div>
    );
  }
}
