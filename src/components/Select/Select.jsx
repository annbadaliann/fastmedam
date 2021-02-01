import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import ClickOutside from "../ClickOutside/ClickOutside";

import "./Select.style.scss";

class Select extends PureComponent {
  state = {
    isOpen: false,
    value: null
  };

  static propTypes = {
    placeholderOpacity: PropTypes.bool,
    withoutChange: PropTypes.bool,
    placeholder: PropTypes.object,
    onNewClick: PropTypes.func,
    className: PropTypes.string,
    onChange: PropTypes.func,
    withNew: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.element
        ]),
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      })
    )
  };

  static defaultProps = {
    placeholder: "Choose",
    className: "",
    onChange: null,
    onNewClick: null,
    withNew: false,
    withoutChange: false,
    options: []
  };

  static getDerivedStateFromProps(nextProps, { value }) {
    if (nextProps.defaultValue && nextProps.options && !value) {
      let value = null;
      nextProps.options.map(item => {
        if (!value && item.value === nextProps.defaultValue) value = item;
        return true;
      });
      return value ? { value } : null;
    }

    return null;
  }

  toggleState = isOpen => this.setState({ isOpen });

  chooseItem = item => {
    const { onChange, withoutChange } = this.props;
    if (item.value === "//cr") {
      this.setState({ value: null, isOpen: false });
      onChange && onChange(null);
    } else {
      this.setState({ value: !withoutChange ? item : null, isOpen: false });
      onChange && onChange(item);
    }
  };

  render() {
    const {
      placeholderOpacity,
      withoutChange,
      placeholder,
      onNewClick,
      className,
      options,
      useValue,
      withNew,
      name
    } = this.props;
    const { isOpen } = this.state;
    const value = useValue
      ? options.find(item => item.value === this.props.value)
      : this.state.value;

    return (
      <ClickOutside
        className={className}
        onClickOutside={() => this.toggleState(false)}
      >
        <div className={`M-select ${isOpen ? "M-select-open" : ""}`}>
          <div
            className="M-select-header"
            onClick={() => this.toggleState(!isOpen)}
          >
            <span
              className={
                !value && placeholderOpacity ? "M-select-placeholder" : ""
              }
            >
              {value && !withoutChange ? value.name : placeholder}
            </span>
            <i className={isOpen ? "icon-ic_arrowup" : "icon-ic_arrowdown"} />
          </div>
          {isOpen && (
            <div className="M-select-body">
              <span className="name">{name}</span>
              <ul className="M-select-body-container">
                {options.map(
                  item =>
                    (value
                      ? value.value !== item.value
                      : item.value !== "//cr") && (
                      <li
                        key={item.value}
                        onClick={() => this.chooseItem(item)}
                      >
                        {item.name}
                      </li>
                    )
                )}
                {withNew && (
                  <li className="M-select-new-label" onClick={onNewClick}>
                    New
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </ClickOutside>
    );
  }
}

export default Select;
