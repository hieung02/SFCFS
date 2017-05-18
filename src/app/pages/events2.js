import React, {Component} from 'react';

const img1 = '../../img/model_bg.png';
const img2 = '../../img/fashion.png';

export class Event extends Component {
  render() {
    return (
      <div className="volunteer" style={{background: `url(${img1}) no-repeat bottom left`}}>
        <section className="article_wrapper">
          <article className="article_part">
            <p className="event_header">
              <img src={img2} className="sub_img2"/>
              <h4>Fashion and Charity!!</h4>
              Love Fashion Week events? Get your tickets for the SF Charity Fashion Show.  Fashion.  Fun. … Plus, you get to support a great charity!
              <br/>
              <span className="bold">Tickets</span> for the SF Charity Fashion Show are available through EventBrite!!
            </p>
            <div className="application_detail">
              <div className="event_brite2"><iframe src="//eventbrite.com/tickets-external?eid=26854686089&ref=etckt" frameBorder="0" height="431" width="100%" vspace="0" hspace="0" marginHeight="5" marginWidth="5" scrolling="auto" allowTransparency/>
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
