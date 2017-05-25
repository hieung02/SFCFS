import React, { Component } from 'react';
{/*<script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script><script type="text/javascript">{(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);}</script>*/}

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="text-2" className="widget widget_text"><h1 className="widget-title">Join Our Mailing List</h1>			
          <div className="textwidget">
            <div id="mc_embed_signup" style={{background:'#fff', clear:'left', font:'14px Helvetica,Arial,sans-serif',  width:'300px'}}>
              <form action="//SFCharityFashionShow.us14.list-manage.com/subscribe/post?u=3d108d53e864bbc6587f65418&amp;id=5ac13d388d" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate="novalidate">
                <div id="mc_embed_signup_scroll">
                  <h2>Subscribe to our mailing list</h2>
                  <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                  <div className="mc-field-group">
                    <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span>
                    </label>
                    <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" aria-required="true"/>
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-FNAME">First Name </label>
                    <input type="text" value="" name="FNAME" className="" id="mce-FNAME"/>
                  </div>
                  <div className="mc-field-group">
                    <label for="mce-LNAME">Last Name </label>
                    <input type="text" value="" name="LNAME" className="" id="mce-LNAME"/>
                  </div>
                  <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style="display:none"></div>
                    <div className="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <div style="position: absolute; left: -5000px;" aria-hidden="true">
                    <input type="text" name="b_3d108d53e864bbc6587f65418_5ac13d388d" tabindex="-1" value=""/>
                  </div>
                  <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
                );
  }
}
