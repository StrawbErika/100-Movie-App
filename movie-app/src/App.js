import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Movies from './Pages/Movies';
import Movie from './Pages/Movie';
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1> Movie Catalog App </h1>
        <Router>
          <div id = "content-container">
            <Route exact={true} path = "/" component = {Home}/>
            <Route exact={true} path = "/movies" component = {Movies}/>
            <Route exact={true} path = "/movie/:_id" component = {Movie}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
