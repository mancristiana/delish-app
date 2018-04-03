// add ingredient
export function addIngredient(ingredient) {
  return {
    type: 'ADD_INGREDIENT',
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
