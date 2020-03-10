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
    return API.getAllItems()
      .then(res => {
        // console.log(res.data)
        this.setState({
          results: res.data
        });
      })
      .catch(err => console.log(err));
  }

  //Do we need this? since Brendan's search grabs by item name or category
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

  deleteItem = async (id) => {
    return await API.deleteItem(id)
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


  handleBidSubmit = (event, id) => {
    event.preventDefault();
    API.updateBid(id,  {startingbid: this.state.highestbid})
    .then(res=> {
      // this.displayAll()
      console.log(res.data)

    })

  };



  handleBuyNow = async item => {
    await this.deleteItem(item._id)
    alert(`Congratulations you are now the proud owner of a ${item.itemname}`)
  }

  render() {
    return (
      <>
        <Navbar />
        <br></br>
        <br></br>
        <form className="form-inline">
          <div className="form-group col-6 offset-4">
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
            </div>
            <h3>Shop <span className="fun">by</span> category</h3>
            <select className="itemSearch" name="search" onChange={this.handleInputChange}>
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
            </select>
          </div>
        </form>

        {/* filter allows us to search by item name or category, but only first word of category (awk) */}
        <div className="container">
          <div className="row">

            {this.state.results.filter(item => (item.itemname).toLowerCase().includes(this.state.search.toLowerCase()) || (item.category).toLowerCase().includes(this.state.search.toLowerCase())).map(item => {
              return (
                <>
                  <div className="col-4 sm-12" key={item._id}>
                    <div className="card item-card">
                      <div className="row">
                        <div className="col-8">
                          <nav className="card-title" >{item.itemname}</nav>
                          <img src={item.image} className="card-img" alt="image of product for sale" />
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
                          {/*Here goes Bid Update price and logic to check if Bid equals to Buy now, if it does than it goes to purchase function*/}
                          {/*Here goes delete function, alert that notifies of successful purchase*/}               


                  <form>
                    <div class="form-row">
                      <div class="form-group">
                        <button className="btn btn-outline-secondary bid" type="text" onClick={(e)=>this.handleBidSubmit(e, item.itemname)}>Place bid</button>
                       
                      </div>
                      <div className="form-group col-md-8">
                        <input type="text" class="form-control" id="formGroupExampleInput" name="highestbid" placeholder="Bid Here" onChange={this.handleInputChange}/>

                      </div>
                    </div>
                    <br />
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
