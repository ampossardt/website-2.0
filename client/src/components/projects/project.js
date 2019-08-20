import React from 'react';

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="col half">
        <div className={ `project ${(!this.props.isDetailActive || '') && 'show'}` } 
          style={{
            animationDelay: `${this.props.delay / 1000}s`, 
            transitionDelay: `${this.props.delay / 1000}s` 
          }}>
          <span className="background-color"></span>
          <span className="background-image" style={ { backgroundImage: `url(${this.props.data.imageUrl})` } }></span>
          <div className="content flex vertical-align">
            <div className="text">
              <h2>{ this.props.data.title }</h2><br/>
              <p>{ this.props.data.summary }</p>
            </div>
            
            <div className="btn-container" 
              onClick={ () => this.props.onProjectActivated() }>
              <i className="fa fa-chevron-right"></i>
              <span className="line bottom"></span>
              <span className="line right"></span>
              <span className="line top"></span>
              <span className="line left"></span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;