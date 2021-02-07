import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './Display.css';

const Display = ({ received, handleInput, handleClick }) => (
  <div>
    <Input
      handleInput={handleInput}
      handleClick={handleClick}
    />
    <p 
      data-testid="display"
      className={styles.received}>{received}</p>
  </div>
);

Display.propTypes = {
  received: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Display;
