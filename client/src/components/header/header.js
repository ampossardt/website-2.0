import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      activeLink: 'projects'
    };

    window.addEventListener('hashchange', this.hashListener);
  }

  hashListener = (event) => {
    const hash = event.newURL.substring(event.newURL.lastIndexOf('/') + 1);

    this.setState({ activeLink: hash.split('?')[0].replace('#', '') });
  }

  changeActiveLink = (activeLink) => {
    this.setState({ activeLink });
  }

  render() {
    return (
      <header className="navigation">
        <h1>andrew possardt</h1>
        <figure className="links">
          <a 
            href="#about"
            className={ (this.state.activeLink === 'about' || '') && 'active' }
            onClick={() => this.changeActiveLink('about') }>
            about</a>
          <a 
            href="#projects"
            className={ (this.state.activeLink === 'projects' || '') && 'active' }
            onClick={() => this.changeActiveLink('projects') }>
            projects</a>
          <a 
            href="#photos"
            className={ (this.state.activeLink === 'photos' || '') && 'active' }
            onClick={() => this.changeActiveLink('photos') }>
            photography</a>
        </figure>
      </header>
    );
  }
}

export default Header;