import React, {Component} from 'react';

const img1 = '../../img/volunteer_bg.png';
const img2 = '../../img/designer_icon.png';

export class Designers extends Component {
  render() {
    return (
      <div className="volunteer" style={{background: `url(${img1}) no-repeat bottom left`}}>
        <section className="article_wrapper">
          <article className="application">
            <p>
              <img src={img2} className="sub_icon"/>
              <h4>Let’s get you set up</h4>
              It should only take a couple of minutes to tell us a bit more about you.
            </p>
            <p className="application_detail">
              <h4>Eligibility:</h4>
              <ul>
                <li>The Summer 2017 SF Charity Fashion Show is open to all designers ages 18 or above.</li>
                <li>Entries must be the exclusive work of the submitter or submitting team, completed within the last one year or created especially for this show.</li>
                <li>All works must be wearable objects to be modeled on a runway, and must exhibit unique, innovative, inspirational and creative artistry.</li>
                <li>This is a juried event. Evaluation will be based upon creative uniqueness, the originality of the work and the quality of the overall submission</li>
              </ul>
              <div>
                <a href="/volunteers/designers"><button className="volunteer_btn">Designer Application</button></a>
              </div>
            </p>
          </article>
        </section>
      </div>
    );
  }
}
