const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
image: {
    type: String,
    default:""
},
  
itemname: { 
  type: String, 
  required: true 
},

  startingbid: { type: Number, required: true 
},  

  buyout: {type:Number,
    required:true
},

category:{
    type: String,
    required:true
},

  condition: { type: String,
    required:true 
}

});

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;
