import React, { Component } from "react";
import BidPost from "./BidPost";
import Navbar from "../components/Navbar/index";

class PostPage extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="card">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="itemName">Enter Item Name</label>
              <input id="itemName" name="itemName" type="text" />
            </div>
            <div>
              <label htmlFor="startPrice">Starting Price</label>
              <input id="startPrice" name="startPrice" type="startPrice" />
            </div>
            <div>
              <label htmlFor="img">Upload an Image</label>
              <input id="img" name="img" type="text" />
            </div>
            <button className="postButton btn">Post Item!</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PostPage;
