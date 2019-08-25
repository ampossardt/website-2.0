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
          <polygon points="0 0, 100 0, 0 100" fill="#fff" />

          <polygon points="0 100, 50 50, 70 50, 0 120" fill="#951943" />
          <polygon points="50 50, 100 0, 120 0, 70 50" />

          <polygon points="0 120, 40 80, 80 80, 0 160" />
          <polygon points="40 80, , 80 80, 0 160" />

          <polygon points="1000 1000" fill="transparent" />
        </svg>
        <button onClick={ () => this.hide() }>close</button>
      </div>
    )
  }
}

export default About;