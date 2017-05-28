import React, {Component} from 'react';
import {browserHistory} from 'react-router';

const img1 = '../../img/volunteer_bg.png';
const img2 = '../../img/form.png';

export class Designers extends Component {
  constructor() {
    super();

    this.state = {
      currentSelected: 'Emerging Designers Application'
    };
  }

  getPdfs(designer) {
    if (designer) {
      return 'http://www.sfcharityfashionshow.com/WP/wp-content/uploads/2016/11/SFCFS-Emerging-Designers-Form-Summer-2017.doc';
    }
    return 'http://www.sfcharityfashionshow.com/WP/wp-content/uploads/2016/11/SF-Charity-Fashion-Show-Designer-Application-Summer-2017.doc';
  }

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
                <h4>Eligibility:</h4>
                <ul>
                  <li>The Summer 2017 SF Charity Fashion Show is open to all designers ages 18 or above.</li>
                  <li>Entries must be the exclusive work of the submitter or submitting team, completed within the last one year or created especially for this show.</li>
                  <li>All works must be wearable objects to be modeled on a runway, and must exhibit unique, innovative, inspirational and creative artistry.</li>
                  <li>This is a juried event. Evaluation will be based upon creative uniqueness, the originality of the work and the quality of the overall submission</li>
                </ul>
              </div>
              <form>
                {`Designer Forms: `}
                <select onChange={(e)=>{this.setState({currentSelected: e.target.value})}} name="designer_type" className="designer_options">
                  <option value="Emerging Designers Application" >Emerging Designer</option>
                  <option value="Established Designer Application">Established Designer</option>
                </select>
              </form>
              <a download href={this.state.currentSelected === 'Emerging Designers Application' ? this.getPdfs(true) : this.getPdfs(false)}>
                <button onClick={()=>{browserHistory.push('/thank-you'); location.reload();}} className="volunteer_btn">{this.state.currentSelected}</button>
              </a>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
