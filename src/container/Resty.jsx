/* eslint-disable max-len */
import React, { Component } from 'react';
import Display from '../components/Display/Display';
import {
  fetchPost,
  createPost,
  updatePost,
  deletePost
} from '../services/fetches';
import Header from '../components/Header/Header';

export default class Resty extends Component {
    state = {
      url: '',
      method: '',
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
            .replace(/,/g, ', \n')
            .replace(/{/g, '{ \n')
            .replace(/}/g, '\n }')
        });
      }

      if(method === 'post') {
        const received = await createPost(url, JSON.parse(json));
        await this.setState({
          received: JSON.stringify(received)
            .replace(/,/g, ', \n')
            .replace(/{/g, '{ \n')
            .replace(/}/g, '\n }')
        });
      }
  
      if(method === 'put') {
        const received = await updatePost(url, JSON.parse(json));
        await this.setState({
          received: JSON.stringify(received)
            .replace(/,/g, ', \n')
            .replace(/{/g, '{ \n')
            .replace(/}/g, '\n }')
        });
      }

      if(method === 'delete') {
        const received = await deletePost(url);
        await this.setState({
          received: JSON.stringify(received)
            .replace(/,/g, ', \n')
            .replace(/{/g, '{ \n')
            .replace(/}/g, '\n }')
        });
      }
    }

    render() {
      const { received } = this.state;
      return (
        <div>
          <Header />
          <Display
            received={received}
            handleClick={this.handleClick}
            handleInput={this.handleInput}
          />
        </div>
      );
    }
}
