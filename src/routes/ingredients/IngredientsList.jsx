import React, { Component } from 'react';
import IngredientsItem from './IngredientsItem';
import './Ingredients.css';

class IngredientsList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="ingredients-list card-deck">
        {list.map((item, key) => {
          return <IngredientsItem key={key} item={item} />;
        })}
      </div>
    );
  }
}

export default IngredientsList;
