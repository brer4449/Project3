import axios from 'axios';


// ${query?"?category="+query:null}`);//

export default {
  //
  getAllItems: function (){
    return axios.get("/api/items");
  },
 

  getCategoryItems: function (query){
    return axios.get("/api/items?category="+query);
  },


  // getCategory: function(query) {
  //   return axios.get("/api/items?category"+query)
    
    updateBid: function(id, bidData){
      return axios.put("/api/items/"+id, bidData);
    },
  
  // Gets the item with the given id
  getItem: function(id) {
    return axios.get("/api/items/" + id);
  },
  // Deletes the item with the given id
  deleteItem: function(id) {
    return axios.delete("/api/items/" + id);
  },
  
  // Saves an item to the database
  saveItem: function(itemData) {
    console.log("api route hit");
    return axios.post("/api/items", itemData);
  }
};