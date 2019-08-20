import React from 'react';

class Header extends React.Component {
  state = { activeLink: 1 };

  changeActiveLink = (activeLink) => {
    this.setState({ activeLink });
  }

  render() {
    return (
      <header className="navigation">
        <figure className="links">
          <a 
            href="#projects"
            className={ (this.state.activeLink === 1 || '') && 'active' }
            onClick={() => this.changeActiveLink(1) }>
            projects</a>
          <a 
            href="#photos"
            className={ (this.state.activeLink === 2 || '') && 'active' }
            onClick={() => this.changeActiveLink(2) }>
            photography</a>
          <a 
            href="#github"
            className={ (this.state.activeLink === 3 || '') && 'active' }
            onClick={() => this.changeActiveLink(3) }>
            github</a>
        </figure>
      </header>
    );
  }
}

export default Header;