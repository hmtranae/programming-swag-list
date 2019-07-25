import React, { Component } from 'react';
import '../css/showpage.scss'

class ProductIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }

    this.addNewProduct = this.addNewProduct.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/products')
      .then(response => {
        return response.json()
      })
      .then(products => {
        this.setState({ products: products.content })
      })
  }

  render() {
    let productList = this.state.products.map(product => {
      return (
        <div>
          <li>Product Name: {product.name},  Price: {product.price},
               url: {product.url}, Image_Url: {product.imageUrl}, Description: {product.description}</li>
        </div>
      )
    })

    return (
      <div>
        <h1>The Swaggest Product List of products!:</h1>
        <ul>
          {productList}
        </ul>
      </div>
    )
  }
}

export default ProductIndexContainer;