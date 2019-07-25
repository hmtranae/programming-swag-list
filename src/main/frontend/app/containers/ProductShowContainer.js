import React, { Component } from 'react';
import ProductShowComponent from '../components/ProductShowComponent';

class ProductShowContainer extends Component {
  constructor(props) {
    super(props);
        this.state = {
          product: {}
        }
   }

   componentDidMount() {
    let productId = this.props.params.id
      fetch(`/api/v1/products/${productId}/show`)
	      .then(response => response.json())
        .then(body => {
        this.setState({product: body})
	     })
	  }

  render() {
    return(
      <ProductShowComponent
	        id={this.state.product.id}
	        name={this.state.product.name}
	        price={this.state.product.price}
	        description={this.state.product.description}
	        url={this.state.product.url}
	        image={this.product.imageUrl}
	      />
	   )
	  }
	}

export default ProductShowContainer;