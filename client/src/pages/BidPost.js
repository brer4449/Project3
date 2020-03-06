import React, { Component } from 'react';
import API from '../utils/API';

class Bid extends Component {
  constructor(props){
    super(props);
    this.state = {
      result: [],
      search: "",
      items: []
    }
  }

  componentDidMount() {
    this.displayData();
  }

  displayData = query => {
    API.getAllItems(query).then(res => {
      this.setState({
        results: res.data.results
      })
    }).catch(err => console.log(err));
  }

  searchData = query => {
    API.getItem(query).then(res => {
      this.setState({
        results: res.data.results
      })
    }).catch(err => console.log(err));
  }

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
        {/* <div className="btn-group">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
            Choose a category to search
          </button>
          <div className="dropdown-menu dropdown-menu-left">
            <button className="dropdown-item" type="button">Home and Garden</button>
            <button className="dropdown-item" type="button">Electronics</button>
            <button className="dropdown-item" type="button">Fashion</button>
            <button className="dropdown-item" type="button">Sporting Goods</button>
            <button className="dropdown-item" type="button">Business and Industrial</button>
          </div>
        </div> */}
        <div className="col-6">
          <select className="itemSearch">
            <option id="allItems" value="allItems">All Items</option>
            <option id="homeAndGarden" value="homeAndGarden">Home and Garden</option>
            <option id="electronics" value="electronics">Electronics</option>
            <option id="fashion" value="fashion">Fashion</option>
            <option id="sportingGoods" value="sportingGoods">Sporting Goods</option>
            <option id="businessIndustrial" value="businessIndustrial">Business and Industrial</option>
          </select>
          <button className="btn btn-outline-secondary" type="button" id="searchAlcBtn">Search</button>
        </div>
        <div className="card mb-3" style={{ width: "90%" }}>
          {this.state.items.filter(item =>
          (item.category).map(item => {
            return(
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={item.image} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.itemname}</h5>
                    <p className="card-text">{item.condition}</p>
                    <p className="card-text"><small className="text-muted">{item.startingbid}</small></p>
                  </div>
                </div>
              </div>)
          }))
          }
        </div>
      </div>

    )
  }

}

export default Bid;