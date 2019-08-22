import React from 'react';

function Photo(props) {
  console.log(props.photo);
  return(
    <div className="col fourth">
      <div className="card">
        <img src={props.url} style={{
          animationDelay: `${props.delay / 1000}s`
        }} />
      </div>
    </div>
  )
}

export default Photo;