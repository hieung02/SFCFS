import React, {Component} from 'react';

const img1 = '../../img/volunteer_back.png';
const img2 = '../../img/money.png';

export class Donation extends Component {
  render() {
    return (
      <div className="volunteer" style={{background: `url(${img1}) no-repeat bottom left`}}>
        <section className="article_wrapper">
          <article className="application">
            <p className="app_icon_wrapper">
              <img src={img2} className="sub_icon"/>
              <h4>Donate</h4>
              Come to Our Fashion Show!!
            </p>
            <div className="application_detail">
              <div className="event_brite"><iframe src="//eventbrite.com/tickets-external?eid=26854686089&ref=etckt" frameBorder="0" height="431" width="100%" vspace="0" hspace="0" marginHeight="5" marginWidth="5" scrolling="auto" allowTransparency/>
              </div>
              <a href="https://www.eventbrite.com/e/sf-charity-fashion-show-2017-tickets-26854686089?ref=ebtn" target="_blank" rel="noopener noreferrer"><img src="https://www.eventbrite.com/custombutton?eid=26854686089" alt="Eventbrite - SF Charity Fashion Show 2017"/>
              </a>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
