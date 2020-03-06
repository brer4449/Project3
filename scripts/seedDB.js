const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/auction"
  );


  // for front end make dropdown for categories: Home and garden, Electronics, Fashion, Sporting goods, businessIndustrial
  const itemSeed = [
      // Home and garden
      {
          _id: 1,
          image: "/images/home1.jpg",
          itemname: "Laundry mashine",
          startingbid: 200,
          buyout: 500,
          category: "homeAndGarden",
          condition: "Good"
      },
      {
        _id: 2,
        image: "/images/home2.jpg",
        itemname: "Massage chair",
        startingbid: 500,
        buyout: 1500,
        category: "homeAndGarden",
        condition: "New"
    },
    {
        _id: 3,
        image: "/images/home3.jpg",
        itemname: "Gas stove",
        startingbid: 800,
        buyout: 2000,
        category: "homeAndGarden",
        condition: "Good"
    },
    {
        _id: 4,
        image: "/images/home4.jpg",
        itemname: "Coffee mashine",
        startingbid: 300,
        buyout: 600,
        category: "homeAndGarden",
        condition: "Used"
    },
    {
        _id: 5,
        image: "/images/home5.jpg",
        itemname: "Patio set",
        startingbid: 40,
        buyout: 100,
        category: "homeAndGarden",
        condition: "Bad"
    },
    {
        _id: 6,
        image: "/images/home6.jpg",
        itemname: "Lawn mashine",
        startingbid: 600,
        buyout: 1000,
        category: "homeAndGarden",
        condition: "Good"
    },
    {
        _id: 7,
        image: "/images/home7.jpg",
        itemname: "Couch",
        startingbid: 100,
        buyout: 250,
        category: "homeAndGarden",
        condition: "Used"
    },
    {
        _id: 8,
        image: "/images/home8.jpg",
        itemname: "Dining set",
        startingbid: 50,
        buyout: 120,
        category: "homeAndGarden",
        condition: "Bad"
    },
    // Electronics
    {
        _id: 9,
        image: "/images/electronics1.jpg",
        itemname: "Iphone 10",
        startingbid: 300,
        buyout: 650,
        category: "electronics",
        condition: "Used"
    },
    {
        _id: 10,
        image: "/images/electronics2.jpg",
        itemname: "Lenovo laptop",
        startingbid: 500,
        buyout: 1100,
        category: "electronics",
        condition: "Good"
    },
    {
        _id: 11,
        image: "/images/electronics3.jpg",
        itemname: "Apple tablet",
        startingbid: 150,
        buyout: 400,
        category: "electronics",
        condition: "Used"
    },
    {
        _id: 12,
        image: "/images/electronics4.jpg",
        itemname: "LG Smart TV",
        startingbid: 550,
        buyout: 1000,
        category: "electronics",
        condition: "new"
    },
    {
        _id: 13,
        image: "/images/electronics5.jpg",
        itemname: "Patio Set",
        startingbid: 30,
        buyout: 75,
        category: "electronics",
        condition: "Bad"
    },
    {
        _id: 14,
        image: "/images/electronics6.jpg",
        itemname: "Lawn Mashine",
        startingbid: 600,
        buyout: 1100,
        category: "electronics",
        condition: "New"
    },
    {
        _id: 15,
        image: "/images/electronics7.jpg",
        itemname: "Vacuum Cleaner",
        startingbid: 85,
        buyout: 250,
        category: "electronics",
        condition: "Used"
    },
    {
        _id: 16,
        image: "/images/electronics8.jpg",
        itemname: "Blender",
        startingbid: 30,
        buyout: 90,
        category: "electronics",
        condition: "Used"
    },
// Fashion
    {
        _id: 17,
        image: "/images/fashion1.jpg",
        itemname: "DW women's watch",
        startingbid: 50,
        buyout: 125,
        category: "fashion",
        condition: "New"
    },
    {
        _id: 18,
        image: "/images/fashion2.jpg",
        itemname: "Cartier ring",
        startingbid: 600,
        buyout: 1250,
        category: "fashion",
        condition: "Used"
    },
    {
        _id: 19,
        image: "/images/fashion3.jpg",
        itemname: "Burberry women's scarf",
        startingbid: 160,
        buyout: 275,
        category: "fashion",
        condition: "New"
    },
    {
        _id: 20,
        image: "/images/fashion4.jpg",
        itemname: "Gucci women's bag",
        startingbid: 800,
        buyout: 1400,
        category: "fashion",
        condition: "New"
    },
    {
        _id: 21,
        image: "/images/fashion5.jpg",
        itemname: "Women's coat",
        startingbid: 80,
        buyout: 190,
        category: "fashion",
        condition: "New"
    },
    {
        _id: 22,
        image: "/images/fashion6.jpg",
        itemname: "Men's bracelet",
        startingbid: 300,
        buyout: 500,
        category: "fashion",
        condition: "Used"
    },
    {
        _id: 23,
        image: "/images/fashion7.jpg",
        itemname: "Men's bag",
        startingbid: 180,
        buyout: 260,
        category: "fashion",
        condition: "New"
    },
    {
        _id: 24,
        image: "/images/fashion8.jpg",
        itemname: "Men's coat",
        startingbid: 60,
        buyout: 140,
        category: "fashion",
        condition: "Good"
    },
    // Sporting goods
    {
        _id: 25,
        image: "/images/sport1.jpg",
        itemname: "Bicycle",
        startingbid: 1500,
        buyout: 2500,
        category: "sportingGoods",
        condition: "New"
    },
    {
        _id: 26,
        image: "/images/sport2.jpg",
        itemname: "Boxing gloves",
        startingbid: 40,
        buyout: 95,
        category: "sportingGoods",
        condition: "New"
    },
    {
        _id: 27,
        image: "/images/sport3.jpg",
        itemname: "American football ball",
        startingbid: 30,
        buyout: 80,
        category: "sportingGoods",
        condition: "New"
    },
    {
        _id: 28,
        image: "/images/sport4.jpg",
        itemname: "Snowboard",
        startingbid: 200,
        buyout: 450,
        category: "sportingGoods",
        condition: "Good"
    },
    {
        _id: 29,
        image: "/images/sport5.jpg",
        itemname: "Sports bag",
        startingbid: 60,
        buyout: 115,
        category: "sportingGoods",
        condition: "New"
    },
    {
        _id: 30,
        image: "/images/sport6.jpg",
        itemname: "Golf set",
        startingbid: 200,
        buyout: 450,
        category: "sportingGoods",
        condition: "New"
    },
    {
        _id: 31,
        image: "/images/sport7.jpg",
        itemname: "Skiing suit",
        startingbid: 80,
        buyout: 150,
        category: "sportingGoods",
        condition: "Good"
    },
    {
        _id: 32,
        image: "/images/sport8.jpg",
        itemname: "Sports glasses",
        startingbid: 60,
        buyout: 200,
        category: "sportingGoods",
        condition: "New"
    },
   // businessIndustrial
   {
    _id: 33,
    image: "/images/business1.jpg",
    itemname: "Printer",
    startingbid: 80,
    buyout: 200,
    category: "businessIndustrial",
    condition: "New"
},
{
    _id: 34,
    image: "/images/business2.jpg",
    itemname: "Office desk",
    startingbid: 150,
    buyout: 300,
    category: "businessIndustrial",
    condition: "Good"
},
{
    _id: 35,
    image: "/images/business3.jpg",
    itemname: "Sustainable moving boxes",
    startingbid: 400,
    buyout: 950,
    category: "businessIndustrial",
    condition: "Good"
},
{
    _id: 36,
    image: "/images/business4.jpg",
    itemname: "Cash register",
    startingbid: 2000,
    buyout: 3000,
    category: "businessIndustrial",
    condition: "New"
},
{
    _id: 37,
    image: "/images/business5.jpg",
    itemname: "Lock safe",
    startingbid: 1300,
    buyout: 1800,
    category: "businessIndustrial",
    condition: "Good"
},
{
    _id: 38,
    image: "/images/business6.jpg",
    itemname: "Finger printer",
    startingbid: 1200,
    buyout: 2500,
    category: "businessIndustrial",
    condition: "New"
},
{
    _id: 39,
    image: "/images/business7.jpg",
    itemname: "Payment mashine",
    startingbid: 900,
    buyout: 1600,
    category: "businessIndustrial",
    condition: "New"
},
{
    _id: 40,
    image: "/images/business8.jpg",
    itemname: "Shredder",
    startingbid: 400,
    buyout: 600,
    category: "businessIndustrial",
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
