import React from "react";
import { Link } from "react-router-dom";
import BackgroundPic from "../components/BackgroundPic/index"
import Footer from "../components/Footer/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'



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
              
               <img src="/images/act.png" width="100px" height="100px" className="pic2" />
              </div>
             
              <div class="card-body home">
            
            
              <img src="https://ofcc.ohio.gov/portals/0/Images/Resources/Bid%203D_Med.jpg" width="300px" height="150px" className="pic"/>
              <br></br><br></br>
              <Link to="./BidPost" className="collections">Explore our collections</Link>
              <br></br><br></br>
            <h3>Bid and Save</h3>

<Carousel>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           
            
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
