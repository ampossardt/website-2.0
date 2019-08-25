import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: false
    };
  }

  hide = () => {
    this.setState({ hide: true });
    setTimeout(() => window.location.hash = 'projects', 150);
  }

  render() {
    return (
      <div className={`container about ${(this.state.hide || '') && 'hide'}`}>
        <svg className="top-left" viewBox={`0 0 1600 900`} style={ { width: window.innerWidth / 2, height: (window.innerWidth / 2) * (9/16) } }>
          <polygon points="0 0, 0 100, 100 0" fill="#fff" />
          <polygon points="1000 1000" fill="transparent" />
        </svg>
        <button onClick={ () => this.hide() }>close</button>
      </div>
    )
  }
}

export default About;