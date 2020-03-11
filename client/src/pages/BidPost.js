import React, { Component } from "react";
import API from "../utils/API";
import Footer from "../components/Footer/index";


class Bid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: "",
      items: [],
      highestbid: {},
      buyOut: []

    };
  }

  componentDidMount() {
    if (this.query) {
      this.displayData()
    }
    else { this.displayAll() };
  }

  //Showing all items via API call
  displayAll = () => {
    API.getAllItems()
      .then(res => {
        // console.log(res.data)
        this.setState({
          results: res.data,
          buyOut: res.data.buyout
        });
      })
      .catch(err => console.log(err));
  }

  //Functions that displays all items by category
  displayData = query => {
    API.getCategoryItems(query)
      .then(res => {
        // console.log(res.data)
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

  //Function that takes care of when input is entered
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  //Function that changes bid price amount
  handleBidPriceInput = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState(prevState => ({
      highestbid: { ...prevState.highestbid, [name]: value }
    }));
  }

  //Function that checks bid amount and displays accordingly
  handleBidSubmit = (event, item) => {
    event.preventDefault();

    let current = parseInt(item.startingbid)
    let buyout = parseInt(item.buyout)
    let userPrice = parseInt(this.state.highestbid[item._id])

    console.log(userPrice)

    if (userPrice > buyout) {
      this.handleBuyNow(item)
    } else if (userPrice > current) {
      API.updateBid(item._id, { startingbid: userPrice })
        .then(res => {
          alert("Your bid of $" + userPrice + " was accepted!");
          window.location.reload(false);
        })
    } else {
      alert("Stop bein' so stingy! Need to fork over more than that, cheapskate!")
    }
  };

  //Function that deletes item from DB when item is "bought"
  handleBuyNow = async item => {
    await this.deleteItem(item._id)
    alert(`Congratulations you are now the proud owner of a ${item.itemname}`)
  }

  render() {
    return (<>
      <br />
      <br />
      <form className="form-inline cat-form">
        <div className="form-group col-6">
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
        </div>
        <h3><span className="fun">or </span>search <span className="fun">by </span>name</h3>
        <div>
          <input
            className="input form-control"
            placeholder="Search by name"
            type="text"
            onChange={this.handleInputChange.bind(this)}
            name="search"
            value={this.state.search}
          ></input>
        </div>
      </form>
      <br /><br />
      <div className="container">
        <div className="row">
          {/* filter allows us to search by item name */}
          {/**Filtering through results */}
          {this.state.results.filter(item => (item.itemname).toLowerCase().trim().includes(this.state.search.toLowerCase().trim()) || (item.category).toLowerCase().includes(this.state.search.toLowerCase())).map(item => {
            return (
              <>
                <div className="col-4 sm-12">
                  <div className="card item-card sm-12">
                    <div className="row">
                      <div className="col-4">
                        <nav className="card-title">{item.itemname}</nav>
                        <img src={item.image} className="card-img" alt="..." />
                      </div>
                      <br />
                      <div className="content">
                        <ul>
                          <br />
                          <li><strong>Condition:</strong> {item.condition}</li>
                          <br />
                          <li><strong>Current bid: $ </strong>{item.startingbid}</li>
                          <br />
                          <li><strong>Buyout price: $ </strong>{item.buyout} </li>
                        </ul>
                        <button className="btn btn-outline-secondary buy" onClick={() => this.handleBuyNow(item)}>Buy Now</button>
                        <br /><br />
                        <button className="btn btn-outline-secondary bid" type="text" onClick={(e) => this.handleBidSubmit(e, item)}>Place bid</button>
                        <form>
                          <div className="form-row">
                            <div className="form-group col-md-8">
                              <input id={item._id} type="number" className="form-control" name={item._id} value={this.state.highestbid[item._id]} placeholder="Bid Here" onChange={this.handleBidPriceInput} />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </>
            );
          })}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
    );
  }
}

export default Bid;
