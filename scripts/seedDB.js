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
        itemname: "Vacuum Cleaner",
        startingbid: 85,
        buyout: 250,
        category: "Electronics",
        condition: "Used"
    },
    {
        image: "/client/src/assets/images/electronics8.jpg",
        itemname: "Blender",
        startingbid: 30,
        buyout: 90,
        category: "Electronics",
        condition: "Used"
    },
// Fashion
    {
        image: "/client/src/assets/images/fashion1.jpg",
        itemname: "DW women's watch",
        startingbid: 50,
        buyout: 125,
        category: "Fashion",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/fashion2.jpg",
        itemname: "Cartier ring",
        startingbid: 600,
        buyout: 1250,
        category: "Fashion",
        condition: "Used"
    },
    {
        image: "/client/src/assets/images/fashion3.jpg",
        itemname: "Burberry women's scarf",
        startingbid: 160,
        buyout: 275,
        category: "Fashion",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/fashion4.jpg",
        itemname: "Gucci women's bag",
        startingbid: 800,
        buyout: 1400,
        category: "Fashion",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/fashion5.jpg",
        itemname: "Women's coat",
        startingbid: 80,
        buyout: 190,
        category: "Fashion",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/fashion6.jpg",
        itemname: "Men's bracelet",
        startingbid: 300,
        buyout: 500,
        category: "Fashion",
        condition: "Used"
    },
    {
        image: "/client/src/assets/images/fashion7.jpg",
        itemname: "Men's bag",
        startingbid: 180,
        buyout: 260,
        category: "Fashion",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/fashion8.jpg",
        itemname: "Men's coat",
        startingbid: 60,
        buyout: 140,
        category: "Fashion",
        condition: "Good"
    },
    // Sporting goods
    {
        image: "/client/src/assets/images/sport1.jpg",
        itemname: "Bicycle",
        startingbid: 1500,
        buyout: 2500,
        category: "Sporting goods",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/sport2.jpg",
        itemname: "Boxing gloves",
        startingbid: 40,
        buyout: 95,
        category: "Sporting goods",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/sport3.jpg",
        itemname: "American football ball",
        startingbid: 30,
        buyout: 80,
        category: "Sporting goods",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/sport4.jpg",
        itemname: "Snowboard",
        startingbid: 200,
        buyout: 450,
        category: "Sporting goods",
        condition: "Good"
    },
    {
        image: "/client/src/assets/images/sport5.jpg",
        itemname: "Sports bag",
        startingbid: 60,
        buyout: 115,
        category: "Sporting goods",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/sport6.jpg",
        itemname: "Golf set",
        startingbid: 200,
        buyout: 450,
        category: "Sporting goods",
        condition: "New"
    },
    {
        image: "/client/src/assets/images/sport7.jpg",
        itemname: "Skiing suit",
        startingbid: 80,
        buyout: 150,
        category: "Sporting goods",
        condition: "Good"
    },
    {
        image: "/client/src/assets/images/sport8.jpg",
        itemname: "Sports glasses",
        startingbid: 60,
        buyout: 200,
        category: "Sporting goods",
        condition: "New"
    },
   // Business and industrial
   {
    image: "/client/src/assets/images/business1.jpg",
    itemname: "Printer",
    startingbid: 80,
    buyout: 200,
    category: "Business and industrial",
    condition: "New"
},
{
    image: "/client/src/assets/images/business2.jpg",
    itemname: "Office desk",
    startingbid: 150,
    buyout: 300,
    category: "Business and industrial",
    condition: "Good"
},
{
    image: "/client/src/assets/images/business3.jpg",
    itemname: "Sustainable moving boxes",
    startingbid: 400,
    buyout: 950,
    category: "Business and industrial",
    condition: "Good"
},
{
    image: "/client/src/assets/images/business4.jpg",
    itemname: "Cash register",
    startingbid: 2000,
    buyout: 3000,
    category: "Business and industrial",
    condition: "New"
},
{
    image: "/client/src/assets/images/business5.jpg",
    itemname: "Lock safe",
    startingbid: 1300,
    buyout: 1800,
    category: "Business and industrial",
    condition: "Good"
},
{
    image: "/client/src/assets/images/business6.jpg",
    itemname: "Finger printer",
    startingbid: 1200,
    buyout: 2500,
    category: "Business and industrial",
    condition: "New"
},
{
    image: "/client/src/assets/images/business7.jpg",
    itemname: "Payment mashine",
    startingbid: 900,
    buyout: 1600,
    category: "Business and industrial",
    condition: "New"
},
{
    image: "/client/src/assets/images/business8.jpg",
    itemname: "Shredder",
    startingbid: 400,
    buyout: 600,
    category: "Business and industrial",
    condition: "Good"
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
