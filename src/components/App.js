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
    let posts = '', postLinks = '';
    if(this.state.posts){
      posts = this.state.posts.map(post => {return <Post post={post} key={"post_"+post.id}/>;});
      postLinks = this.state.posts.map(post => {return <a href={"#"+post.id} key={"post_link_"+post.id} className="button">{post.title}</a>})
    }
    return (
      <div className="App">
        <header className="sticky">
          <label htmlFor="drawer-checkbox" className="button drawer-toggle hidden-desktop"></label>
          <span href="#" className="logo">Autumn Blog</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
          <input type="search" className="searchBox"/>
        </header>
        <div className="row">
          <input type="checkbox" id="drawer-checkbox" />
          <div className="drawer">
            <label htmlFor="drawer-checkbox" className="button drawer-toggle hide"></label>
            <div className="post-link-container">
              {postLinks}
            </div>
          </div>
          <div className="col-sm-12 col-md content">
            {posts}
          </div>
        </div>
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
