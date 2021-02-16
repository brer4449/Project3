import React, { Component } from "react";
import API from "../utils/API";
import Footer from "../components/Footer/index";

class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      search: "",
      highestbid: {},
      buyOut: [],
    };
  }

  componentDidMount() {
    if (this.query) {
      console.log("yes query");
      this.displayData();
    } else {
      console.log("no query");
      this.displayAll();
    }
  }

  //Showing all items via API call
  displayAll = () => {
    API.getAllItems()
      .then((res) => {
        console.log(res.data);
        this.setState({
          items: res.data,
          buyOut: res.data.buyout,
        });
      })
      .catch((err) => console.log(err));
  };

  //Functions that displays all items by category
  displayData = (query) => {
    API.getCategoryItems(query)
      .then((res) => {
        // console.log(res.data)
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  //Function that deletes items by ID//
  deleteItem = (id) => {
    API.deleteItem(id)
      .then((res) => this.displayAll())
      .catch((err) => console.log(err));
  };

  //Function that takes care of when input is entered
  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };

  //Function that changes bid price amount
  handleBidPriceInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState((prevState) => ({
      highestbid: { ...prevState.highestbid, [name]: value },
    }));
  };

  //Function that checks bid amount and displays accordingly
  handleBidSubmit = (event, item) => {
    event.preventDefault();
    let current = parseInt(item.startingbid);
    let buyout = parseInt(item.buyout);
    let userPrice = parseInt(this.state.highestbid[item._id]);
    // console.log(userPrice)
    if (userPrice > buyout) {
      this.handleBuyNow(item);
    } else if (userPrice > current) {
      API.updateBid(item._id, { startingbid: userPrice }).then((res) => {
        alert("Your bid of $" + userPrice + " was accepted!");
        window.location.reload(false);
      });
    } else {
      alert(
        "Stop bein' so stingy! Need to fork over more than that, cheapskate!"
      );
    }
  };

  //Function that deletes item from DB when item is "bought"
  handleBuyNow = async (item) => {
    await this.deleteItem(item._id);
    alert(`Congratulations, you are now the proud owner of a ${item.itemname}`);
  };

  render() {
    return (
      <>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="form-inline cat-form">
                <div className="form-group col-md-6">
                  <h3 className="cats">
                    Shop <span className="fun">by</span> category
                  </h3>
                  <select
                    className="itemSearch custom-select"
                    name="search"
                    onChange={this.handleInputChange}
                  >
                    <option id="allItems" value="" name="search">
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
                </div>
                <h3 className="searchByName">
                  <span className="fun">or </span>search{" "}
                  <span className="fun">by </span>name
                </h3>
                <div>
                  <input
                    className="input form-control filter"
                    placeholder="Search by name"
                    type="text"
                    onChange={this.handleInputChange.bind(this)}
                    name="search"
                    value={this.state.search}
                  ></input>
                </div>
              </form>
              <br></br>
              <br></br>
              {/* FIGURE THIS OUT, NOT CURRENTLY DISPLAYING STUFF */}
              {/* {this.state.items ? this.state.items.map((item) => {
              })} */}
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </>
    );
  }
}

export default Bid;
