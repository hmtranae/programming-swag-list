import React, { Component } from 'react';
import '../css/showpage.scss'

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

  parseDescription(description) {
    return description.split('.');
  }

  render() {
    let productList = this.state.products.map(product => {
      let descriptionArray = this.parseDescription(product.description);

      let descriptionList = descriptionArray.map(sentence => {
        return (
          <li>{sentence}</li>
        )
      })

      return (
        <div>
          <li>
            <p>Product Name: {product.name} </p>
            <p>Price: {product.price} </p>
            <p>url: {product.url} </p>
            <p>Image_Url:<img src={product.imageUrl} /> </p>
            <p>Description: {descriptionList} </p>
          </li>
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