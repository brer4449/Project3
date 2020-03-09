import React from "react";
import { Link } from "react-router-dom";
import BackgroundPic from "../components/BackgroundPic/index"
import Footer from "../components/Footer/index"

function Home() {
  return (
    <div>
      
       <BackgroundPic backgroundImage="https://cdn2.vectorstock.com/i/1000x1000/37/36/abstract-blue-waves-on-black-background-vector-15103736.jpg">
      <h1>Auction Room</h1>
      <h4 className="choice">
        <Link to="./BidPost">Bid</Link> | <Link to="./PostPage">Post</Link>
      </h4>
      
      </BackgroundPic>
      <Footer />
    </div>
  );
}

export default Home;
