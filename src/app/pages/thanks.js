import React, {Component} from 'react';

const img1 = '../../img/volunteer_bg.png';
const img2 = '../../img/thank_you_icon1.png';
const img3 = '../../img/thank_you_icon2.png';

export class Thanks extends Component {
  render() {
    return (
      <div className="volunteer" style={{background: `url(${img1}) no-repeat bottom left`}}>
        <section className="article_wrapper">
          <article className="application">
            <p className="app_icon_wrapper">
              <img src={img2} className="sub_icon"/>
              <h4>Congratulations!</h4>
              We’ve received your application!  Thanks for your patience and we’ll contact you soon!
            </p>
            <p className="app_icon_wrapper2">
              <div className="circle_icon"><img src={img3} className="sub_icon"/></div>
              <h4>“SFCFS charity certificate”</h4>
            </p>
          </article>
        </section>
      </div>
    );
  }
}
