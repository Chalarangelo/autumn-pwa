import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="card fluid">
        <div className="section">
          <h3 id={this.props.post.id}>{this.props.post.title}<small>by {this.props.post.author} on {new Date(this.props.post['date-added']).toDateString()}</small></h3>
        </div>
        <img className="section media" src={this.props.post['image-url']}/>
        <p className="section">{this.props.post.content}</p>
      </div>
    )
  }
}

export default Post;
