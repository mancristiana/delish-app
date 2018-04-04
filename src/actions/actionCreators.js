// INGREDIENTS
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
