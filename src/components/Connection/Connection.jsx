import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './Connection.css';

export const Connection = ({ isActive }) => {
    const className = classNames('connection', {
        'connection--is-active': isActive,
    });

  return <div className={className} />;
};

Connection.propTypes = {
  isActive: PropTypes.bool,
};

Connection.defaultProps = {
  isActive: false,
};