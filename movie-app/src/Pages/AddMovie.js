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
    return(
      <div className ="content">
        <h3>{title} </h3>
        Year: {year} <br/>
        Lead: {actor} <br/>
        Franchise: {franchise} <br/>
        Director: {director} <br/>
      </div>
    )
  }
}
export default AddMovie;
