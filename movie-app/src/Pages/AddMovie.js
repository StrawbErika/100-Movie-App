import React, { Component } from 'react';

class AddMovie extends Component{

  constructor(){
    super()

    this.state = {
      title: '',
      year: '',
      director: '',
      actor: '',
      franchise: ''
    }

    //2 Send a GET request to the server
    fetch('http://localhost:3001/movies/')
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


  handleTitle = (e) => {
    this.setState({
      title: e.target.value})
  }

  handleYear = (e) => {
    this.setState({
      year: e.target.value})
  }

  handleDirector = (e) => {
    this.setState({
      director: e.target.value})
  }

  handleActor = (e) => {
    this.setState({
      actor: e.target.value})
  }

  handleFranchise = (e) => {
    this.setState({
      franchise: e.target.value})
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
