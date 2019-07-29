import React from 'react';
import '../css/showpage.scss';
import ReviewForm from '../containers/ReviewForm';

const ProductShowComponent = (props) => {
  const { image, name, price, url, description } = props;

  return (
    <div className="flex-container">
      <div><img src={image} alt={name} /></div>
      <div>
        <div className="product-name">
          <button type="button" className="btn btn-danger btn-sm float-edit">
            <span className="glyphicon glyphicon-edit" /> Delete
          </button>
          <button type="button" className="btn btn-default btn-sm float-edit">
            <span className="glyphicon glyphicon-edit" /> Edit
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
          <ReviewForm />
        </div>
      </div>
    </div>
  )
}

export default ProductShowComponent;