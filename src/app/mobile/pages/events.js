import React, {Component} from 'react';

export class Event extends Component {
  render() {
    return (
      <div>
        <div className="section">
          <section>
            <h1>SF Charity Fashion Show Tickets</h1>
          </section>
          <article className="article">
            <p>Love Fashion Week events? Get your tickets for the SF Charity Fashion Show.  Fashion.  Fun. … Plus, you get to support a great charity!</p>
            <p>Tickets for the SF Charity Fashion Show are available through EventBrite:</p>
            {/* <div className="eventbrite">
              <iframe src="https://www.eventbrite.com/reserved/pick/26854686089/?cart_uuid=373caef6352d11e7a7e80e24c96df9ee"/>
            </div> */}
          </article>
          <a href="https://www.eventbrite.com/reserved/pick/26854686089/"><button>Reserve a Seat or Seats Now!!</button></a>
        </div>
      </div>
    );
  }
}
