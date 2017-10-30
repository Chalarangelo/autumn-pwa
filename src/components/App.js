import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { viewAll, searchPost, fetchPosts } from '../actions';
import './App.css';
import Post from './Post';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchQuery: ''
    }
  }

  viewAll() {
    this.props.viewAll();
  }

  searchPost(query){
    this.props.searchPost(query);
  }

  fetchPosts(){
    this.props.fetchPosts();
  }

  componentDidMount(){
    let _this = this;
    fetch("https://jsonbin.io/b/59f721644ef213575c9f6531")
    .then( response => response.json())
    .then( data => { _this.setState({posts: data})});
  }

  // {this.props.posts.map(post => {return (<p>{post.id}</p>)})}
  render() {
    console.log(this.state);
    let posts ='';
    if(this.state.posts)
      posts = this.state.posts.map(post => {return <Post post={post} />;});
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {posts}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    posts: state
  }
}

// export default App;
export default connect(mapStateToProps, { viewAll, searchPost, fetchPosts })(App);
