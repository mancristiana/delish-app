import React, { Component } from 'react';
import { Card, CardBody, CardImage, CardTitle, Fa, Mask, View } from 'mdbreact';
import IngredientModal from './../../modals/IngredientModal';
import uuid from 'uuid/v1';
import './Ingredients.css';

class IngredientsItem extends Component {
  onDelete(item, deleteModalId, editModalId) {
    this.props.closeModal(editModalId);
    this.props.closeModal(deleteModalId);
    this.props.removeIngredient(item._id);
  }

  openDeleteConfirmation(item, editModalId) {
    const deleteModalId = uuid();
    this.props.openModal({
      id: deleteModalId,
      title: 'Delete ingredient',
      content: <p>{`Are you sure you wish to delete ${item.name}?`}</p>,
      onCancel: () => this.props.closeModal(deleteModalId),
      onDelete: () => this.onDelete(item, deleteModalId, editModalId)
    });
  }

  select(item) {
    const editModalId = uuid();
    this.props.openModal({
      id: editModalId,
      title: 'Edit ingredient',
      content: <IngredientModal ingredient={item} />,
      onCancel: () => this.props.closeModal(editModalId),
      onDelete: () => this.openDeleteConfirmation(item, editModalId),
      onSubmit: () => console.log('onSubmit')
    });
    console.log('CLIKR');
  }
  render() {
    const { item } = this.props;
    return (
      <Card className="ingredient-item">
        <View zoom onClick={() => this.select(item)}>
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
