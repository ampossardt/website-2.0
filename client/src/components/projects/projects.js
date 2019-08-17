import React from 'react';

class Projects extends React.Component {

  handleProjectClick = (event) => {
    let element = event.target.parentNode;
    while(!element.classList.contains('content')) {
      element = element.parentNode;
    }

    element.classList.toggle('clicked');
  };

  render() {
    return (
      <div className="container flex projects">
        <div className="col half">
          <div className="project">
            <span className="background-color"></span>
            <span className="background-image"></span>
            <div className="content flex vertical-align">
              <div className="text">
                <h2>artisan wants generator</h2><br/>
                <p>generate a static HTML page hosted on GitHub for trading artisan keycaps</p>
              </div>
              
              <div className="btn-container" onClick={ this.handleProjectClick }>
                <i className="fa fa-chevron-right"></i>
                <span className="line bottom"></span>
                <span className="line right"></span>
                <span className="line top"></span>
                <span className="line left"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;