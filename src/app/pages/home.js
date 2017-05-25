import React, {Component} from 'react';

const img1 = '../../img/bg_1.png';
const img2 = '../../img/bg_2.png';
const img3 = '../../img/bg_3.png';
const money = '../../img/money.png';
const img4 = '../../img/bg_4.png';
const img5 = '../../img/bg_5.png';
const img6 = '../../img/bg_6.png';
const happyKids = '../../img/happy-kids.png';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="section">
          <article className="main">
            <h1>SF Charity Fashion Show</h1>
            <p>We are SF Charity Fashion Show, a fundraiser for the San Francisco-Burlingame Scottish Rite Childhood Language Center.</p>
            <a href="/about"><button>Read Our Stories</button></a>
          </article>
          <article className="main_sub">
            <article className="sub_main" style={{background: `url(${img3}) no-repeat center center`, backgroundSize:'cover'}}>
              <a href="/subscribe"><button>Subscribe!</button></a>
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
            <a href="/the-issue"><button>Browse The Issues</button></a>
          </article>
        </section>
      </div>
    );
  }
}
