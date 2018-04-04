function ingredients(state = [], action) {
  switch (action.type) {
    case 'FETCH_INGREDENTS_SUCCEEDED':
      return action.ingredients;

      break;
    default:
      return state;
  }
}

export default ingredients;
