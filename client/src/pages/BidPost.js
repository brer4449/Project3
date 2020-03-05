import React, { Component } from 'react';
import API from '../utils/API';

class Bid extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: [],
      search: ""
    }
  }

  componentDidMount() {
    // this.displayData();
  }

  // displayData = query => {
  //   API.showAll(query).then(res => {
  //     this.setState({
  //       results: res.data.results
  //     })
  //   }).catch(err => console.log(err));
  // }

  // searchData = query => {
  //   API.search(query).then(res => {
  //     this.setState({
  //       results: res.data.results
  //     })
  //   }).catch(err => console.log(err));
  // }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }

  handleUserSubmit = event => {
    event.preventDefault();
    this.searchUser(this.state.search);
  }

  render() {
    return(
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Bid on Item</h1>
            <p className="lead">Search through the items and place a bid!</p>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Search a user" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
      </div>
    )
  }

}

export default Bid;