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
            {/*<a href="/the-issue"><li className="nav_items">The Issue</li></a>*/}
            <a href="/event_tickets"><li className="sub_items bold">Fashion Show Tickets</li></a>
            {/*<div name="events">*/}
              
              
                {/*<li className="nav_items">*/}
                  {/*<label htmlFor="events_dropdown">*/}
                    {/*Events*/}
                    {/*<i className="down arrow"></i>*/}
                  {/*</label>*/}
                  
                  {/*<ul className="sub_nav">
                    <li className="sub_items">Previous Shows</li>
                    <a href="/event_tickets"><li className="sub_items">Fashion Show Tickets</li></a>
                  </ul>
                </li>*/}
            {/*</div>*/}
            <div name="volunteers">
              <li className="nav_items">Volunteer
                <i className="down arrow"></i>
                <ul className="sub_nav">
                  <a href="/designer_volunteers"><li className="sub_items">Designers</li></a>
                  <a href="/model_volunteers"><li className="sub_items">Models</li></a>
                  <a href="/administrator_volunteers"><li className="sub_items">Administrators</li></a>
                </ul>
              </li>
            </div>
            <a href="/donation"><li className="nav_items">Donate!</li></a>
            <a href="/sponsors"><li className="nav_items">Our Generous Sponsors</li></a>
            {/*<a href="/contactus"><li className="nav_items">{email}</li></a>*/}
          </ul>
        </nav>
      </div>
    );
  }
}
