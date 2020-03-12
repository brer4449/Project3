import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'



function Home() {
  return (
    <div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="card text-center">
              <div className="card-header home1">
                  <img src="https://ofcc.ohio.gov/portals/0/Images/Resources/Bid%203D_Med.jpg" width="100px" height="100px" alt="Bid_Med" className="pic"/>
               <h1 className="header"><Link to="./BidPost">Search </Link> <Link to="./PostPage">Post </Link><span className="fun2">& </span><Link to="./BidPost">Bid</Link> </h1>
              
    <img src="/images/act.png" width="100px" height="100px" alt="act" className="pic2" />
           
              </div>
             
              <div className="card-body home">

<Carousel>
  <Carousel.Item>

  <img src={process.env.PUBLIC_URL + '/images/pic1.jpeg'} height="200px" alt="pic1" width="700px"/>

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
<img src={process.env.PUBLIC_URL + '/images/pic2.jpg'} height="200px" alt="pic2" width="700px"/>
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
<img src={process.env.PUBLIC_URL + '/images/pic3.jpg'} height="200px" alt="pic3" width="700px"/>
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
   
<img src={process.env.PUBLIC_URL + '/images/pic4.jpg'} height="200px" alt="pic4" width="500px"/>
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
           
            
              </div>
             
              <div className="card-footer">
            
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <br></br><br></br>  
      <Footer />
    </div>
  );
}

export default Home;
