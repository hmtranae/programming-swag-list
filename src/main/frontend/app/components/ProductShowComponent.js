import React from 'react';
import { browserHistory, Link } from 'react-router';

const ProductShowComponent = (props) => {
  return(
    <div className="product-show">
        <h2>{props.name}</h2>
        <h2>{props.price}</h2>
        <p>{props.description}</p>
        <h2>{props.url}</h2>
        <img src = "{props.imageUrl}"/>
    </div>
   )
 }

export default ProductShowComponent;