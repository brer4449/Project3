import React, { Component } from 'react';
import BidPost from './BidPost';

class PostPage extends Component {



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="itemName">Enter Item Name</label>
        <input id="itemName" name="itemName" type="text" />

        <label htmlFor="startPrice">Starting Price</label>
        <input id="startPrice" name="startPrice" type="startPrice" />

        <label htmlFor="img">Upload an Image</label>
        <input id="img" name="img" type="text" />

        <button>Post Item!</button>
      </form>
    );
  }
}

export default PostPage;