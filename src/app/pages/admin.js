import React, {Component} from 'react';

const img1 = '../../img/volunteer_back.png';
const img2 = '../../img/designer_icon.png';

export class Admin extends Component {
  render() {
    return (
      <div className="volunteer scroll" style={{background: `url(${img1}) no-repeat center center`, backgroundSize:`cover`}}>
        <section className="article_wrapper">
          <article className="application">
            <p>
              <img src={img2} className="sub_icon"/>
              <h4>Let’s get you set up</h4>
              It should only take a couple of minutes to tell us a bit more about you.
            </p>
            <div className="application_detail">
              <p>We currently have several open roles, including the following:</p>
              <p>PR Volunteer or Intern (unpaid) –  improve the media outreach and visibility of the SF Charity Fashion Show and the charity (Ritecare-SF.org).</p>
              <p>Event Planning Volunteers or Interns (unpaid) –  help us plan and market the event.</p>
              <p>Fundraising Volunteers – help us secure sponsors and donations</p>
              <p>Marketing Volunteers or Interns (unpaid) – help us spread the word about the show & the charity</p>
              <p>Many, many more – all told, it takes about 100 volunteers to produce a fashion show.</p>
              <div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5_MWvhuGu6HgdyBozOZLSa1kIUUumcUUUS9TKvI_wHJmnMw/viewform?embedded=true"><button className="volunteer_btn">Administration Application</button></a>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
