import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./style.scss";

class Modal extends Component {
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen && nextProps.isOpen !== this.props.isOpen) {
      document.body.style.overflow = "hidden";
    } else if (!nextProps.isOpen && nextProps.isOpen !== this.props.isOpen) {
      document.body.style.overflow = "auto";
    }
  }

  render() {
    const { isOpen, close, name } = this.props;
    return isOpen
      ? ReactDOM.createPortal(
        <div className="F-modal-wrapper">
          <div className={name !== "leftBar" ? "G-modal" : ""}>
            <i className="icon-ic_close" onClick={close}></i>
            {this.props.children}
          </div>
        </div>,
        document.getElementById("modal")
      ) : null;
  }
}

export default Modal;
