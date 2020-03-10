import API from "../utils/API";
import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer";

function PostPage() {
  // Setting our component's initial state
  const [Items, setItems] = useState([])
  const [file, setFile] = useState("")
  const [filename, setFilename] = useState("Choose File")
  const [uploadedFile, setUploadedFile] = useState({})
  const [formObject, setFormObject] = useState({})

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
  const onSubmit = async e => {
    e.preventDefault();

    //Part of JS (not react)
    const formData = new FormData()
    //The first file is from the server (req.files.file)
    //The second file is from state
    formData.append("file", file)

    try {
      const res = await API.saveItem("/api/items", formData, {
        //adding an option (not sure why)
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      // destructing the object sent back from the server
      const { fileName, filePath } = res.data

      setUploadedFile({ fileName, filePath })
    } catch (err) {
      if (err.response.status === 500) {
        console.log("there was a problem with the server")
      } else {
        // getting this from msg in json object of the status
        console.log(err.response.data.msg)
      }
    }
    // if (formObject.itemname && formObject.startingbid) {
    // API.saveItem(formObject)
    //   .then(res => {
    //     displayAll();
    //     alert("Your item has been added!");
    //     window.location.reload(false);
    //   })
    //   .catch(err => console.log(err))
    // }


  };

  const onFileChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  }

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <h3>Fill <span className="fun">out</span> a <span className="fun">form</span> to <span className="fun">upload</span> your <span className="fun">product</span>!</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 sm-12 offset-4">
            <div className="card">
              <form onSubmit={onSubmit}>
                <br />
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="itemname">Enter Item Name</label>
                    <input name="itemname" type="text" className="form-control" onChange={handleInputChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label htmlFor="startingbid">Starting Price</label>
                    <input name="startingbid" type="startingbid" className="form-control" onChange={handleInputChange} />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="buyout">Buy out price</label>
                    <input id="buyout" name="buyout" type="buyout" className="form-control" onChange={handleInputChange} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label for="category">Choose a category</label>
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
                    <label for="condition">Add item condition</label>
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
                    <div className="custom-file">
                      <input className="custom-file-input" id="customFile" type="file" onChange={onFileChange} />
                      <label className="custom-file-label" htmlFor="customFile">{filename}</label>
                    </div>
                    <input type="submit" value="Upload" className="btn btn-primary btn-block" />
                  </div>
                </div>
                <br />
                {/* <button id="myForm" className="postButton btn" onClick={handleSubmit}>Post Item!</button> */}
                <br />
              </form>
              {uploadedFile ? <div className="row">
                <div className="col-md-6 m-auto">
                  <h3 className="text-center">{uploadedFile.fileName}</h3>
                  <img style={{ width: "100%" }} src={uploadedFile.filePath} alt="" />
                </div>
              </div> : null}
            </div>
            <br />
          </div>
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PostPage;
