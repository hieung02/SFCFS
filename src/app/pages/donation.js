import React, {Component} from 'react';

const img1 = '../../img/volunteer_back.png';
const img2 = '../../img/money.png';

export class Donation extends Component {
  render() {
    return (
      <div className="volunteer donation" style={{background: `url(${img1}) no-repeat bottom left`}}>
        <section className="article_wrapper">
          <article className="application">
            <p className="app_icon_wrapper">
              <img src={img2} className="sub_icon"/>
              <h4>Donate!</h4>
              Make A Difference. Donate to the Scottish Rite Childhood Language Centers!
            </p>
            <div className="application_detail">
              <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                  <input type="hidden" name="cmd" value="_s-xclick"/><br/>
                  <input type="hidden" name="hosted_button_id" value="H7LXZM2BCSA6C"/>
                  <table>
                    <tbody>
                      <tr>
                      <td>
                        <input type="hidden" name="on0" value="Donate directly to the charity:"/>Donate directly to the charity via PayPal:</td>
                      </tr>
                    <tr>
                      <td>
                        <select name="os0"><option value="Donation Amount">Select Donation Amount </option><option value="Option 1">Option 1 $25.00 USD</option><option value="Option 2">Option 2 $50.00 USD</option><option value="Option 3">Option 3 $75.00 USD</option><option value="Option 4">Option 4 $100.00 USD</option><option value="Option 5">Option 5 $250.00 USD</option><option value="Option 6">Option 6 $500.00 USD</option><option value="Option 7">Option 7 $1,000.00 USD</option></select>
                      </td>
                    </tr>
                    <tr>
                    <td><input type="hidden" name="on1" value="SF Charity Fashion Show"/>Support the San Francisco / Burlingame Clinics:</td>
                    </tr>
                    <tr>
                    <td><select name="os1"><option value="San Francisco / Burlingame">San Francisco / Burlingame </option></select> </td>
                    </tr>
                    </tbody>
                  </table>
                  <p><input type="hidden" name="currency_code" value="USD"/><br/>
                  <input type="image" className="paypal_btn" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/><br/>
                  <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"/><br/>
                  </p>
              </form>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
