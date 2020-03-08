import React, { Component } from "react";
import BidPost from "./BidPost";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer";

class PostPage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <br />
        <h3>Fill out a form to upload your product!</h3>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-4 offset-4">
              <div className="card">
                <form onSubmit={this.handleSubmit}>
                  <br></br>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="itemName">Enter Item Name</label>
                      <input id="itemName" name="itemName" type="text" class="form-control" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="startPrice">Starting Price</label>
                      <input id="startPrice" name="startPrice" type="startPrice" class="form-control" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="category">Choose a category</label>
                      <select id="category" class="form-control">
                        <option>...</option>
                        <option>Home and garden</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Sporting goods</option>
                        <option>Business and industrial</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="condition">Add item condition</label>
                      <select id="condition" class="form-control">
                        <option>...</option>
                        <option>New</option>
                        <option>Good</option>
                        <option>Used</option>
                      </select>
                    </div>
                  </div>
                  
                  <div class="form-row">
                    <div class="form-group col-md-12">

                      <div class="file-upload">
                        <div class="file-select">

                          <label htmlFor="img"></label>
                          <input id="img" name="img" type="file" />

                        </div>
                      </div>

                    </div>
                  </div>

                  <button className="postButton btn">Post Item!</button>
                  <br />
                </form>
              </div>
              <br></br>
            </div>
          </div>
        </div>
        <Footer />
      </>

    );
  }
}

export default PostPage;
