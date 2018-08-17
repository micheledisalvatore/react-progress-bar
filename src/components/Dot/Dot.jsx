import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Dot.css';

export const Dot = ({isActive, isClickable, onClick, step}) => {
  const dotClassName = classNames('dot__image', {
    'dot__image--is-active': isActive,
  });

  const handleClick = e => {
    e.preventDefault();

    onClick(step);
  };

  return <button className="dot" onClick={handleClick} disabled={!isClickable}>
    <svg className={dotClassName} viewBox="0 0 32 32"/>
  </button>
};

Dot.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  step: PropTypes.oneOf([1,2,3,4,5]).isRequired,
};

Dot.defaultProps = {
  isActive: false,
};
