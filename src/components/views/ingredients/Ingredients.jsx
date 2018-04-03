import React, { Component } from 'react';
import IngredientsList from './IngredientsList';
import './Ingredients.css';

class Ingredients extends Component {
  render() {
    const list = [
      {
        _id: '5abe672d87200c146c12de37',
        name: 'Tomato',
        image:
          'https://s3.eu-central-1.amazonaws.com/delish-app-uploads/ingredients/tomato.jpg'
      },
      {
        _id: '5abf796b606df6000468c761',
        name: 'Olive Oil',
        image:
          'https://s3.eu-central-1.amazonaws.com/delish-app-uploads/ingredients/olive-oil.jpg'
      }
    ];

    return (
      <div className="container-fluid">
        <IngredientsList list={list} />
      </div>
    );
  }
}

export default Ingredients;
