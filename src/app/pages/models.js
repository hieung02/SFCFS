import React, {Component} from 'react';

const img1 = '../../img/model_bg.png';
const img2 = '../../img/designer_icon.png';

export class Models extends Component {
  render() {
    return (
      <div className="volunteer scroll" style={{background: `url(${img1}) no-repeat bottom left`, backgroundSize:`cover`}}>
        <section className="article_wrapper">
          <article className="application">
            <p>
              <img src={img2} className="sub_icon"/>
              <h4>Let’s get you set up</h4>
              It should only take a couple of minutes to tell us a bit more about you.
            </p>
            <div className="application_detail_container">
              <div className="application_detail">
                <p>We’re looking for models for the upcoming Charity Fashion Show. If you are interested in being a model, please fill out the form below & let us know how to contact you.</p>
                <p>Note: Your information is confidential and will only be used for casting calls.</p>
                <p>This is an unpaid gig, but one of the things that we pride ourselves on is our extremely low operation costs. The less we spend, the more we are able to give to the charity at the end of the day. This event is 100% volunteer-operated, no one gets paid. Everyone is volunteering their time to make this event hugely successful. Additionally, most of our operating costs are handled via in-kind donations (venue, staging, lighting, hair/makeup, etc.)</p>
              </div>
              <div>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe7hn3gC6VUj4WuoUwHzQYmlviQq5dV-1HR8tkW-CUw01c3MA/viewform?embedded=true"><button className="volunteer_btn">Model Application</button></a>
              </div>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
