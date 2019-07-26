import React from 'react';
import '../css/showpage.scss'

const ProductShowComponent = (props) => {
  return (
    <div className="flex-container">
      <div><img src={props.image} /></div>
      <div>
        <div className="product-name">
          <h2>{props.name}</h2>
        </div>
        <h2>Price: ${props.price} & Free Shippping</h2>
        <p><a href={props.url}>Visit Product Page</a></p>
        <div className="description">
          <p>Product Description: <br />{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductShowComponent;