import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import { viewAll, searchPost } from '../actions';
import './App.css';

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

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
export default connect(mapStateToProps, { viewAll, searchPost })(App);
