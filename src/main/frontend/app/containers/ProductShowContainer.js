import React, { Component } from 'react';
import ProductShowComponent from '../components/ProductShowComponent';
import '../css/showpage.scss'

class ProductShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      reviews: []
    }
  }

  componentDidMount() {
    let pathnameArray = window.location.pathname.split('/')
    let productId = pathnameArray[pathnameArray.length - 1];

    Promise.all([fetch(`/api/v1/products/${productId}/show`), fetch(`/api/v1/reviews/${productId}`)])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()])
      })
      .then(([product, reviews]) => {
        this.setState({
          product,
          reviews
        })
      });
  }


  parseDescription(description) {
    return description.split('.');
  }

  render() {
    const { product, reviews } = this.state;
    if (product.description) {
      let descriptionArray = this.parseDescription(product.description);

      let descriptionList = descriptionArray.map(sentence => {
        return (
          <li key={sentence}>{sentence}</li>
        )
      })

      return (
        <ProductShowComponent
          id={product.id}
          name={product.name}
          price={product.price}
          description={descriptionList}
          url={product.url}
          image={product.imageUrl}
          reviews={reviews}
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