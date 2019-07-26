import React, { Component } from 'react';
import ProductShowComponent from '../components/ProductShowComponent';

import '../css/showpage.scss'

class ProductShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {}
    }
  }

  componentDidMount() {
    let pathnameArray = window.location.pathname.split('/')
    let productId = pathnameArray[pathnameArray.length - 1];
    fetch(`/api/v1/products/${productId}/show`)
      .then(response => response.json())
      .then(body => {
        this.setState({ product: body })
      })
  }

  render() {
    return (
      <ProductShowComponent
        id={this.state.product.id}
        name={this.state.product.name}
        price={this.state.product.price}
        description={this.state.product.description}
        url={this.state.product.url}
        image={this.state.product.imageUrl}
      />
    )
  }
}

export default ProductShowContainer;