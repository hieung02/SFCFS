import React, {Component} from 'react';

export default class About extends Component {

  render() {
    return (
      <div>
        <div className="section">
          <section>
            <h1>About SF Charity Fashion Show</h1>
          </section>
          <article className="article">
            <p>
              Established in 1962, the San Francisco-Burlingame Childhood Language Center was the pioneer clinic of its kind in California. Over the past 50 years, we have served more than 5,000 children with a variety of communication disorders. These include speech and language delays as well as learning disabilities. We have always served a diverse population, and have always been in high demand and remain so today. Children who receive our services come primarily from San Francisco County, but also from San Mateo, Marin, and Alameda Counties.
            </p>
            <p>
              The San Francisco-Burlingame Scottish Rite Childhood Language Center’s mission is to provide free evidence-based therapy and evaluations to children 3-12 years of age with speech, language, and literacy challenges. We serve children regardless of their race, gender, economic status, religious background, Masonic affiliation, or familial status.
            </p>
            <p>
              Our goal is to improve our clients’ communication abilities. We help them lead meaningful, productive, independent, and fulfilling lives — both academically and socially.
            </p>
            <p>
              The San Francisco-Burlingame Scottish Rite Childhood Language Center is part of the California Scottish Rite Foundation – a 501(c)3 Charitable Organization, EIN 94-6078728
            </p>
          </article>
        </div>
        <div className="subsect" style={{backgroundColor: '#0194C4'}}>
          <a href="http://www.ritecare-sf.org/" alt="Click to redirect to rite-care organization web page">
            <img className="imgLogo" src="http://www.ritecare-sf.org/application/files/7614/8946/7925/new_web_logo.png" alt="ritecare sf image"/>
          </a>
        </div>
      </div>
    );
  }
}
