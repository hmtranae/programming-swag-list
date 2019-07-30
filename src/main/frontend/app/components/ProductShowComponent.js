import React from 'react';
import ReviewForm from '../containers/ReviewForm';
import RatingTile from "./RatingTile";
import '../css/showpage.scss';

const deleteProduct = () => {
  const pathname = window.location.pathname.split('/');
  const productId = pathname[pathname.length - 1];
  fetch(`/api/v1/products/${productId}`, {
    method: "DELETE",
    headers: { 'Content-Type': 'application/json' },
  })
  document.location.replace('/products')
};

const ProductShowComponent = (props) => {
  const { image, name, price, url, description, reviews } = props;

  let reviewList = reviews.map(review => {
    return (
      <RatingTile
        key={review.id}
        value={review.value}
        description={review.description}
      />
    )
  })

  return (
    <div className="flex-container">
      <div><img src={image} alt={name} /></div>
      <div>
        <div className="product-name">
          <button onClick={deleteProduct} type="button" className="btn btn-danger btn-sm float-edit">
            <span className="glyphicon glyphicon-edit" /> Delete Product
          </button>
          <button type="button" className="btn btn-default btn-sm float-edit">
            <span className="glyphicon glyphicon-edit" /> Edit Product
          </button>
          <h2>{name}</h2>
        </div>
        <h2>Price: ${price} & Free Shippping</h2>
        <p><a href={url}>Visit Product Page</a></p>
        <div className="description">
          <p className="paragraph-spacing">Product Description:</p>
          <ul>
            {description}
          </ul>
          <hr />
          <h2>Ratings</h2>
          {reviewList}
          <ReviewForm />
        </div>
      </div>
    </div>
  )
}

export default ProductShowComponent;