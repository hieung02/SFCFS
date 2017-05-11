import React, {Component} from 'react';

const groupIcon = (
  <svg width="50px" height="50px" viewBox="0 0 167 168" version="1.1">
    <g id="mobile" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Group-7" transform="translate(3.000000, 3.000000)" stroke="#979797" strokeWidth="6">
        <circle id="Oval-2" cx="80" cy="31" r="31"/>
        <circle id="Oval-2-Copy" cx="41" cy="90" r="21"/>
        <circle id="Oval-2-Copy-2" cx="119" cy="90" r="21"/>
        <path d="M67,38.5 C67,38.5 70.0049015,45 79.7524507,45 C89.5,45 92.5049015,38.5 92.5049015,38.5" id="Path-6" strokeLinecap="round"/>
        <path d="M33,96 C33,96 34.8491701,100 40.847662,100 C46.8461538,100 48.695324,96 48.695324,96" id="Path-6-Copy" strokeLinecap="round"/>
        <path d="M111,96 C111,96 112.84917,100 118.847662,100 C124.846154,100 126.695324,96 126.695324,96" id="Path-6-Copy-2" strokeLinecap="round"/>
        <path d="M69,76 C69,76 73,74.5 80.5,74.5 C88,74.5 92,76 92,76" id="Path-7" strokeLinecap="round"/>
        <path d="M0,161.5 C0,161.5 2.50606038,121 41.2530302,121 C80,121 82.5060604,161.5 82.5060604,161.5" id="Path-8" strokeLinecap="round"/>
        <path d="M85.615177,137.648319 C86.7735181,135.809968 88.1060207,134.000704 89.6384911,132.282491 C95.7647433,125.413705 105.086694,120 119.25303,120 C158,120 160.50606,160.5 160.50606,160.5" id="Path-8-Copy" strokeLinecap="round"/>
      </g>
    </g>
    <span>Join Us!</span>
  </svg>
);

const intro = (
  <article className="article">
    <p>We currently have several open roles, including the following:</p>
    <ul className="list_dot">
      <li>PR Volunteer or Intern (unpaid) –  improve the media outreach and visibility of the SF Charity Fashion Show and the charity (Ritecare-SF.org).</li>
      <li>Event Planning Volunteers or Interns (unpaid) –  help us plan and market the event.</li>
      <li>Fundraising Volunteers – help us secure sponsors and donations</li>
      <li>Marketing Volunteers or Interns (unpaid) – help us spread the word about the show & the charity</li>
      <li>Many, many more – all told, it takes about 100 volunteers to produce a fashion show; use the form below to tell us how you’d like to be involved!</li>
    </ul>
  </article>
);

/* const volunteerForm = (
  <div className="form">
    <div className="tab">
      <button className="tablinks" onClick="openForm(e, 'models')">Model Volunteers Form</button>
      <button className="tablinks" onClick="openForm(e, 'admin')">Administration Volunteers Form</button>
      <button className="tablinks" onClick="openForm(e, 'exit')">Exit</button>
    </div>
    <div>
      <embed className="form" id="models" src="https://docs.google.com/forms/d/e/1FAIpQLSe7hn3gC6VUj4WuoUwHzQYmlviQq5dV-1HR8tkW-CUw01c3MA/formResponse?embedded=true"/>
    </div>
  </div>
); */

export class Volunteers extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <section>
            <h1>Volunteers</h1>
          </section>
          {intro}
          {/* {volunteerForm} */}
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5_MWvhuGu6HgdyBozOZLSa1kIUUumcUUUS9TKvI_wHJmnMw/formResponse?embedded=true"><button className="volunteer_btn">
            {groupIcon}
            <br/>
            Join Us!
          </button></a>
        </div>
        {/* <div className="section">
          {volunteerForm}
        </div> */}
      </div>
    );
  }
}
