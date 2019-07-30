import React from 'react';

const RatingTile = (props) => {
  const { value, description } = props;

  return (
    <div>
      <p>Description: {description}</p>
      <p>Value: {value}</p>
      <button type="button" className="btn btn-danger btn-xs">
        <span className="glyphicon glyphicon-edit" /> Delete Review
      </button>
      <button type="button" className="btn btn-default btn-xs">
        <span className="glyphicon glyphicon-edit" /> Edit Review
      </button>
      <hr />
    </div>
  )
}

export default RatingTile;