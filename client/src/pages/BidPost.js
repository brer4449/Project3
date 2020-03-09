import React, { Component } from "react";
import API from "../utils/API";
import Navbar from "../components/Navbar/index"

class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: "",
      items: [],
      highestbid: []

    };
  }

  componentDidMount() {
    if (this.query) {
      this.displayData()

    }
    else { this.displayAll() };
  }

  displayAll = () => {
    API.getAllItems()
      .then(res => {
        console.log(res.data)
        this.setState({
          results: res.data
        });
      })
      .catch(err => console.log(err));
  }

  //Functions that displays all items by categories//
  displayData = query => {
    // if (!query){API.getAllItems()}    
    API.getCategoryItems(query)
      .then(res => {
        console.log(res.data)
        this.setState({
          results: res.data
        });
      })
      .catch(err => console.log(err));

  };

  //Function that deletes items by ID//

  deleteItem = (id) => {
    API.deleteItem(id)
      .then(res => this.displayAll())
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    }
      //commented this out because I'm not sure what it does and it wasn't letting my search function work... we probs need it tho
      // , () => {
      //   console.log(this.state);
      //   this.displayData(this.state.search)
      // }
    );
  };

  handleBidSubmit = event => {
    event.preventDefault();
    this.searchData(this.state.search);
  };

  placeBid = () => {

  }

  // handleBuyNow = event =>{
  //   event.preventDefault();
  //   this.state.search
  // }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Bid on Item</h1>
            <p className="lead">Search through the items and place a bid!</p>
          </div>
        </div>
        <div className="col-6">
          <input
            className="input"
            placeholder="Search by Item Name or Category Here"
            type="text"
            onChange={this.handleInputChange.bind(this)}
            name="search"
            value={this.state.search}
            style={{ width: 285 }}
          ></input>
          {/* Commented out dropdown, didn't want to delete */}
          {/* <select className="itemSearch" name="search" onChange={this.handleInputChange}>
            <option id="allItems" value="" name="search"  >
              All Items
            </option>
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
          </select> */}
          {/* <button
            className="btn btn-outline-secondary"
            type="button"
            id="searchAlcBtn"
           
          // onChange={this.handleInputChange()}
          >
            Search
          </button> */}
        </div>

        {/* filter allows us to search by item name or category, but only first word of category (awk) */}
        {this.state.results.filter(item => (item.itemname).toLowerCase().trim().includes(this.state.search.toLowerCase().trim()) || (item.category).toLowerCase().includes(this.state.search.toLowerCase())).map(item => {
          return (
            <div className="card mb-3" style={{ width: "90%" }}>
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img src={item.image} className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.itemname}</h5>
                    <p className="card-text">Condition: {item.condition}</p>
                    <div className="row">
                      <div className="col-md-4">
                        <p className="card-text">
                          Highest Bid: $
                      <font className="text-muted">{item.startingbid}</font>
                        </p>
                        {/*Here goes Bid Update price and logic to check if Bid equals to Buy now, if it does than it goes to purchase function*/}

                        {/* <button className="btn btn-outline-secondary" type="text" onChange={this.handleBidSubmit}>Bid</button> */}
                        <form>
                          <label>
                            <input type="text" name="name" style={{ width: "70%", borderRadius: "3px" }} />
                          </label>
                          <input type="submit" value="Bid" className="btn btn-outline-secondary" />
                        </form>
                      </div>
                      <div className="col-md-4">
                        <p className="card-text">
                          Buy Now: $
                      <font className="text-muted">{item.buyout}</font>
                        </p>
                        {/*Here goes delete function, alert tha notifies of successful purchase*/}
                        <button className="btn btn-outline-secondary" onClick={() => this.deleteItem(item._id)}>Buy Now</button>
                      </div>
                    </div>
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
