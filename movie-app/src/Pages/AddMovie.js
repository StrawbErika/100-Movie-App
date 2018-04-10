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

  handleSubmit = (e) =>{
    e.preventDefault()
    fetch('http://localhost:3001/movie/add',
    {
      method: "POST",
      headers: {
      'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        year: this.state.year,
        director: this.state.director,
        actor: this.state.actor,
        franchise: this.state.franchise,
      })
    })
    .then((response) => {return response.json() })
    .then((body) => {
      alert("Successfully added!")
    }).catch((err) => {alert(">:(")})
  }



  render(){
      return (
        <div>
          <legend> Sign Up </legend>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
              name="title"
              label="Title"
              placeholder="Title"
              value={this.state.title}
              onChange={this.handleTitle}/>
            </div>
            <div>
              <input
              name="actor"
              label="Actor"
              placeholder="Actor"
              value={this.state.actor}
              onChange={this.handleActor}/>
            </div>
            <div>
              <input
              name="year"
              label="Year"
              placeholder="Year"
              value={this.state.year}
              onChange={this.handleYear}/>
            </div>
            <div>
              <input
              name="franchise"
              label="Franchise"
              placeholder="Franchise"
              value={this.state.franchise}
              onChange={this.handleFranchise}/>
            </div>
            <div>
              <input
              name="director"
              label="Director"
              placeholder="Director"
              value={this.state.director}
              onChange={this.handleDirector}/>
            </div>
            <div>
              <button type="submit"> SUBMIT </button>
            </div>
          </form>
        </div>
      );
  }
}
export default AddMovie;
