import API from "../utils/API";
import React, { useState, useEffect, useReducer } from "react";
import Footer from "../components/Footer";
const axios = require("axios");

function PostPage() {
  // Setting our component's initial state
  const [Items, setItems] = useState([]);
  const [file, setFile] = useState(null);
  const [formObject, setFormObject] = useState({});


  // Load all items and store them with setItems
  useEffect(() => {
    displayAll()
  }, [])

  function displayAll() {
    API.getAllItems()
      .then(res => setItems(res)
      )
      .catch(err => console.log(err));

  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
    if(!value) {
      alert("Please fill up all fields!");
   } 
  };

  // When the form is submitted, use the API.saveItem method to save the item data
  // Then reload items from the database
  function handleSubmit(event) {
    event.preventDefault();

    console.log(formObject);
    // if (formObject.itemname && formObject.startingbid) {
     
      API.saveItem(formObject)
        .then(res =>  {
        //   if(!value) {
        //     alert("Please fill up all fields!");
        //  } 
          displayAll();
          alert("Your item has been added!");
          window.location.reload(false);
        })
        .catch(err => console.log(err))
    // }
  };  

  function onFormSubmit (e) {
    
      e.preventDefault();
      const formData = new FormData();
      formData.append('myImage',this.state.file);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios.post("/upload",formData,config)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
      });
  }
  
  function onChange (e) {
      setFile({file:e.target.files[0]});
    }

    return (
      <>
       
        <br />
       
        <br></br>
        <div className="container">
        <div className="row">
            <div class="col-md-6 offset-sm-3 col-sm-12">
        <h3>Fill <span className="fun">out</span> a <span className="fun">form</span> to <span className="fun">upload</span> your <span className="fun">product</span>!</h3>
        <hr/>
        </div>
        </div>
          <div className="row">
            <div className="col-md-4  offset-sm-4 col-sm-12">
            
              <div className="card">
                <form className="form-inside-input" onSubmit={onFormSubmit} >
                  <br></br>
                  <div class="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="itemname">Enter Item Name</label>
                      <input name="itemname" type="text" className="form-control post-form" onChange={handleInputChange} required/>
                    </div>

                  </div>


                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label htmlFor="startingbid">Starting Price</label>
                      <input required name="startingbid" type="startingbid" class="form-control post-form" onChange ={handleInputChange} required/>
                    </div>
                    <div class="form-group col-md-12">

                      <label htmlFor="buyout">Buy out price</label>
                      <input id="buyout" name="buyout" type="buyout" class="form-control post-form" onChange ={handleInputChange} required/>
                    </div>
                    

                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="category">Choose a category</label>
                      <select name="category" class="form-control" onChange ={handleInputChange} required>
                        <option>...</option>
                        <option>Home and garden</option>
                        <option>Electronics</option>
                        <option>Fashion</option>
                        <option>Sporting goods</option>
                        <option>Business and industrial</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-12">
                      <label for="condition">Add item condition</label>
                      <select name="condition" class="form-control" onChange ={handleInputChange} required>
                        <option>...</option>
                        <option>New</option>
                        <option>Good</option>
                        <option>Used</option>
                      </select>
                    </div>

                  </div>

                  
                  <div class="form-row">
                    <div class="form-group col-md-12 ">
                    <label htmlFor="img">Upload product image</label>
                      <div class="file-upload">
                        <div class="file-select">
                         <input id="img" name="myImage" type="file" onChange= {()=>onChange} required />
                        </div>
                      </div>                      

                    </div>

                  </div>

                  <br></br>


                  <button id="myForm" className="postButton btn" onClick={handleSubmit}>Post Item!</button>
                  <br />
                </form>
              </div>
              <br></br>

            </div>
            <br></br>
          </div>
        </div>
      <br></br>
      <br></br>
      <br></br>
      <Footer />
    </>

  );
}


export default PostPage;
