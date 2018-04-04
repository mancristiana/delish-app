import React, { Component } from 'react';
import IngredientsItem from './IngredientsItem';
import './Ingredients.css';
import { getIngredientActionsFromProps } from './../../../utils';

class IngredientsList extends Component {
  render() {
    const actions = getIngredientActionsFromProps(this.props);
    return (
      <div className="ingredients-list card-deck">
        {this.props.ingredients.map((item, key) => {
          return <IngredientsItem key={key} item={item} {...actions} />;
        })}
      </div>
    );
  }
}

export default IngredientsList;
