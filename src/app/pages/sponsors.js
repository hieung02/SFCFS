import React, {Component} from 'react';

const img1 = '../../sponsors/img1.png';
const img2 = '../../sponsors/img2.png';
const img3 = '../../sponsors/img3.png';
const img4 = '../../sponsors/img4.png';
const img5 = '../../sponsors/img5.png';
const img6 = '../../sponsors/img6.png';
const img7 = '../../sponsors/img7.jpg';
const img8 = '../../sponsors/img8.png';
const img9 = '../../sponsors/img9.png';
const bg = '../../sponsors/sponsors_bg.png';

const desg1 = '../../sponsors/designers/img1.jpg';
const desg2 = '../../sponsors/designers/img2.jpg';
const desg3 = '../../sponsors/designers/img3.png';
const desg4 = '../../sponsors/designers/img4.jpg';
const desg5 = '../../sponsors/designers/img5.jpg';
// const bg = '../../sponsors/bg.jpg';

{/*<img src={img1} alt=""/>
  <img src={img2} alt=""/>
  <img src={img3} alt=""/>
  <img src={img4} alt=""/>
  <img src={img5} alt=""/>
  <img src={img6} alt=""/>
  <img src={img7} alt=""/>*/}


export class Sponsors extends Component {
  render() {
    return (
      <div className="about sponsors">
        <div style={{background: `url(${bg}) no-repeat center bottom`, backgroundSize: `cover`}} className="headline"/>
        <section className="sponsors_gallery">
          <article className="gallery_category">
            <div className="sponsors_title">
              Corporate Sponsors
            </div>
          </article>
          <img src={img1} alt=""/>
          <img src={img2} alt=""/>
          <img src={img3} alt=""/>
        {/*</section>*/}
        {/*<section className="sponsors_gallery">*/}
          <img src={img4} alt=""/>
          <img src={img5} alt=""/>
          <img src={img6} alt=""/>
          <img src={img7} alt=""/>
          <img src={img9} alt=""/>
        {/*</section>*/}
        {/*<section className="sponsors_gallery">*/}
          <article className="gallery_category">
            <div className="sponsors_title">
              Featured Designers
            </div>
          </article>
          <img src={desg1} alt=""/>
          <img src={desg2} alt=""/>
          <img src={desg3} alt=""/>
          <img src={desg4} alt=""/>
          <img src={desg5} alt=""/>
          <article className="gallery_category">
            <div className="sponsors_title">
              Educational Sponsor
            </div>
          </article>
          <img src={img8} alt=""/>
        </section>
      </div>
    );
  }
}


{/*<article className="sub_main" style={{background: `url(${img1}) no-repeat center center`, backgroundSize:'cover'}}>
</article>
<article className="sub_main" style={{background: `url(${img2}) no-repeat center center`, backgroundSize:'cover'}}/>
<article className="sub_main" style={{background: `url(${img4}) no-repeat center rgba(198, 234, 233, 1)`}}>
</article>
<article className="sub_main" style={{background: `url(${img3}) no-repeat center center`, backgroundSize:'cover'}}>
</article>*/}