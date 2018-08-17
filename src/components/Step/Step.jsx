import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Connection from '../Connection';
import Dot from '../Dot';

import './Step.css';

export const Step = ({title, isFirst, isActive, isClickable, onClick, step}) => {
  const stepDescriptionClassName = classNames('step__description', {
    'step__description--is-active': isActive,
  });

  return (
    <div className="step">
      { !isFirst && <Connection isActive={isActive}/> }
      <div className={stepDescriptionClassName}>{title}</div>
      <Dot isActive={isActive} onClick={onClick} step={step} isClickable={isClickable} />
    </div>
  )
};

Step.propTypes = {
  isActive: PropTypes.bool,
  isFirst: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  step: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired,
};

Step.defaultProps = {
  isActive: false,
  isFirst: false,
};