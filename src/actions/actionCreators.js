import { getIngredients, deleteIngredient } from './../data/ingredients';

// INGREDIENTS
export function fetchIngredients() {
  return dispatch => {
    dispatch({
      type: 'FETCH_INGREDIENTS_REQUESTED'
    });
    getIngredients().then(
      response => {
        return dispatch({
          type: 'FETCH_INGREDIENTS_SUCCEEDED',
          ingredients: response
        });
      },
      error => dispatch({ type: 'FETCH_INGREDIENTS_FAILED', error: error })
    );
  };
}

// add ingredient
export function addIngredient(ingredient) {
  return {
    type: 'ADD_INGREDIENT',
    ingredient
  };
}

// edit ingredient
export function editIngredient(ingredient) {
  return {
    type: 'EDIT_INGREDIENT',
    ingredient
  };
}

// remove ingredient
export function removeIngredient(id) {
  return dispatch => {
    dispatch({
      type: 'DELETE_INGREDIENT_REQUESTED',
      id
    });
    deleteIngredient(id).then(
      response => {
        return dispatch({
          type: 'DELETE_INGREDIENT_SUCCEEDED',
          response: response,
          id
        });
      },
      error => dispatch({ type: 'DELETE_INGREDIENT_FAILED', error: error })
    );
  };
}

// MODALS
export function openModal(modal) {
  return {
    type: 'OPEN_MODAL',
    modal
  };
}

export function closeModal(modalId) {
  return {
    type: 'CLOSE_MODAL',
    modalId
  };
}
