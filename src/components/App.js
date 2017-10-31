import React, { Component } from 'react';
import { connect } from 'react-redux';
import { viewAll, searchPost, updatePosts } from '../actions';
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

  updatePosts(posts){
    this.props.updatePosts(posts);
  }

  componentDidMount(){
    fetch("https://jsonbin.io/b/59f721644ef213575c9f6531")
    .then( response => response.json())
    .then( data => {
      let posts = {
        data: data,
        selected: []
      };
      this.updatePosts(posts);
    });
  }

  render() {
    let posts = '', postLinks = '';
    if(this.props.posts && this.props.posts.data){
      if (this.props.posts.selected.length){
        posts = this.props.posts.data.filter(post => {if (this.props.posts.selected.includes(post.id)) return true; return false;}).map(post => {return <Post post={post} key={"post_"+post.id}/>;});
        postLinks = this.props.posts.data.filter(post => {if (this.props.posts.selected.includes(post.id)) return true; return false;}).map(post => {return <a href={"#"+post.id} key={"post_link_"+post.id} className="button">{post.title}</a>})
      }
      else {
        posts = this.props.posts.data.map(post => {return <Post post={post} key={"post_"+post.id}/>;});
        postLinks = this.props.posts.data.map(post => {return <a href={"#"+post.id} key={"post_link_"+post.id} className="button">{post.title}</a>})
      }
    }
    return (
      <div className="App">
        <header className="sticky">
          <label htmlFor="drawer-checkbox" className="button drawer-toggle hidden-desktop"></label>
          <span href="#" className="logo" onClick={() => this.searchPost("autumn")}>Autumn Blog</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
          <input type="search" className="searchBox" onChange={event => {
            if(event.currentTarget.value) this.searchPost(event.currentTarget.value);
            else this.viewAll();
          }}/>
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
export default connect(mapStateToProps, { viewAll, searchPost, updatePosts })(App);
