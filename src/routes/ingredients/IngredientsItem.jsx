import React, { Component } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  Fa,
  Mask,
  View,
  Zoom
} from 'mdbreact';
import './Ingredients.css';

class IngredientsItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <Card className="ingredient-item">
        <View zoom>
          <CardImage className="img-fluid" src={item.image} />
          <Mask className="flex-center ingredient-overlay">
            <p className="ingredient-actions white-text">
              <Fa icon="pencil" />
              <Fa icon="trash" />
            </p>
          </Mask>
        </View>
        <CardBody>
          <CardTitle>{item.name}</CardTitle>
        </CardBody>
      </Card>
    );
  }
}

export default IngredientsItem;
