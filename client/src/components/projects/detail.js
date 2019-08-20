import React from 'react';

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false
    };
  }

  render() {
    return (
      <div className="container project-detail flex">
        {/* <svg className="polygon" viewBox="0 0 400 100">
          <polygon className="blue3" points="0 0, 100 0, 100 25, 0 50" />
          <polygon className="blue4" points="100 0, 200 0, 100 25" />
          <polygon className="blue2" points="0 49, 100 24, 100 45, 0 70" />
          <polygon className="blue1" points="100 24, 200 0, 200 19, 100 45" />
          <polygon className="blue5" points="200 0, 270 0, 200 19" />
          <polygon className="gray" points="0 70, 270 0, 400 400, 0 400" />
        </svg>
        <svg className="filler">
          <rect className="gray" width="100%" height="100%"></rect>
        </svg> */}
        <div className="image flex" style={{ backgroundImage: `url(${this.props.content.imageUrl})` }}>
          <div className="code-links">
            <button className="button github">source code</button>
            <button className="button visit-project">visit project</button>
          </div>
        </div>
        <div className="content flex">
          <header>
            <button className="button back" onClick={() => { window.history.back() }}>Back</button>
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