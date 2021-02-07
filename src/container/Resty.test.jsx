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

  it('posts a new item', () => {
    render(<Resty />);
      
    const display = screen.getByTestId('display');
    const url = screen.getByTestId('url');
    const method = screen.getByLabelText('POST');
    const json = screen.getByPlaceholderText('POST/PUT Request...');
    const submit = screen.getByText('Submit');
    fireEvent.change(url, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts'
      }
    }); 
    fireEvent.change(json, {
      target: {
        value: '{"userId":2,"title":"asdf","body":"asdff"}'
      }
    });

    fireEvent.click(method);
    fireEvent.submit(submit);

    return waitFor(() => {
      expect(display).toHaveTextContent('"userId":2, "title":"asdf", "body":"asdff", "id":101');
    });
  });

  it('updates an item', () => {
    render(<Resty />);
      
    const display = screen.getByTestId('display');
    const url = screen.getByTestId('url');
    const method = screen.getByLabelText('PUT');
    const json = screen.getByPlaceholderText('POST/PUT Request...');
    const submit = screen.getByText('Submit');
    fireEvent.change(url, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts/1'
      }
    }); 
    fireEvent.change(json, {
      target: {
        value: '{"userId":2,"title":"asdf","body":"asdff"}'
      }
    });

    fireEvent.click(method);
    fireEvent.submit(submit);

    return waitFor(() => {
      expect(display).toHaveTextContent('"userId":2, "title":"asdf", "body":"asdff", "id":1');
    });
  });

  it('deletes an item', () => {
    render(<Resty />);
      
    const display = screen.getByTestId('display');
    const url = screen.getByTestId('url');
    const method = screen.getByLabelText('DELETE');
    const submit = screen.getByText('Submit');
    fireEvent.change(url, {
      target: {
        value: 'https://jsonplaceholder.typicode.com/posts/1'
      }
    }); 
   
    fireEvent.click(method);
    fireEvent.submit(submit);

    return waitFor(() => {
      expect(display).toHaveTextContent('{ }');
    });
  });
});
