import React, { memo } from 'react';
import PropTypes from 'prop-types'
 import LaddaButton from 'react-ladda';

const LoaderContent = memo(props => {
  const filteredProps = {...props};
  delete filteredProps.imageContent;
  delete filteredProps.className;

  return <LaddaButton
    data-spinner-size={30}
    data-spinner-lines={40}
    className={`${props.className}${props.imageContent ? ' ladda-image' : ''}`}
    {...filteredProps}
  >{props.children}</LaddaButton>
});

LoaderContent.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  imageContent: PropTypes.bool,
};

LoaderContent.defaultProps = {
  className: '',
  disabled: false,
  children: null,
  imageContent: false,
};

export default LoaderContent;