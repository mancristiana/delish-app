import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import { COLORS } from './../../utils';
import ModalActions from './ModalActions';

class BaseModal extends Component {
  state = {
    isOpen: true
  };

  onClose() {
    this.setState({
      isOpen: false
    });
    this.props.onClose();
  }

  onConfirm() {
    this.setState({
      isOpen: false
    });
    this.props.onClose();
  }

  render() {
    return (
      <Modal isOpen={this.state.isOpen}>
        <ModalHeader toggle={() => this.onClose()}>
          {this.props.title}
        </ModalHeader>
        <ModalBody>{this.props.content}</ModalBody>
        <ModalFooter>
          <ModalActions {...this.props} />
        </ModalFooter>
      </Modal>
    );
  }
}

export default BaseModal;
