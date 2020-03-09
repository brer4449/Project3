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

  //Function that delets items by ID//

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
    }, () => {
      console.log(this.state);
      this.displayData(this.state.search)
    });
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
      <>
        <Navbar />
        <br></br>


        <br></br>

        <form className="form-inline">
          <div className="form-group col-6 offset-4">
            <h3>Shop <span className="fun">by</span> category</h3>

            <select className="itemSearch custom-select" name="search" onChange={this.handleInputChange}>
              <option id="allItems" value="" name="search"  >
                ...
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
            </select>


            {/* <button
            className="btn btn-outline-secondary btn-large"
            type="button"
            id="searchAlcBtn"
           
          // onChange={this.handleInputChange()}
          >
            Search
          </button> */}


          </div>
        </form>

        <br></br>

        <div className="container">
          <div className="row">


            {this.state.results.map(item => {
              return (
                <>

                  <div className="col-4 sm-12">
                    <div className="card item-card">
                      <div className="row">

                        <div className="col-4">
                          <nav className="card-title">{item.itemname}</nav>
                          <img src={item.image} className="card-img" alt="..." />
                        </div>
                        <br></br>
                        <div className="content">

                          <ul>
                            <br></br>
                            <li><strong>Condition:</strong> {item.condition}</li>
                            <br></br>
                            <li><strong>Current bid: $ </strong>{item.startingbid}</li>
                            <br></br>
                            <li><strong>Buyout price: $ </strong>{item.buyout} </li>
                            
                          </ul>
                          <button className="btn btn-outline-secondary buy" onClick={this.handleBuyNow}>Buy Now</button>
<br></br><br></br>
                          {/*Here goes Bid Update price and logic to check if Bid equals to Buy now, if it does than it goes to purchase function*/}
                           {/*Here goes delete function, alert tha notifies of successful purchase*/}
                              
                          <form>
                            <div class="form-row">
                              <div class="form-group">
                                <button className="btn btn-outline-secondary bid" type="text" onChange={this.handleBidSubmit}>Place bid</button>
                               
                              </div>

                              <div className="form-group col-md-8">
                                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="" />
                              </div>
                             
                            </div>
                          </form>

                         
                        </div>

                      </div>

                    </div>
                    <br></br>
                  </div>


                </>
              );
            })}


          </div>


        </div>
      </>
    );
  }
}

export default Bid;
