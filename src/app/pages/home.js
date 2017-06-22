import React, {Component} from 'react';

const img1 = '../../img/bg_1.png';
const img2 = '../../img/bg_2.png';
const img3 = '../../img/bg_3.png';
const money = '../../img/money.png';
const img4 = '../../img/bg_8.jpg';
const img5 = '../../img/bg_5.png';
const img6 = '../../img/bg_6.png';
const happyKids = '../../img/happy-kids.png';

export class Home extends Component {
  componentDidMount(){
    document.addEventListener('fb_init', e => FB.XFBML.parse());
  }

  render() {
    return (
      <div className="home">
        <section className="section">
          <article className="main">
            <h1>Food, Drinks, and Fashion! Come to our Fashion Show Fundraiser!!</h1>
            <p>We are SF Charity Fashion Show, a fundraiser for the San Francisco-Burlingame Scottish Rite Childhood Language Center.</p>
            <a href="/event_tickets"><button>Purchase Your Tickets</button></a>
          </article>
          <article className="main_sub">
            <article className="sub_main" style={{background: `url(${img3}) no-repeat center center`, backgroundSize:'cover'}}>
              {/* <a href="/subscribe"><button>Subscribe!</button></a> */}
            </article>
            <article className="sub_main" style={{background: `url(${img2}) no-repeat center center`, backgroundSize:'cover'}}/>
            <article className="sub_main" style={{background: `url(${money}) no-repeat center rgba(198, 234, 233, 1)`}}>
              <span>Who We Are</span>
            </article>
            <article className="sub_main" style={{background: `url(${img1}) no-repeat center center`, backgroundSize:'cover'}}>
              <a href="/volunteers"><button>Get Involved!</button></a>
            </article>
          </article>
        </section>

        <section className="section">
          <article className="main_sub">
            <article className="sub_main" style={{background: `url(${img4}) no-repeat center center`, backgroundSize:'cover'}}>
              <a href="/donation"><button>Donate Now!</button></a>
            </article>
            <article className="sub_main" style={{background: `url(${img5}) no-repeat center center`, backgroundSize:'cover'}}/>
            <article className="sub_main" style={{background: `url(${happyKids}) no-repeat center 75px rgba(198, 234, 233, 1)`}}>
              <span>What We Do</span>
            </article>
            <article className="sub_main" style={{background: `url(${img6}) no-repeat center center`, backgroundSize:'cover'}}/>
          </article>
          <article className="main">
            <h1>Scottish Rite Childhood Language Center</h1>
            <p>The San Francisco-Burlingame Scottish Rite Childhood Language Center provides free therapy and evalutions to children with communication disorder.</p>
            {/* <a href="/the-issue"><button>Browse The Issues</button></a> */}
            <a href="http://www.ritecare-sf.org/"><button>Browse The Issues</button></a>
            {/* <div style="display:block;width:100%;float:left;overflow:hidden;margin-bottom:20px"> */}
    {/* <div id="fb-root"></div>
    <div class="fb-like-box fb_iframe_widget" style="background-color: auto;" data-small-header="true" data-height="560" data-href="https://www.facebook.com/SFCharityFashionShow/" data-show-border="true" data-show-faces="true" data-stream="true" data-width="350" data-force-wall="false" fb-xfbml-state="rendered" fb-iframe-plugin-query="app_id=&amp;container_width=0&amp;force_wall=false&amp;height=560&amp;href=https%3A%2F%2Fwww.facebook.com%2FSFCharityFashionShow%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_border=true&amp;show_faces=true&amp;stream=true&amp;width=350">
       <span style="vertical-align: bottom; width: 350px; height: 560px;">
        <iframe name="f2fb805ea218b24" width="350px" height="560px" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" title="fb:like_box Facebook Social Plugin" src="https://www.facebook.com/v2.6/plugins/like_box.php?app_id=&amp;channel=http%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2F0F7S7QWJ0Ac.js%3Fversion%3D42%23cb%3Df3eb5428335091%26domain%3Dwww.sfcharityfashionshow.com%26origin%3Dhttp%253A%252F%252Fwww.sfcharityfashionshow.com%252Ff19155efcc93a5c%26relation%3Dparent.parent&amp;container_width=0&amp;force_wall=false&amp;height=560&amp;href=https%3A%2F%2Fwww.facebook.com%2FSFCharityFashionShow%2F&amp;locale=en_GB&amp;sdk=joey&amp;show_border=true&amp;show_faces=true&amp;stream=true&amp;width=350" style="border: none; visibility: visible; width: 350px; height: 560px;" class="">
        </iframe>
      </span> 
    </div>
     <div style="display:none;">Facebook By Weblizar Powered By Weblizar</div>  
</div>*/}
          </article>
        </section>
      </div>
    );
  }
}
