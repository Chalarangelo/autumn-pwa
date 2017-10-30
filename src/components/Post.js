import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div style={{border: "1px solid #ddd", padding: "8px", display: "block"}} key={this.props.post.id}>
        <h3 id={this.props.post.id}>{this.props.post.title}</h3>
        <img src={this.props.post['image-url']} style={{width: "100%", height: "auto"}}/>
        <p>{this.props.post.content}</p>
      </div>
    )
  }
}

export default Post;
