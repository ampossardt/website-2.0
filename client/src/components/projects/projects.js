import React from 'react';
import Project from './project';

class Projects extends React.Component {
  state = {
    activeProject: null
  };

  handleProjectActivated = (projectId) => {
    this.setState({ activeProject: projectId });

    setTimeout(() => {
      window.location.hash = `${window.location.hash}?id=${projectId}`;
    }, 800);
  };

  render() {
    return (
      <div className="container flex projects">
        {
          this.props.content.map(item => 
            <Project
              key={ item.key }
              data={ item }
              isActiveProject={ this.state.activeProject === item.key }
              isDetailActive={ this.state.activeProject }
              onProjectActivated={ () => this.handleProjectActivated(item.key) }
               />
          )
        }
      </div>
    );
  }
}

export default Projects;