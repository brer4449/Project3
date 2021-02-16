## Table of contents

- [General info](#general-info)
- [Instructions](#instructions)
- [Functionality](#functionality)
- [Technologies](#technologies)
- [Dependencies](#dependencies)
- [DevDependencies](#devdependencies)
- [Github Link](#github-link)

## General Info

This application is meant for someone who wants to get rid of old junk for some coin, or for someone who is in need of an every day appliance. Bidbot allows user to post or bid on items in our database. Using React.js, the user is able to place bids on items or post items (without images for now) to be bid on by other users.

## Instructions

In order to use the application, be sure to install all of the dependencies (see below). If the user would like to test in development, they must run npm start in the command line after running npm run seed to populate the database.

## Functionality

- Landing page where user decides where they would like to go.
  ![first example of working application](https://github.com/vormc2005/Project3/blob/master/client/public/images/bidbot1.png)

- Second page where user can post an item.
  ![second example of working application](https://github.com/vormc2005/Project3/blob/master/client/public/images/bidbot2.png)

## Technologies

- Node
- Bootstrap
- Mongoose
- React.js
- ReactStrap
- Heroku (coming soon)

## Dependencies

- Axios version 0.19.2
- Bootstrap version 4.4.1
- Express version 4.17.1
- Mongoose version 5.9.3
- React version 16.13.0
- React-advanced-form version 1.7.2
- React-bootstrap version 1.0.0-beta.17
- React-dom version 16.13.0
- React-dropzone version 10.2.1
- React-router-dom version 5.1.2
- React-scripts version 3.4.0
- Seeder version 0.2.4

## DevDependencies

- Concurrently version 4.1.0
- Nodemon version 1.18.7

## Github Link

https://github.com/vormc2005/Project3

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

<div className="container">
                <div className="row">
                  {/* filter allows us to search by item name */}
                  {/**Filtering through results */}
                  {this.state.results
                    .filter(
                      (item) =>
                        item.itemname
                          .toLowerCase()
                          .trim()
                          .includes(this.state.search.toLowerCase().trim()) ||
                        item.category
                          .toLowerCase()
                          .includes(this.state.search.toLowerCase())
                    )
                    .map((item) => {
                      return (
                        <>
                          <div className="col-xsm-12 col-md-4 col-sm-12">
                            <div className="card item-card">
                              <div className="row">
                                <div className="col-4">
                                  <nav className="card-title">
                                    {item.itemname}
                                  </nav>
                                  <img
                                    src={item.image}
                                    className="card-img"
                                    alt={item.name}
                                  />
                                </div>
                                <br></br>
                                <div className="content">
                                  <ul>
                                    <br></br>
                                    <li key={item.toString()}>
                                      <strong>Condition:</strong>{" "}
                                      {item.condition}
                                    </li>
                                    <br></br>
                                    <li key={item.toString()}>
                                      <strong>Current bid: $ </strong>
                                      {item.startingbid}
                                    </li>
                                    <br></br>
                                    <li key={item.toString()}>
                                      <strong>Buyout price: $ </strong>
                                      {item.buyout}{" "}
                                    </li>
                                  </ul>
                                  <button
                                    className="btn btn-outline-secondary buy"
                                    onClick={() => this.handleBuyNow(item)}
                                  >
                                    Buy Now
                                  </button>
                                  <br></br>
                                  <br></br>
                                  <button
                                    className="btn btn-outline-secondary bid"
                                    type="text"
                                    onClick={(e) =>
                                      this.handleBidSubmit(e, item)
                                    }
                                  >
                                    Place bid
                                  </button>
                                  <form>
                                    <div className="form-row">
                                      <div className="form-group col-sm-8">
                                        <input
                                          id={item._id}
                                          type="number"
                                          className="form-control placeBid"
                                          name={item._id}
                                          value={
                                            this.state.highestbid[item._id]
                                          }
                                          placeholder="Bid Here"
                                          onChange={this.handleBidPriceInput}
                                        />
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
