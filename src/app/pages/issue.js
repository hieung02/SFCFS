import React, {Component} from 'react';

const img1 = '../../img/issue_bg.png';
const img2 = '../../img/issue_bg1.png';
const img3 = '../../img/issue_bg2.png';
const img4 = '../../img/issue_bg3.png';

export class Issue extends Component {

  render() {
    return (
      <div className="about">
        <div style={{background: `url(${img1}) no-repeat center bottom`, backgroundSize: `cover`}} className="headline"/>
        <section className="article_container">
          <h1>Stories in Rite Care</h1>
          <article className="article_part">
            <img src={img2} className="sub_img"/>
            <p>
              <span className="subtitle">Case Study 1</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque nisi hic nostrum delectus sint, similique perferendis est obcaecati minima aperiam facilis ab quod, ex provident doloribus debitis, ipsum dignissimos.
            </p>
            <div className="verticle_line"/>
          </article>
          <article className="article_part">
            <div className="horizontal_line"/>
            <p>
              <span className="subtitle">Case Study 2</span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae itaque praesentium, necessitatibus veniam, et, atque nulla ullam mollitia facilis ipsam numquam ad ipsum pariatur inventore delectus enim molestias quos dolorum.
            </p>
            <img src={img3} className="sub_img"/>
          </article>
          <article className="article_part">
            <img src={img4} className="sub_img"/>
            <div className="verticle_line2"/>
            <div>
              <p>
                <span className="subtitle">Case Study 3</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio rerum natus est obcaecati reiciendis excepturi, possimus. Aspernatur esse excepturi, accusamus dolore dolores, temporibus dignissimos et sapiente impedit nostrum tempore repellendus.
              </p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
