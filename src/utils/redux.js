import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../actions/actionCreators';

export function getIngredientActionsFromProps(props) {
  return {
    addIngredient: props.addIngredient,
    editIngredient: props.editIngredient,
    removeIngredient: props.removeIngredient
  };
}
export function mapStateToProps(state) {
  return {
    ingredients: state.ingredients,
    posts: state.posts,
    modals: state.modals
  };
}
export function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export function mapStoreToProps(component) {
  return connect(mapStateToProps, mapDispatchToProps)(component);
}
