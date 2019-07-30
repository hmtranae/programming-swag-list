import React from 'react';

const RatingTile = (props) => {
  const { value, description } = props;

  return (
    <div>
      <p>Description: {description}</p>
      <p>Value: {value}</p>
      <hr />
    </div>
  )
}

export default RatingTile;