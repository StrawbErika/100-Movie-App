import React, { Component } from 'react';

class AddMovie extends Component{

  constructor(props){
    super(props)

    this.state = {
      _id: this.props.match.params._id,
      title: '',
      year: '',
      director: '',
      actor: '',
      franchise: ''
    }

    //populate the list
    //send a request to server

    //2 Send a GET request to the server
    fetch('http://localhost:3001/movie/find-by-id/'+this.state._id)
    .then((response) => {return response.json() })
    .then((body) => {
      this.setState({
        title: body.title,
        year: body.year,
        actor: body.actor,
        franchise: body.franchise,
        director: body.director  
      })
    })
  }

  render(){
    const {title, year, actor, franchise, director} = this.state;
      return (
        <div>
          <legend> Sign Up </legend>
          <div>
            <input
            label="Title"
            placeholder="Title"
            value={this.state.title}/>
          </div>
          <div>
            <input
            label="Actor"
            placeholder="Actor"
            value={this.state.actor}/>
          </div>
          <div>
            <input
            label="Year"
            placeholder="Year"
            value={this.state.year}/>
          </div>
          <div>
            <input
            label="Franchise"
            placeholder="Franchise"
            value={this.state.franchise}/>
          </div>
          <div>
            <input
            label="Director"
            placeholder="Director"
            value={this.state.director}/>
          </div>
        </div>
      );
  }
}
export default AddMovie;
