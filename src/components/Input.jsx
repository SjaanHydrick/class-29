import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ handleInput, handleClick }) => (
  <form onSubmit={handleClick}>
    <p>API URL</p>
    <input
      name="URL"
      type="text"
      onChange={handleInput}
    />

    <p>GET</p>
    <input
      name="method"
      type="radio"
      value="get"
      select="true"
      onChange={handleInput}
    />

    <p>POST</p>
    <input
      name="method"
      type="radio"
      value="post"
      onChange={handleInput}
    />

    <p>PUT</p>
    <input
      name="method"
      type="radio"
      value="put"
      onChange={handleInput}
    />

    <p>DELETE</p>
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
