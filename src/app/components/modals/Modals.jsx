import React, { Component, Fragment } from 'react';
import BasicModal from './BaseModal';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './../../utils';
import './Modals.css';

class Modals extends Component {
  onClose(id) {
    this.props.closeModal(id);
  }

  render() {
    return (
      <Fragment>
        {this.props.modals.map((modal, key) => (
          <BasicModal
            {...modal}
            key={key}
            onClose={() => {
              this.onClose(modal.id);
            }}
          />
        ))}
      </Fragment>
    );
  }
}

const ModalsContainer = connect(function mapStateToProps(state) {
  return {
    modals: state.modals
  };
}, mapDispatchToProps)(Modals);

export default ModalsContainer;
