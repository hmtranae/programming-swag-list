import React from 'react';
import '../css/showpage.scss'

const ProductShowComponent = (props) => {
  return (
    <div className="flex-container">
      <div><img src={props.image} alt={props.name} /></div>
      <div>
        <div className="product-name">
          <h2>{props.name}</h2>
        </div>
        <h2>Price: ${props.price} & Free Shippping</h2>
        <p><a href={props.url}>Visit Product Page</a></p>
        <div className="description">
          <p className="paragraph-spacing">Product Description:</p>
          <ul>
            {props.description}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProductShowComponent;