import React, { Component } from 'react';
import FieldInput from '../components/FieldInput';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      review: {
        description: '',
        value: ''
      },
      isEdit: false
    }

    this.onChange = this.onChange.bind(this);
    this.persistOrUpdateReview = this.persistOrUpdateReview.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validateDescriptionSelection = this.validateDescriptionSelection.bind(this);
  }

  componentDidMount() {
    if (window.location.pathname.includes("reviews")) {
      let pathname = window.location.pathname.split('/');
      let productId = pathname[3];
      let reviewId = pathname[pathname.length - 1];

      fetch(`/api/v1/products/${productId}/reviews/${reviewId}/edit`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(res => res.json())
        .then(body => {
          let review = {};
          review['description'] = body.description;
          review['value'] = body.value;
          this.setState({
            review,
            isEdit: true
          })
        })
    }
  }

  onChange(event) {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    let review = this.state.review;
    review[fieldName] = fieldValue
    this.setState({ review })
  }

  persistOrUpdateReview(event) {
    const { review, isEdit } = this.state;
    event.preventDefault();

    if (!isEdit) {
      let pathname = window.location.pathname.split('/');
      let productId = pathname[pathname.length - 1];
      fetch(`/api/v1/reviews/${productId}`, {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(review)
      })
      this.clearForm(event);
      document.location.replace(`/products/show/${productId}`)
    } else {
      let pathname = window.location.pathname.split('/');
      let productId = pathname[3];
      let reviewId = pathname[pathname.length - 1];

      fetch(`/api/v1/edit/product/${productId}/review/${reviewId}`, {
        method: 'PUT',
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(review)
      })
    }

  }

  validateDescriptionSelection(selection) {
    const { errors } = this.state;

    if (selection.trim() === '') {
      let newError = { descriptionSelected: 'You must enter text for the review' }
      this.setState({ errors: Object.assign({}, errors, newError) })
      return false;
    } else {
      let errorState = errors;
      delete errorState.descriptionSelected;
      this.setState({ errors: errorState })
      return true;
    }
  }

  clearForm(event) {
    event.preventDefault();
    this.setState({
      errors: {},
      review: {
        description: '',
        value: ''
      }
    })
  }

  render() {
    const { errors } = this.state;
    const { description, value } = this.state.review;

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
        <h1>Add a New Review</h1>
        <form onSubmit={this.persistOrUpdateReview}>
          {errorDiv}
          <FieldInput
            label="Description: "
            name="description"
            type="text"
            onChange={this.onChange}
            value={description}
          />
          <FieldInput
            label="Rating Value: "
            name="value"
            type="number"
            min="0"
            max="5"
            onChange={this.onChange}
            value={value}
          />
          <button type='submit' className="btn btn-primary btn-lg btn-block">Add review</button>
        </form>
      </div>
    )
  }
}

export default ReviewForm;