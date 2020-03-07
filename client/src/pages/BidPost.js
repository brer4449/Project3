import React, { Component } from "react";
import API from "../utils/API";

class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: "",
      items: []
    };
  }

  componentDidMount() {
    this.displayData();
  }

  displayData = query => {
    // if (query){API.getCategory(query)}
    // else
   API.getAllItems(query)
      .then(res =>  {
        console.log(res.data)
        this.setState({
          results: res.data
        });
      })
      .catch(err => console.log(err));
  };

  // searchData = query => {
  //   API.getItem(query)
  //     .then(res => {
  //       this.setState({
  //         results: res.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
      this.setState({
      [name]: value
    }, ()=>{console.log(this.state);
    this.displayData(this.state.search)});
  };

  handleUserSubmit = event => {
    event.preventDefault();
    this.searchData(this.state.search);
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Bid on Item</h1>
            <p className="lead">Search through the items and place a bid!</p>
          </div>
        </div>
        <div className="col-6">
          <select className="itemSearch" name = "search" onChange={this.handleInputChange}>
            {/* <option id="allItems" value="allItems" > */}
              {/* All Items
            </option> */}
            <option
              id="homeAndGarden"
              name="search"
              value="homeAndGarden"

            >
              Home and Garden
            </option>
            <option id="electronics" name="search" value="electronics">
              Electronics
            </option>
            <option id="fashion" name="search" value="fashion">
              Fashion
            </option>
            <option
              id="sportingGoods"
              name="search"
              value="sportingGoods"
            >
              Sporting Goods
            </option>
            <option
              id="businessIndustrial"
              name="search"
              value="businessIndustrial"
            >
              Business and Industrial
            </option>
          </select>
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="searchAlcBtn"
            // onChange={this.handleInputChange()}
          >
            Search
          </button>
        </div>

        {this.state.results.map(item => {
          return (
            <div className="card mb-3" style={{ width: "90%" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={item.image} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.itemname}</h5>
                    <p className="card-text">{item.condition}</p>
                    <p className="card-text">
                      <small className="text-muted">{item.startingbid}</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Bid;
