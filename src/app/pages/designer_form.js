import React, {Component} from 'react';

const img1 = '../../img/volunteer_bg.png';
const img2 = '../../img/app_icon.png';

export class DesignerForm extends Component {
  render() {
    return (
      <div className="volunteer" style={{background: `url(${img1}) no-repeat bottom left`}}>
        <section className="article_wrapper">
          <article className="application">
            <p className="app_icon_wrapper">
              <img src={img2} className="sub_icon"/>
              <h4>Let’s get you set up</h4>
              It should only take a couple of minutes to tell us a bit more about you.
            </p>
            <p className="application_detail">
              <article name="volunteer_form" className="article_wrapper">
                <form name="designer_volunteer_form" action="thank-you" netlify>
                  <p><label>Name: <input type="text" name="name"/></label></p>
                  <p><label>Address: <input type="street-address" name="address"/></label></p>
                  <p><label>State: <input type="address-level4" name="state"/></label></p>
                  <p><label>Zip Code: <input type="postal-code" name="zip_code"/></label></p>
                  <p><label>Phone Number: <input type="tel" name="telephone"/></label></p>
                  <p><label>Email Address: <input type="email" name="email"/></label></p>
                  <p><label>Website: <input type="url" name="website"/></label></p>
                  <p><button>Send</button></p>
                </form>
              </article>
            </p>
          </article>
        </section>
      </div>
    );
  }
}
