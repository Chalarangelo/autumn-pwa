import React, { Component } from 'preact-compat';
import './App.css';

class Post extends Component {
  render() {
    return (
      <div className="card fluid">
        <div className="section">
          <h3 id={this.props.post.id}>{this.props.post.title}<small>by {this.props.post.author} on {new Date(this.props.post['date-added']).toDateString()}</small></h3>
        </div>
          <picture>
            <source media="(min-width: 768px)" srcset={this.props.post['image-url']} />
            <img className="section media" src={this.props.post['image-url'].replace("&w=1280&q=80", "&w=768&q=60")} alt={this.props.post.title}/>
          </picture>
        <p className="section">{this.props.post.content}</p>
      </div>
    )
  }
}

export default Post;
