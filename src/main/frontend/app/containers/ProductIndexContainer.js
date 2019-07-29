import React, { Component } from 'react';
import '../css/products.scss';
import RatingTile from '../components/RatingTile';

class ProductIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }

    this.grabProductReviews = this.grabProductReviews.bind(this); 
  }

  componentDidMount() {
    fetch('/api/v1/products')
      .then(response => {
        return response.json()
      })
      .then(products => {
        this.setState({ products })
      })
  }

  grabProductReviews(product) {
    return fetch(`/api/v1/reviews/sum/${product.id}`)
      .then(res => res.json())
      .then(sum => sum)

    // will return aggregate rating
  }

  render() {
    const { products } = this.state;
    let productList = products.map(product => {
      
      this.grabProductReviews(product)
        .then(sum => console.log(sum))
      
    return (
        <figure className="col-md-4" key={product.id}>
          <h2> <a href={`/products/show/${product.id}`}> {product.name} </a> </h2>
          <h3>$ {product.price}</h3>
          <a href={product.imageUrl}>
            <img className="img-fluid" src={product.imageUrl} alt={product.name} />
          </a>
        </figure>
      )
    })

    return (
      <div>
        <h1>All the Swaggest Programming Products</h1>
        <hr />
        <div className="row">
          {productList}
        </div>
      </div>
    )
  }
}

export default ProductIndexContainer;