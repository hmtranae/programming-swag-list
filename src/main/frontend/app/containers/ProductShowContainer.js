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

  parseDescription(description) {
    return description.split('.');
  }

  render() {
    if (this.state.product.description) {
      let descriptionArray = this.parseDescription(this.state.product.description);

      let descriptionList = descriptionArray.map(sentence => {
        return (
          <li>{sentence}</li>
        )
      })

      return (
        <ProductShowComponent
          id={this.state.product.id}
          name={this.state.product.name}
          price={this.state.product.price}
          description={descriptionList}
          url={this.state.product.url}
          image={this.state.product.imageUrl}
        />
      )
    } else {
      return (
        <div />
      )
    }
  }
}

export default ProductShowContainer;