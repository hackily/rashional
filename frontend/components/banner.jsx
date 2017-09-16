const React = require('react');

const Banner = ({props}) => (
  <section id="banner">
    <div className="inner">
      <header>
        <h2>{props.title}</h2>
      </header>
      <h3 className="subtitle" style={{color: "white"}}>{props.subtitle}</h3>
    </div>
  </section>
);

module.exports = Banner;
