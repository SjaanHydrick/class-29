/* eslint-disable no-undef */
/* eslint-disable max-len */
global.fetch = require('node-fetch');
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Resty from './Resty';

describe('CRUD routes', () => {
  it('gets all posts', () => {
    render(<Resty />);

    const display = screen.getByTestId('display');
    const url = screen.getByTestId('url');
    const method = screen.getByLabelText('GET');
    const submit = screen.getByText('Submit');
    fireEvent.change(url, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts'
      }
    });

    fireEvent.click(method);
    fireEvent.submit(submit);

    return waitFor(() => {
      expect(display).toHaveTextContent('"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"');
    });
  });
});
