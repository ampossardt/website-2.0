import React from 'react';
import Photo from './photo';

class Photos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container photos flex">
        { 
          this.props.content.photos.map((photo, index) => 
            <Photo key={index} delay={ index * 150 } url={photo} /> )
        }
      </div>
    )
  } 
}

export default Photos;