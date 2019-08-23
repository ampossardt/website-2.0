import React from 'react';
import Photo from './photo';
import PhotoDetail from './preview';

class Photos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePhoto: null
    };
  }

  handlePhotoClick = (photo) => {
    this.setState({ activePhoto: photo });
  }

  handlePhotoClose = () => {
    this.setState({ activePhoto: null });
  }

  render() {
    return (
      <div className="container photos flex">
        { 
          this.props.content.map((photo, index) => 
            <Photo 
              key={index} 
              delay={ index * 60 } 
              url={photo}
              onClick={ () => this.handlePhotoClick(photo) } /> 
          )
        }
        <PhotoDetail url={this.state.activePhoto} onClose={ () => this.handlePhotoClose() } />
      </div>
    )
  } 
}

export default Photos;