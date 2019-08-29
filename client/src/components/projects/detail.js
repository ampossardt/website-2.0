import React from 'react';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animateLeave: false
    };
  }

  onLeave = () => {
    this.setState({ animateLeave: true });

    setTimeout(() => {
      window.history.back();
    }, 300);
  }

  clickChildAnchor = (event) => {
    if(event.target.tagName === 'BUTTON') {
      event.target.querySelector('a').click();
    }
  }

  render() {
    return (
      <div className={`container project-detail flex ${(this.state.animateLeave || '') && 'leave'}`}>
        <div className="image flex" style={{ backgroundImage: `url(${this.props.content.imageUrl})` }}>
          <div className="code-links">
            <button className="button github" onClick={ this.clickChildAnchor }><a href={this.props.content.githubUrl} target="_blank" rel="noopener noreferrer">source code</a></button>
            <button className="button visit-project" onClick={ this.clickChildAnchor }><a href={this.props.content.projectUrl} target="_blank" rel="noopener noreferrer">visit project</a></button>
          </div>
        </div>
        <div className="content flex">
          <header className="title-bar">
            <button className="button back" onClick={ this.onLeave }>Back</button>
            <h1>{this.props.content.title}</h1>
          </header>
          <div className="inner-content" dangerouslySetInnerHTML={{ __html: this.props.content.text}}>
          </div>
          <div className="technology-container">
            {
              Object.keys(this.props.content.tech).map(key =>
              <span key={key} className={`technology ${key}`}>{this.props.content.tech[key]}</span>
              )
            }
          </div>
        </div>
      </div>
    );
  }
  
}

export default ProjectDetail;