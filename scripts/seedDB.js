const mongoose = require("mongoose");
const db = require("../models");
const images = require("../client/src/assets/images");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/auction"
  );


  // for front end make dropdown for categories: home and garden, electronics, fashion, sporting goods, business and industrial
  const itemSeed = [
      // home
      {
          image: "/client/src/assets/images/home1.jpg",
          itemname: "laundry mashine",
          startingbid: 200,
          buyout: 500,
          category: "Home",
          condition: "good"
      },
      {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
    {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
    {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
    {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
    {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
    {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
    {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
    {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
    {
        image: "",
        itemname: "",
        startingbid: "",
        buyout: "",
        category: "",
        condition: ""
    },
  ]

  
db.Items
.remove({})
.then(() => db.Items.collection.insertMany(itemSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
