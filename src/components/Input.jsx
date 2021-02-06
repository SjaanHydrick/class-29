import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ handleInput, handleClick }) => (
  <form onSubmit={handleClick}>
    <p>API URL</p>
    <input
      name="url"
      type="text"
      onChange={handleInput}
    />

    <span>GET</span>
    <input
      name="method"
      type="radio"
      value="get"
      select="true"
      onChange={handleInput}
    />

    <span>POST</span>
    <input
      name="method"
      type="radio"
      value="post"
      onChange={handleInput}
    />

    <span>PUT</span>
    <input
      name="method"
      type="radio"
      value="put"
      onChange={handleInput}
    />

    <span>DELETE</span>
    <input
      name="method"
      type="radio"
      value="delete"
      onChange={handleInput}
    />

    <input
      name="JSON"
      type="text"
      onChange={handleInput}
    />

    <button>Submit</button>
  </form>
);

Input.propTypes = {
  handleClick: PropTypes.func,
  handleInput: PropTypes.func
};

export default Input;
