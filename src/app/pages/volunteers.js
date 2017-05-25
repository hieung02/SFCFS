import React, {Component} from 'react';

const img1 = '../../img/volunteer_bg.png';
const img2 = '../../img/volunteer_bg1.png';

export class Volunteers extends Component {
  constructor() {
    super();

    this.state = {
      submit: true
    }
  }
  render() {
    return (
      <div className="volunteer" style={{background: `url(${img1}) no-repeat bottom left`}}>
        <section className="article_wrapper">
          <article className="article_part">
            <img src={img2} className="sub_img"/>
            <div className="verticle_line2"/>
            <div>
              <p>
              The SF Charity Fashion Show is 100% volunteer-run series of fashion shows to raise funds for charitable causes. As everyone involved is a volunteer, we are able to minimize overhead and donate as much as possible directly to the charity. 100% of net proceeds are donated.
              </p>
              <p>Come! Get Involved! Volunteer</p>
              <div>
                <a onClick={()=>{this.setState({submit:false})}} href="/designer_volunteers"><button className="volunteer_btn">Designer Volunteer</button></a>
                <a href="/model_volunteers"><button className="volunteer_btn">Model Volunteer</button></a>
                <a href="/administrator_volunteers"><button className="volunteer_btn">Administrator Volunteer</button></a>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
