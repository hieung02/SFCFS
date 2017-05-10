import React, {Component} from 'react';

export class Home extends Component {

  render() {
    return (
      <div>
        <div className="section">
          <section>
            <h1>SF Charity Fashion Show</h1>
          </section>
          <article className="article">
            <p>
              The 2017 SF Charity Fashion Show is a fundraiser for the San Francisco-Burlingame Scottish Rite Childhood Language Center.  The San Francisco-Burlingame Scottish Rite Childhood Language Center provides free evidence-based therapy and evaluations to children three to twelve years of age with speech, language, and literacy challenges. They serve children regardless of their race, gender, economic status, religious background, Masonic affiliation, or familial status.
            </p>
            <p>
              Last year’s event drew a crowd of over three hundred attendees, including international media and buyers.  This year’s event should be even larger. Save the date (Saturday, July 15th, 2017), sign up for the newsletter and come join the fun.
          </p>
          </article>
          <a href="/about" alt="Redirect to our story"><button>Read Our Stories</button></a>
        </div>
        <div className="subsect">
          <a href="/subscribe" alt="Redirect to our story"><button>Subscribe</button></a>
        </div>
      </div>
    );
  }
}
