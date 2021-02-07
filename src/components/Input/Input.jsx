import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.css';

const Input = ({ handleInput, handleClick }) => (
  <form onSubmit={handleClick}>
    <span className={styles.api}>API URL:</span>
    <input
      data-testid="url"
      className={styles.apiInput}
      name="url"
      type="text"
      onChange={handleInput}
    />
    <br />
    <label>
      GET
      <input
        name="method"
        type="radio"
        value="get"
        onChange={handleInput}
      />
    </label>

    <label>
      POST
      <input
        name="method"
        type="radio"
        value="post"
        onChange={handleInput}
      />
    </label>

    <label>
      PUT
      <input
        name="method"
        type="radio"
        value="put"
        onChange={handleInput}
      />
    </label>

    <label>
      DELETE
      <input
        name="method"
        type="radio"
        value="delete"
        onChange={handleInput}
      />
    </label>

    <input
      className={styles.json}
      placeholder="POST/PUT Request..."
      name="json"
      type="text"
      onChange={handleInput}
    />
    <br />
    <button>Submit</button>
  </form>
);

Input.propTypes = {
  handleClick: PropTypes.func,
  handleInput: PropTypes.func
};

export default Input;
