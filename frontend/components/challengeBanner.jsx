const React = require('react');

const ChallengeBanner = ({props}) => (
  <section id="cta">
    <header>
      <h2 className="title is-spaced" style={{color:"white"}}>{props.challenge}</h2>
      <h3 className="subtitle" style={{color:"white"}}>{props.text}</h3>
    </header>
  </section>
);


module.exports = ChallengeBanner;