function modals(state = [], action) {
  switch (action.type) {
    case 'OPEN_MODAL':
      return state.concat(action.modal);
    case 'CLOSE_MODAL':
      return state.filter(item => item.id !== action.modalId);
    default:
      return state;
  }
}

export default modals;
