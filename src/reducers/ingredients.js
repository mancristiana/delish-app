function ingredients(state = [], action) {
  switch (action.type) {
    case 'FETCH_INGREDIENTS_SUCCEEDED':
      return action.ingredients;
    case 'DELETE_INGREDIENT_REQUESTED':
      return state.filter(ingredient => action.id !== ingredient._id);
    default:
      return state;
  }
}

export default ingredients;
