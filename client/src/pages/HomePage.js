import React from "react";
import { Link } from "react-router-dom";
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
                  <img src="https://ofcc.ohio.gov/portals/0/Images/Resources/Bid%203D_Med.jpg" width="100px" height="100px" className="pic"/>
               <h1 className="header"><Link to="./BidPost">Search collections, </Link> <Link to="./PostPage">Post </Link><span className="fun2">& </span><Link to="./BidPost">Bid</Link> </h1>
              
    <img src="/images/act.png" width="100px" height="100px" className="pic2" />
           
              </div>
             
              <div class="card-body home">

<Carousel>
  <Carousel.Item>

  <img src={process.env.PUBLIC_URL + '/images/pic1.jpeg'} height="200px" width="700px"/>

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
<img src={process.env.PUBLIC_URL + '/images/pic2.jpg'} height="200px" width="700px"/>
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
<img src={process.env.PUBLIC_URL + '/images/pic3.jpg'} height="200px" width="700px"/>
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
<img src={process.env.PUBLIC_URL + '/images/pic4.jpg'} height="200px" width="500px"/>
    <Carousel.Caption>
     
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
      <br></br><br></br>  
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
