import React from 'react';

class Header extends React.Component {
  state = { activeLink: 2 };

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
            className={ (this.state.activeLink === 1 || '') && 'active' }
            onClick={() => this.changeActiveLink(1) }>
            about</a>
          <a 
            href="#projects"
            className={ (this.state.activeLink === 2 || '') && 'active' }
            onClick={() => this.changeActiveLink(2) }>
            projects</a>
          <a 
            href="#photos"
            className={ (this.state.activeLink === 3 || '') && 'active' }
            onClick={() => this.changeActiveLink(3) }>
            photography</a>
        </figure>
      </header>
    );
  }
}

export default Header;