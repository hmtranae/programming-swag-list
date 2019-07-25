import React, { Component } from 'react';

class ProductIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
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
          <li>
            <p>Product Name: {product.name} </p>
            <p>Price: {product.price} </p>
            <p>url: {product.url} </p>
            <p>Image_Url:<img src= {product.imageUrl}/> </p>
            <p>Description: {product.description} </p>
          </li>
        </div>
      )
    })

    return (
      <div>
        <h1>The Swaggest Product List!:</h1>
        <ul>
          {productList}
        </ul>
      </div>
    )
  }
}

export default ProductIndexContainer;