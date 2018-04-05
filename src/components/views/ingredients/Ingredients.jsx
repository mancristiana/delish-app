import React, { Component } from 'react';
import { Button } from 'mdbreact';
import uuid from 'uuid/v1';
import { mapStoreToProps } from './../../../utils';
import IngredientsList from './IngredientsList';
import IngredientModal from './../../modals/IngredientModal';
import './Ingredients.css';

class Ingredients extends Component {
  openAddModal() {
    this.props.openModal({
      id: uuid(),
      title: 'Add new ingredient',
      content: <IngredientModal ingredient={null} />,
      onSubmit: () => console.log('onSubmit')
    });
  }

  componentDidMount() {
    this.props.fetchIngredients();
  }

  render() {
    return (
      <div className="container-fluid">
        <Button
          className="ingredients-add"
          color="orange"
          onClick={this.openAddModal.bind(this)}>
          Add
        </Button>
        <IngredientsList {...this.props} />
      </div>
    );
  }
}

const IngredientsContainer = mapStoreToProps(Ingredients);

export default IngredientsContainer;
