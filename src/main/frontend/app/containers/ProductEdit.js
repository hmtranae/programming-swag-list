import React, { Component } from 'react';
import FieldInput from '../components/FieldInput';
import "../css/showpage.scss";

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      product: {
        name: '',
        price: '',
        description: '',
        url: '',
        imageUrl: ''
      }
    }

    this.onChange = this.onChange.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validateNameSelection = this.validateNameSelection.bind(this);
    this.validatePriceSelection = this.validatePriceSelection.bind(this);
    this.validateDescriptionSelection = this.validateDescriptionSelection.bind(this);
    this.validateUrlSelection = this.validateUrlSelection.bind(this);
    this.validateImageUrl = this.validateImageUrl.bind(this);
  }

  componentDidMount() {
    let pathnameArray = window.location.pathname.split('/')
    let productId = pathnameArray[pathnameArray.length - 1];
    fetch(`/api/v1/edit/${productId}`)
      .then(response => response.json())
      .then(body => {
        let product = {};
        product['name'] = body.name;
        product['price'] = body.price;
        product['description'] = body.description;
        product['url'] = body.url;
        product['imageUrl'] = body.imageUrl;
        this.setState({ product })
      })
  }

  onChange(event) {
    const { product } = this.state;
    product[event.target.name] = event.target.value;
    this.setState({ product })
  }

  updateProduct(event) {
    const { name, price, description, url, imageUrl } = this.state.product;
    const { product } = this.state;
    event.preventDefault();
    this.clearForm(event);

    if (this.validateNameSelection(name) &&
      this.validatePriceSelection(price) &&
      this.validateDescriptionSelection(description) &&
      this.validateUrlSelection(url) &&
      this.validateImageUrl(imageUrl)) {
        let pathnameArray = window.location.pathname.split('/')
        let productId = pathnameArray[pathnameArray.length - 1];    
      fetch(`/api/v1/edit/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      this.clearForm(event);
    }
  }

  validateNameSelection(selection) {
    const { errors } = this.state;

    if (selection.trim() === '') {
      let newError = { nameSelected: 'You must enter a name for the product' }
      this.setState({ errors: Object.assign({}, errors, newError) })
      return false;
    } else {
      let errorState = errors;
      delete errorState.nameSelected;
      this.setState({ errors: errorState })
      return true;
    }
  }

  validatePriceSelection(selection) {
    const { errors } = this.state;

    if (selection.trim() === '') {
      let newError = { priceSelected: 'You must enter a price for the product' }
      this.setState({ errors: Object.assign({}, errors, newError) })
      return false;
    } else {
      let errorState = errors;
      delete errorState.priceSelected;
      this.setState({ errors: errorState })
      return true;
    }
  }

  validateDescriptionSelection(selection) {
    const { errors } = this.state;

    if (selection.trim() === '') {
      let newError = { descriptionSelected: 'You must enter a description for the product' }
      this.setState({ errors: Object.assign({}, errors, newError) })
      return false;
    } else {
      let errorState = errors;
      delete errorState.descriptionSelected;
      this.setState({ errors: errorState })
      return true;
    }
  }

  validateUrlSelection(selection) {
    const { errors } = this.state;

    if (selection.trim() === '') {
      let newError = { urlSelected: 'You must enter a url for the product' }
      this.setState({ errors: Object.assign({}, errors, newError) })
      return false;
    } else {
      let errorState = errors;
      delete errorState.urlSelected;
      this.setState({ errors: errorState })
      return true;
    }
  }

  validateImageUrl(selection) {
    const { errors } = this.state;

    if (selection.trim() === '') {
      let newError = { imageUrlSelected: 'You must enter a image url for the product' }
      this.setState({ errors: Object.assign({}, errors, newError) })
      return false;
    } else {
      let errorState = errors;
      delete errorState.imageUrlSelected;
      this.setState({ errors: errorState })
      return true;
    }
  }

  clearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      product: {
        name: '',
        price: '',
        description: '',
        url: '',
        imageUrl: ''
      }
    })
  }

  render() {
    const { errors } = this.state;
    const { name, price, description, url, imageUrl } = this.state.product;

    let errorDiv;
    let errorItems;

    if (Object.keys(errors).length > 0) {
      errorItems = Object.values(errors).map(error => {
        return (<li key={error}>{error}</li>)
      })
      errorDiv = <div>{errorItems}</div>
    }

    return (
      <div className="container">
        <h1>Edit Product</h1>
        <form onSubmit={this.updateProduct}>
          {errorDiv}
          <FieldInput
            label="Name: "
            name="name"
            type="text"
            onChange={this.onChange}
            value={name}
          />
          <FieldInput
            label="Price: "
            name="price"
            type="number"
            onChange={this.onChange}
            value={price}
          />
          <FieldInput
            label="Description: "
            name="description"
            type="text"
            onChange={this.onChange}
            value={description}
          />
          <FieldInput
            label="Product Url: "
            name="url"
            type="text"
            onChange={this.onChange}
            value={url}
          />
          <FieldInput
            label="Image Url: "
            name="imageUrl"
            type="text"
            onChange={this.onChange}
            value={imageUrl}
          />
          <button type='submit' className="btn btn-primary btn-lg btn-block">Update product</button>
        </form>
      </div>
    )
  }
}

export default ProductEdit;