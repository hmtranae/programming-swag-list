import React, { Component } from 'react';
import '../css/products.scss';

class ProductIndexContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filtered: []
    }
  this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('/api/v1/products')
      .then(response => {
        return response.json()
      })
      .then(products => {
        this.setState({
        products: products,
        filtered: products });
      })
  }

  handleChange(e) {
      let currentList = [];
      let newList = [];
      if (e.target.value !== "") {
        currentList = this.state.filtered;
        newList = currentList.filter(item => {
          const lc = item.name.toLowerCase();
          debugger;
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
      const { filtered } = this.state;
      console.log(filtered)
      let productList = filtered.map(product => {
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
      <div>
         <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
       </div>
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