import React from "react";
import { Link } from "react-router-dom";
import BidPost from "./BidPost";
import PostPage from "./PostPage";
import BackgroundPic from "../components/BackgroundPic/index"

function Home() {
  return (
    <div>
       <BackgroundPic backgroundImage="">
      <h1>Blah</h1>
      <h4 className="choice">
        <Link to="./BidPost">Bid</Link> | <Link to="./PostPage">Post</Link>
      </h4>
      </BackgroundPic>
    </div>
  );
}

export default Home;
