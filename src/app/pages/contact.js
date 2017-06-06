import React, { Component } from 'react';

export class Contact extends Component {
  constructor() {
    super();

    this.state = {
      email: {
        senderName:'',
        senderPhone:'',
        senderEmail:'',
        senderMessage:''
      }
    }
  }

// onClick={()=>{this.setState({email:sender}); console.log(this.state.email)}}

  render() {

    // let senderName, senderPhone, senderEmail, senderMessage;
    var sender = {
      name:'',
      phone:'',
      email:'',
      message:''
    };

    function sendMessage(key, value) {
      sender[key] = value;
    }

    function sendingMessage(){
      this.setState({email:sender});
    }

    return (
      <div className="volunteer contact scroll" style={{background: `url(${img1}) no-repeat bottom left`, backgroundSize:`cover`}}>
       <section className="article_wrapper">
          <article className="application">
            <p>
              {/*<img src={img2} className="sub_icon"/>*/}
              {contact_icon}
              <h4>Questions? Send us a message</h4>
            </p>
            <div className="application_detail_container">
              <div className="application_detail">
                <form name="contact_form" className="contactus_form" netlify>
                  <p>
                    <label>Name: 
                      <input onChange={(e)=>{sendMessage("name", e.target.value)}} type="text" name="name" required/>
                    </label>
                  </p>
                  <p>
                    <label>Phone Number: 
                      <input onChange={(e)=>{sendMessage("phone", e.target.value)}} type="tel" name="telephone"/>
                    </label>
                  </p>
                  <p>
                    <label>Email Address: 
                      <input onChange={(e)=>{sendMessage("email", e.target.value)}} type="email" name="email" required/>
                    </label>
                  </p>
                  <p>
                    <label>Message: 
                      <textarea onChange={(e)=>{sendMessage("message", e.target.value)}}name="message"/>
                    </label>
                  </p>
                  {/*<button>Send</button>*/}
                </form>
              </div>
              <p><button onClick={console.log(this)}>Send</button></p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

const img1 = '../../img/volunteer_bg.png';
const contact_icon =  
<svg width="87px" height="85px" viewBox="0 0 87 85" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g id="web" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="browse-issues-landingpage" transform="translate(-469.000000, -789.000000)">
            <g id="Group-6" transform="translate(471.000000, 791.000000)">
                <path d="M79.5655172,59.4285714 C79.5655172,59.4285714 79.5655172,22.2857143 79.5655172,17.4246843 C79.5655172,12.5636544 72.9827586,0 56.5258621,0 C40.0689655,3.48649446e-15 34.6165521,17.4246843 34.6165521,17.4246843 L33.4862069,32.5714286 L39.2174955,32.5714286 L38.9241379,36.8571429 L44.9344828,36.8571429 C44.9344828,36.8571429 44.3571054,40.6212356 43.5034483,41.4285714 C42.6497912,42.2359072 39.4965517,42 39.4965517,42 C39.4965517,42 39.3436317,47.0050493 44.9344828,49.1428571 C46.9329907,49.9070388 49.3543537,49.6559948 51.5172414,49.7142857 C53.680129,49.7725766 58.6724138,49.7142857 58.6724138,49.7142857 L58.9586207,60.2857143 L70.6931034,79.7142857 L79.5655172,59.4285714 Z" id="Path-10" stroke="#000000" strokeWidth="3"></path>
                <path d="M42.0724138,21.7142857 C42.0724138,21.7142857 42.0724138,26 47.5122274,26 C52.9520411,26 52.9520411,21.7142857 52.9520411,21.7142857" id="Path-11" stroke="#000000" strokeWidth="3" strokeLinecap="round"></path>
                <path d="M20.8931034,79.7142857 C20.8931034,79.7142857 20.6068966,73.7142857 25.7586207,67.1428571 C30.9103448,60.5714286 37.2068966,60.5714286 37.2068966,60.5714286 L83,60.2857143" id="Path-12" stroke="#000000" strokeWidth="3" strokeLinecap="round"></path>
                <rect id="Rectangle-13" fill="#000000" x="42.9310345" y="64.5714286" width="3.43448276" height="3.42857143"></rect>
                <rect id="Rectangle-13-Copy" fill="#000000" x="48.3689655" y="64.5714286" width="3.43448276" height="3.42857143"></rect>
                <rect id="Rectangle-13-Copy-2" fill="#000000" x="53.8068966" y="64.5714286" width="3.43448276" height="3.42857143"></rect>
                <path d="M0,21.1396878 C0,16.7231602 3.58139428,13.1428571 7.99148031,13.1428571 L20.6292093,13.1428571 C25.042782,13.1428571 28.6206897,16.7307779 28.6206897,21.1407402 L28.6206897,36.7664858 L31.7689655,42.8571429 L27.4758621,43.4285714 L27.4758621,43.4285714 C28.1081329,43.4285714 25.0392954,43.4285714 20.6292093,43.4285714 L7.99148031,43.4285714 C3.57790761,43.4285714 0,39.8504271 0,35.4317408 L0,21.1396878 Z" id="Rectangle-14" stroke="#000000" strokeWidth="3"></path>
                <path d="M14.5965517,55.1428571 C14.5965517,55.1428571 13.8766488,57.0517053 13.1655172,57.7142857 C12.4543857,58.3768661 10.3034483,59.1428571 10.3034483,59.1428571 C10.3034483,59.1428571 12.4295067,59.8891666 13.1655172,60.5714286 C13.9015278,61.2536906 14.3103448,62.8571429 14.3103448,62.8571429 C14.3103448,62.8571429 15.0977171,61.2139829 15.7413793,60.5714286 C16.3850415,59.9288742 18.6034483,58.5714286 18.6034483,58.5714286 C18.6034483,58.5714286 16.4267637,58.3007469 15.7413793,57.7142857 C15.0559949,57.1278245 14.5965517,55.1428571 14.5965517,55.1428571 Z" id="Path-13" stroke="#000000" strokeWidth="2"></path>
                <ellipse id="Oval-3" stroke="#000000" strokeWidth="2" cx="14.5965517" cy="29.4285714" rx="8.87241379" ry="8.85714286"></ellipse>
                <path d="M6.29655172,29.1764706 L23.1827586,29.1764706" id="Path-14" stroke="#000000" strokeWidth="2"></path>
                <path d="M15.1689655,20.5714286 C15.1689655,20.5714286 18.0310345,24.5714286 18.0310345,29 C18.0310345,33.4285714 14.8827586,37.4285714 14.8827586,37.4285714" id="Path-15" stroke="#000000" strokeWidth="2"></path>
                <path d="M12.3068966,20.5714286 C12.3068966,20.5714286 15.1689655,24.5714286 15.1689655,29 C15.1689655,33.4285714 12.0206897,37.4285714 12.0206897,37.4285714" id="Path-15-Copy" stroke="#000000" strokeWidth="2" transform="translate(13.594828, 29.000000) scale(-1, 1) translate(-13.594828, -29.000000) "></path>
            </g>
        </g>
    </g>
</svg>
