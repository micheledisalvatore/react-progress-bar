import React from 'react';
import PropTypes from 'prop-types';

import Step from '../Step';

import './Steps.css';

export const Steps = ({total, current, onClick}) => (
  <div className="steps">
    {[...(new Array(total))].map((e, i) => (
      <Step
        key={i}
        title={`Step ${i + 1}`}
        step={i + 1}
        isFirst={i === 0}
        isActive={i < current}
        onClick={onClick}
      />
    ))}
  </div>
);

Steps.propTypes = {
  total: PropTypes.oneOf([2,3,4,5]).isRequired,
  current: PropTypes.oneOf([1,2,3,4,5]).isRequired,
  onClick: PropTypes.func.isRequired,
};