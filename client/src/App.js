import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BidPost from "./pages/BidPost";
import PostPage from "./pages/PostPage";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/BidPost">
            <BidPost />
          </Route>
          <Route exact path="/PostPage">
            <PostPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
