import React from 'react';
import { Link } from 'react-router-dom';
import BidPost from './BidPost';
import PostPage from './PostPage';

function Home() {
  return(
    <div>
      <h1>
        Blah
      </h1>
      <h4><Link to="./BidPost">Bid</Link></h4>
      <h4><Link to="./PostPage">Post</Link></h4>
    </div>
  )
}


export default Home;