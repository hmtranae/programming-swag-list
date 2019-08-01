import React from 'react';

const deleteReview = (event) => {
  const reviewId = event.target.id;
  const pathname = window.location.pathname.split('/');
  const productId = pathname[pathname.length - 1];
  fetch(`/api/v1/reviews/${reviewId}/products/${productId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
  document.location.replace(`/products/show/${productId}`)
}

const RatingTile = (props) => {
  const { id, value, description } = props;
  let pathname = window.location.pathname;

  return (
    <div>
      <p><strong>Description: </strong></p>
      <p>{description}</p>
      <p><strong>Rating: </strong>{value}</p>
      <button id={id} onClick={deleteReview} type="button" className="btn btn-danger btn-sm">
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