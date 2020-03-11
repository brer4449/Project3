import React from "react";
//commented out since they're not being called...
// import { Link } from "react-router-dom";
// import BackgroundPic from "../components/BackgroundPic/index"
import Footer from "../components/Footer/index"

function Home() {
  return (
    <div>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card text-center">
              <div class="card-header home1">
                <h1>Search, Post <span className="fun2">&</span> Bid </h1>
                <img alt="logo" src="/images/act.png" width="100px" height="100px" className="pic2" />
              </div>
              <div class="card-body home">
                {/* <BackgroundPic backgroundImage="https://t4.ftcdn.net/jpg/00/99/17/81/240_F_99178133_4oUPBVYO1y7Py4M6otxiyfD9aSNLz3Vu.jpg" height="100px"/> */}
                <img alt="logo" src="https://ofcc.ohio.gov/portals/0/Images/Resources/Bid%203D_Med.jpg" width="300px" height="150px" className="pic" />
                <br></br><br></br>
                <h2>Explore our collections</h2>
                <h3>Bid and Save</h3>
              </div>
              <div class="card-footer">
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
