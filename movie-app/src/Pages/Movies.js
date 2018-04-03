import React, { Component } from 'react';

class Movies extends Component{

  constructor(props){
    super(props)

    this.state = {
      movies: []
    }

    //populate the list
    //send a request to server

    //2 Send a GET request to the server
    fetch('http://localhost:3001/movie/find-all')
    .then((response) => {return response.json() })
    .then((body) => {
      this.setState({movies: body})
    })
  }

  render(){
    return(
      <div className ="content">
        <h2> Movies!</h2>
        <ol> 
          {
            this.state.movies.map((movie) =>{
              return <li key={movie._id}>{movie.title}</li>
            })
          }
        </ol>
      </div>
    )
  }
}
export default Movies;
