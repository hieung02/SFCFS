import React, {Component} from 'react';

const img1 = '../../img/volunteer_bg.png';
const img2 = '../../img/volunteer_bg1.png';

export class Admin extends Component {
  render() {
    return (
      <div className="volunteer" style={{background: `url(${img1}) no-repeat bottom left`}}>
        <section className="article_wrapper">
          <article className="article_part">
            <img src={img2} className="sub_img"/>
            <div className="verticle_line2"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At eaque nisi hic nostrum delectus sint, similique perferendis est obcaecati minima aperiam facilis ab quod, ex provident doloribus debitis, ipsum dignissimos.
              <div>
                <a href="/administrators-volunteers"><button className="volunteer_btn">Administrator Volunteer</button></a>
              </div>
            </p>
          </article>
        </section>
      </div>
    );
  }
}
