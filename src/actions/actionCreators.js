import { getIngredients } from './../data/ingredients';

// INGREDIENTS
export function fetchIngredients() {
  return dispatch => {
    dispatch({
      type: 'FETCH_INGREDENTS_REQUESTED'
    });
    getIngredients().then(
      response => {
        return dispatch({
          type: 'FETCH_INGREDENTS_SUCCEEDED',
          ingredients: response
        });
      },
      error => dispatch({ type: 'FETCH_INGREDENTS_FAILED', error: error })
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
  return {
    type: 'REMOVE_INGREDIENT',
    id
  };
}

// MODALS
export function openModal(modal) {
  return {
    type: 'OPEN_MODAL_REQUESTED'
  };
}

export function closeModal(modalId) {
  return {
    type: 'CLOSE_MODAL',
    modalId
  };
}
