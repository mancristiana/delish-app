import React, { Component } from 'react';
import { Button, Input, Fa } from 'mdbreact';
import FileUpload from './../fileUpload/FileUpload';

class IngredientModal extends Component {
  constructor(props) {
    super(props);
    this.state = { name: this.props.name || '', image: this.props.image || '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Input
          name="name"
          label="Ingredient Name"
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <FileUpload />
      </div>
    );
  }
}

export default IngredientModal;
