import React from 'react';

const RatingTile = (props) => {
  const { id, value, description } = props;
  let pathname = window.location.pathname;

  return (
    <div>
      <p>Description: {description}</p>
      <p>Rating: {value}</p>
      <button type="button" className="btn btn-danger btn-sm">
        Delete Review
      </button>
      <a href={`${pathname}/reviews/${id}`} className="btn btn-secondary btn-sm">
        Edit Review
      </a>
      <hr />
    </div>
  )
}

export default RatingTile;