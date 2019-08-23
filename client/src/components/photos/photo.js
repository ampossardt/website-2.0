import React from 'react';

function Photo(props) {
  return(
    <div className="col fourth">
      <div className="card" onClick={props.onClick}>
        <img src={props.url} style={{
          animationDelay: `${props.delay / 1000}s`
        }} />
      </div>
    </div>
  )
}

export default Photo;