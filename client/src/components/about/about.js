import React from 'react';
import { aboutSvg } from '../../assets/content';
import aboutImage from '../../assets/about.jpg';

class About extends React.Component {
  usedRandoms = [];
  tech = [
    { name: '.NET', primaryColor: '#171717', secondaryColor: '#fff', logo: '/netcore.svg' },
    { name: 'Angular', primaryColor: '#171717', secondaryColor: '#fff', logo: '/angular.svg' },
    { name: 'Kubernetes', primaryColor: '#171717', secondaryColor: '#fff', logo: '/kubernetes.svg' },
    { name: 'Docker', primaryColor: '#171717', secondaryColor: '#fff', logo: '/docker.svg' },
    { name: 'React', primaryColor: '#171717', secondaryColor: '#fff', logo: '/react.svg' },
    { name: 'NodeJS', primaryColor: '#171717', secondaryColor: '#fff', logo: '/nodejs.svg' },
    // { name: '.NET', primaryColor: '#171717', secondaryColor: '#fff', logo: '' },
  ]

  constructor(props) {
    super(props);

    this.state = {
      hide: false,
      lines: aboutSvg.map(item => {

        return Object.assign(item, { class: `blue${this.generatePatternedRandom()}` });
      })
    };
  }

  hide = () => {
    this.setState({ hide: true });
    setTimeout(() => window.location.hash = 'projects', 400);
  }

  getTransform = (item) => {
    const width = (window.innerWidth / 4) * 3;

    return `translate(${item.ratio * (item.animateFrom === 'bottom' ? -width : width)}px, ${item.ratio * (item.animateFrom === 'top' ? -width : width)}px)`;
  }

  generatePatternedRandom = () => {
    if(this.usedRandoms.length === 9) this.usedRandoms = [];

    let random = Math.floor(Math.random() * 9 + 1);

    while(true) {
      if(!this.usedRandoms.includes(random)) {
        this.usedRandoms.push(random);
        break;
      } else {
        random = Math.floor(Math.random() * 9 + 1);
      }
    }

    return random;
  }

  render() {
    return (
      <div className={`container about flex vertical-align ${(this.state.hide || '') && 'hide'}`}>
        <svg
          viewBox="0 0 1600 900" 
          className="animated"
          style={ { width: (window.innerWidth / 4) * 3, height: ((window.innerWidth / 4) * 3) * (9/16) } }>
          { 
            this.state.lines.map((item, index) => 
              <polygon 
                key={index}
                points={item.points} 
                className={`transform ${item.class}`} 
                style={ { transform: this.getTransform(item), animationDelay: `${item.delay}ms` }} />
            )
          }
        </svg>
        <svg
          viewBox="0 0 1600 900" 
          className="animated flipped"
          style={ { width: (window.innerWidth / 4) * 3, height: ((window.innerWidth / 4) * 3) * (9/16) } }>
          { 
            this.state.lines.map((item, index) => 
              <polygon
                key={index}
                points={item.points} 
                className={`transform ${item.class}`} 
                style={ { transform: this.getTransform(item), animationDelay: `${item.delay}ms` }} />
            )
          }
        </svg>
        <div className="content">
          <header className="title-bar">
            <button className="button back" onClick={ this.hide }>Back</button>
            <h1 className="label">andrew possardt</h1>
          </header>
          <div className="flex nowrap">
            <div className="inner-content">
              <p>Hi, I'm Andrew.</p>
              <p>I'm a web developer from Atlanta, currently working with the .NET Core and Angular professionally. On my personal projects, I enjoy working with React and NodeJS.</p>
              <p>I like designing stuff for the web, but when I'm not doing that, I like to take pictures, drink beer, ride around pay-as-you-go electric scooters without purpose, and eat ramen.</p>
              {/* <div className="tech-container flex">
                { this.tech.map(item => 
                    <div className="col fifth">
                      <svg className="tech-shape" viewBox="0 0 600 600">
                        <polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" fill={item.secondaryColor} />
                        <polygon points="294,3 585.246118,214.602691 474,556.983037 114,556.983037 2.753882,214.602691" style={{ transform: 'translate(15px, 8px) scale(1, .99)'}} fill={item.primaryColor} />
                      </svg>
                      <img className="logo" src={item.logo} />
                    </div>
                  )
                }
              </div> */}
            </div>
            <img className="profile" src={aboutImage} />
          </div>
        </div>
        
      </div>
    )
  }
}

export default About;