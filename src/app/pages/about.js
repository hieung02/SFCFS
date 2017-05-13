import React, {Component} from 'react';

const img1 = '../../img/about_bg.png';
const img2 = '../../img/about_bg1.png';
const img3 = '../../img/about_bg2.png';
const img4 = '../../img/bg_4.png';

export class About extends Component {

  render() {
    return (
      <div className="about">
        <img src={img1} className="headline"/>
        <section className="article_container">
          <h1>Stories in SFCFS</h1>
          <article className="article_part">
            <img src={img2} className="sub_img"/>
            <p>
              Established in 1962, the San Francisco-Burlingame Childhood Language Center was the pioneer clinic of its kind in California. Over the past 50 years, we have served more than 5,000 children with a variety of communication disorders. These include speech and language delays as well as learning disabilities. We have always served a diverse population, and have always been in high demand and remain so today. Children who receive our services come primarily from San Francisco County, but also from San Mateo, Marin, and Alameda Counties.
            </p>
            <div className="verticle_line"/>
          </article>
          <article className="article_part">
            <div className="horizontal_line"/>
            <p>
              The San Francisco-Burlingame Scottish Rite Childhood Language Center’s mission is to provide free evidence-based therapy and evaluations to children 3-12 years of age with speech, language, and literacy challenges. We serve children regardless of their race, gender, economic status, religious background, Masonic affiliation, or familial status.
            </p>
            <img src={img4} className="sub_img"/>
          </article>
          <article className="article_part">
            <img src={img3} className="sub_img"/>
            <div className="verticle_line2"/>
            <div>
              <p>
                Our goal is to improve our clients’ communication abilities.We help them lead meaningful, productive, independent, and fulfilling lives — both academically and socially.
              </p>
              <p>
                The San Francisco-Burlingame Scottish Rite Childhood Language Center is part of the California Scottish Rite Foundation – a 501(c)3 Charitable Organization, EIN 94-6078728
              </p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}
