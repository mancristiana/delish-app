import React, { Component, Fragment } from 'react';
import { Button } from 'mdbreact';
import { COLORS, BUTTONS } from './../../utils';

class ModalActions extends Component {
  createButtonList(props) {
    let buttonList = [
      {
        text: BUTTONS.CANCEL,
        color: COLORS.LIGHT,
        action: props.onCancel
      },
      {
        text: BUTTONS.CONFIRM,
        color: COLORS.PRIMARY,
        action: props.onConfirm
      },
      {
        text: BUTTONS.SUBMIT,
        color: COLORS.PRIMARY,
        action: props.onSubmit
      },
      {
        text: BUTTONS.DELETE,
        color: COLORS.DANGER,
        action: props.onDelete
      }
    ];

    return buttonList.filter(button => !!button.action);
  }

  render() {
    const buttonList = this.createButtonList(this.props);
    return (
      <Fragment>
        {buttonList.map((button, key) => (
          <Button key={key} color={button.color} onClick={button.action}>
            {button.text}
          </Button>
        ))}
      </Fragment>
    );
  }
}

export default ModalActions;
