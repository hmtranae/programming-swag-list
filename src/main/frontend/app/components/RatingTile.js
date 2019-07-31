import React from 'react';

const handleDeleteReview = (e) => {
  let reviewId = e.target.id;
  fetch(`/api/v1/reviews/${reviewId}`, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
  })
//  document.location.replace('/reviews')
};

const RatingTile = (props) => {
  const { id, value, description } = props;

  return (
    <div>
      <p>Description: {description}</p>
      <p>Value: {value}</p>
      <button id={id} onClick={handleDeleteReview} type="button" className="btn btn-danger btn-xs">
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