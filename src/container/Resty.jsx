import React, { Component } from 'react';
import Display from '../components/Display';
import {
  fetchPost,
  createPost,
  updatePost,
  deletePost
} from '../services/fetches';

export default class Resty extends Component {
    state = {
      url: '',
      method: '',
      json: {},
      received: ''
    }

    handleInput = ({ target }) => {
      this.setState({
        [target.name]: target.value
      });
    }

    handleClick = async(e) => {
      e.preventDefault();

      const { url, method, json } = this.state;

      if(method === 'get') {
        const received = await fetchPost(url);
        await this.setState({
          received: JSON.stringify(received)
        });
      }

      if(method === 'post') {
        const received = await createPost(url, JSON.parse(json));
        await this.setState({
          received: JSON.stringify(received)
        });
      }

      if(method === 'put') {
        const received = await updatePost(url, JSON.parse(json));
        await this.setState({
          received: JSON.stringify(received)
        });
      }

      if(method === 'delete') {
        const received = await deletePost(url, JSON.parse(json));
        await this.setState({
          received: JSON.stringify(received)
        });
      }
    }

    render() {
      const { received } = this.state;
      return (
        <div>
          <Display
            received={received}
            handleClick={this.handleClick}
            handleInput={this.handleInput}
          />
        </div>
      );
    }
}
