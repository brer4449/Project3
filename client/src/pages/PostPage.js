import API from "../utils/API";
import React, { useState, useEffect } from "react"; //, useReducer taken out since not using
import Footer from "../components/Footer";


function PostPage() {
  // Setting our component's initial state
  const [Items, setItems] = useState([]);
  const [formObject, setFormObject] = useState({});
  console.log(Items)

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
    
    
  };

  // When the form is submitted, use the API.saveItem method to save the item data
  // Then reload items from the database
  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formObject);
    API.saveItem(formObject)
      .then(res => {
        displayAll();
        alert("Your item has been added!");
        window.location.reload(false);
      })
      .catch(err => console.log(err))
  };


    
  return (
    <div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-sm-3">
            <h3>Fill <span className="fun">out</span> a <span className="fun">form</span> to <span className="fun">upload</span> your <span className="fun">product</span>!</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4  offset-sm-4 col-sm-12">
            <div className="card">
              <form >
                <br />
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="itemname">Enter Item Name</label>
                    <input name="itemname" type="text" className="form-control post-form" onChange={handleInputChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="startingbid">Starting Price</label>
                    <input name="startingbid" type="startingbid" className="form-control post-form" onChange={handleInputChange} />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="buyout">Buy out price</label>
                    <input id="buyout" name="buyout" type="buyout" className="form-control post-form" onChange={handleInputChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="category">Choose a category</label>
                    <select name="category" className="form-control" onChange={handleInputChange}>
                      <option>...</option>
                      <option>Home and garden</option>
                      <option>Electronics</option>
                      <option>Fashion</option>
                      <option>Sporting goods</option>
                      <option>Business and industrial</option>
                    </select>

                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="condition">Add item condition</label>
                    <select name="condition" className="form-control" onChange={handleInputChange}>
                      <option>...</option>
                      <option>New</option>
                      <option>Good</option>
                      <option>Used</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12 ">
                    <label htmlFor="img">Upload product image</label>

                      <div class="file-upload">
                        <div class="file-select">

                         <input id="img" name="image" type="file" />

                        </div>
                      </div>                      


                    </div>
                  </div>

                <br />
                <button id="myForm" className="postButton btn" onClick={handleSubmit}>Post Item!</button>
                <br />
              </form>
            </div>
            <br />
          </div>
          <br />
        </div>
   
      <br />
      <br />
      <br />
      </div>

    
      <Footer />
      </div>
  
  );
}

export default PostPage;
