import React, { Component } from 'react';
import '../css/products.scss';

class ProductIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filtered: [],
      aggregateReviews: []
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/products')
      .then(response => {
        return response.json()
      })
      .then(obj => {
        this.setState({
          products: obj.products,
          filtered: obj.products,
          aggregateReviews: obj.aggregateReviews
        });
      })
  }

  handleChange(e) {
    let currentList = [];
    let newList = [];
    if (e.target.value !== "") {
      currentList = this.state.filtered;
      newList = currentList.filter(item => {
        const lc = item.name.toLowerCase();
        const filter = e.target.value.toLowerCase();
        return lc.includes(filter);
      });
    } else {
      newList = this.state.products;
    }
    this.setState({
      filtered: newList
    });
  }

  render() {
    const { filtered, aggregateReviews } = this.state;
    if (filtered) {
      let productList = filtered.map((product, i) => {
        return (
          <figure className="col-md-4" key={product.id}>
            <h2> <a href={`/products/show/${product.id}`}> {product.name} </a> </h2>
            <h3>$ {product.price}</h3>
            <h3>Overall Rating: {aggregateReviews[i].toFixed(2)}</h3>
            <a href={product.imageUrl}>
              <img className="img-fluid" src={product.imageUrl} alt={product.name} />
            </a>
          </figure>
        )
      })

      return (
        <div>
          <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
          <h1>All the Swaggest Programming Products</h1>
          <hr />
          <div className="row">
            {productList}
          </div>
        </div>
      )
    } else {
      return (
        <div />
      )
    }
  }
}

export default ProductIndexContainer;