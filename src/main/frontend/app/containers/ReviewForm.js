import React, { Component } from 'react';
import FieldInput from '../components/FieldInput';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      review: {
        description: '',
      }
    }

    this.onChange = this.onChange.bind(this);
    this.persistReview = this.persistReview.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.validateDescriptionSelection = this.validateDescriptionSelection.bind(this);
  }

  onChange(event) {
    fieldName = event.target.name;
    fieldValue = event.target.value;
    this.setState({
      [review.fieldName]: fieldValue
    })
  }

  persistReview(event) {
    event.preventDefault();
    console.log('hi')

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
      }
    })
  }

  render() {
    const { description } = this.state;

    let errorDiv;
    let errorItems;

    if (Object.keys(errors).length > 0) {
      errorItems = Object.values(errors).map(error => {
        return (<li key={error}>{error}</li>)
      })
      errorDiv = <div>{errorItems}</div>
    }

    return (
      <form onSubmit={this.persistProduct}>
        {errorDiv}
        <FieldInput
          label="Description: "
          name="description"
          type="text"
          onChange={this.onChange}
          value={description}
        />
        <div>
          <input type='submit' value='Add review' />
        </div>
      </form>
    )
  }
}

export default ReviewForm;