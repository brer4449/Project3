const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/auction"
  );


  // for front end make dropdown for categories: Home and garden, Electronics, Fashion, Sporting goods, Business and industrial
  const itemSeed = [
      // Home and garden
      {
          image: "/client/src/assets/images/home1.jpg",
          itemname: "Laundry mashine",
          startingbid: 200,
          buyout: 500,
          category: "Home and garden",
          condition: "Good"
      },
      {
        image: "/client/src/assets/images/home2.jpg",
        itemname: "Massage chair",
        startingbid: 500,
        buyout: 1500,
        category: "Home and garden",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/home3.jpg",
        itemname: "Gas stove",
        startingbid: 800,
        buyout: 2000,
        category: "Home and garden",
        condition: "Good"
    },
    {
        image: "/client/src/assets/images/home4.jpg",
        itemname: "Fridge",
        startingbid: 300,
        buyout: 600,
        category: "Home and garden",
        condition: "Used"
    },
    {
        image: "/client/src/assets/images/home5.jpg",
        itemname: "Patio set",
        startingbid: 40,
        buyout: 100,
        category: "Home and garden",
        condition: "Bad"
    },
    {
        image: "/client/src/assets/images/home6.jpg",
        itemname: "Lawn mashine",
        startingbid: 600,
        buyout: 1000,
        category: "Home and garden",
        condition: "Good"
    },
    {
        image: "/client/src/assets/images/home7.jpg",
        itemname: "Couch",
        startingbid: 100,
        buyout: 250,
        category: "Home and garden",
        condition: "Used"
    },
    {
        image: "/client/src/assets/images/home8.jpg",
        itemname: "Dining set",
        startingbid: 50,
        buyout: 120,
        category: "Home and garden",
        condition: "Bad"
    },
    // Electronics
    {
        image: "/client/src/assets/images/electronics1.jpg",
        itemname: "Iphone 10",
        startingbid: 300,
        buyout: 650,
        category: "Electronics",
        condition: "Used"
    },
    {
        image: "/client/src/assets/images/electronics2.jpg",
        itemname: "Lenovo laptop",
        startingbid: 500,
        buyout: 1100,
        category: "Electronics",
        condition: "Good"
    },
    {
        image: "/client/src/assets/images/electronics3.jpg",
        itemname: "Apple tablet",
        startingbid: 150,
        buyout: 400,
        category: "Electronics",
        condition: "Used"
    },
    {
        image: "/client/src/assets/images/electronics4.jpg",
        itemname: "LG Smart TV",
        startingbid: 550,
        buyout: 1000,
        category: "Electronics",
        condition: "new"
    },
    {
        image: "/client/src/assets/images/electronics5.jpg",
        itemname: "Patio Set",
        startingbid: 30,
        buyout: 75,
        category: "Electronics",
        condition: "Bad"
    },
    {
        image: "/client/src/assets/images/electronics6.jpg",
        itemname: "Lawn Mashine",
        startingbid: 600,
        buyout: 1100,
        category: "Electronics",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/electronics7.jpg",
        itemname: "Couch",
        startingbid: 85,
        buyout: 250,
        category: "Electronics",
        condition: "Used"
    },
    {
        image: "/client/src/assets/images/electronics8.jpg",
        itemname: "Dining set",
        startingbid: 30,
        buyout: 90,
        category: "Electronics",
        condition: "Used"
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
