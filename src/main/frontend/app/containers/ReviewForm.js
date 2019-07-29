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
      }
    }

    this.onChange = this.onChange.bind(this);
    this.persistReview = this.persistReview.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validateDescriptionSelection = this.validateDescriptionSelection.bind(this);
  }

  onChange(event) {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    let review = this.state.review;
    review[fieldName] = fieldValue
    this.setState({ review })
  }

  persistReview(event) {
    const { review } = this.state;
    let pathname = window.location.pathname.split('/');
    let productId = pathname[pathname.length - 1];

    event.preventDefault();

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
        <form onSubmit={this.persistReview}>
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