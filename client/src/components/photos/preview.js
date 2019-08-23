import React from 'react';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: false
    }
  }

  handleClick = (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName === 'DIV') {
      this.handleClose();
    }
  }

  handleClose = () => {
    this.setState({ hide: true });

    setTimeout(() => {
      this.props.onClose();
      this.setState({ hide: false });
    }, 400);
  }

  render() {
    return(
      this.props.url ?
        <div className={`detail-overlay ${(this.state.hide || '') && 'hide'}`} onClick={ this.handleClick }>
          <div className="content flex vertical-align">
            <figure className="image">
              <img src={this.props.url} />
              <i className="far fa-times-circle" onClick={ this.handleClose } />
            </figure>
          </div>
        </div> : null
    );
  }
}

export default PhotoDetail;