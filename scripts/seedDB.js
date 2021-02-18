require("dotenv").config();
const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/auction");
//hey hope this works!
// for front end make dropdown for categories: Home and garden, Electronics, Fashion, Sporting goods, businessIndustrial
const itemSeed = [
  // Home and garden
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/LGwashingmachine.jpg",
    itemname: "Laundry Machine",
    startingbid: 200,
    buyout: 500,
    category: "homeAndGarden",
    condition: "Good",
  },
  {
    image:
      "https://www.conns.com/media/catalog/product/cache/7b759865e72d36d47f7c757091c35744/m/o/morris_massage_chr.jpg",
    itemname: "Massage Chair",
    startingbid: 500,
    buyout: 1500,
    category: "homeAndGarden",
    condition: "New",
  },
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6313/6313228_sd.jpg;maxHeight=640;maxWidth=550",
    itemname: "Gas Stove",
    startingbid: 800,
    buyout: 2000,
    category: "homeAndGarden",
    condition: "Good",
  },
  {
    image:
      "https://www.breville.com/content/dam/breville/us/assets/espresso/finished-goods/bes980/bes980xl/images/pdp0.jpg",
    itemname: "Coffee Machine",
    startingbid: 300,
    buyout: 600,
    category: "homeAndGarden",
    condition: "Used",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/7178LqeItIL._AC_SL1500_.jpg",
    itemname: "Lawn Mower",
    startingbid: 600,
    buyout: 1000,
    category: "homeAndGarden",
    condition: "Good",
  },
  {
    image:
      "https://secure.img1-fg.wfcdn.com/im/72650748/resize-h600-w600%5Ecompr-r85/6602/66025707/Small+Sofas+%26+Loveseats.jpg",
    itemname: "Couch",
    startingbid: 100,
    buyout: 250,
    category: "homeAndGarden",
    condition: "Used",
  },
  // Electronics
  {
    image:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000",
    itemname: "iPhone 12",
    startingbid: 300,
    buyout: 650,
    category: "electronics",
    condition: "Used",
  },
  {
    image:
      "https://static.bhphoto.com/images/images2500x2500/1560437222_1482504.jpg",
    itemname: "Lenovo Laptop",
    startingbid: 500,
    buyout: 1100,
    category: "electronics",
    condition: "Good",
  },
  {
    image: "https://www.adorama.com/images/Large/acmu0y2lla_4.jpg",
    itemname: "Apple iPad",
    startingbid: 150,
    buyout: 400,
    category: "electronics",
    condition: "Used",
  },
  {
    image: "https://audioengineusa.com/wp-content/uploads/2018/02/black1-1.png",
    itemname: "Speakers",
    startingbid: 30,
    buyout: 75,
    category: "electronics",
    condition: "Bad",
  },
  {
    image:
      "https://cdn.vox-cdn.com/thumbor/8jV10mdym-UDXEnrVmpSbYpyRu4=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13147673/dseifert_180924_2969_0039.jpg",
    itemname: "Roomba Vacuum",
    startingbid: 600,
    buyout: 1100,
    category: "electronics",
    condition: "New",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81e7BUyWTxL._AC_SL1500_.jpg",
    itemname: "Dyson Vacuum",
    startingbid: 85,
    buyout: 250,
    category: "electronics",
    condition: "Used",
  },
  {
    image:
      "https://www.breville.com/content/dam/breville/us/assets/blenders/finished-goods/bbl920/bbl920bss1bus1/images/pdp0.jpg",
    itemname: "Blender",
    startingbid: 30,
    buyout: 90,
    category: "electronics",
    condition: "Used",
  },
  // Fashion
  {
    image: "https://i.ebayimg.com/images/g/cDYAAOSwmU9ePBGF/s-l640.jpg",
    itemname: "Movado Watch",
    startingbid: 50,
    buyout: 125,
    category: "fashion",
    condition: "New",
  },
  {
    image:
      "https://assets.burberry.com/is/image/Burberryltd/4de5bba6b0a7f694e4da34ceb666a79695d7ff84.jpg?$BBY_V2_SL_1x1$&wid=2800&hei=2800",
    itemname: "Burberry Scarf",
    startingbid: 160,
    buyout: 275,
    category: "fashion",
    condition: "New",
  },
  {
    image:
      "https://media.gucci.com/style/DarkGray_Center_0_0_490x490/1535124604/550154_0OLET_1000_001_063_0000_Light.jpg",
    itemname: "Gucci Bag",
    startingbid: 800,
    buyout: 1400,
    category: "fashion",
    condition: "New",
  },
  {
    image:
      "https://cdni.llbean.net/is/image/wim/284397_2772_41?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
    itemname: "Women's Coat",
    startingbid: 80,
    buyout: 190,
    category: "fashion",
    condition: "New",
  },
  {
    image: "https://miro.medium.com/max/1838/1*nvO0aZ1VXTxMpp8YxmPx3Q.jpeg",
    itemname: "Backpack",
    startingbid: 180,
    buyout: 260,
    category: "fashion",
    condition: "New",
  },
  // Sporting goods
  {
    image:
      "https://techcrunch.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-13-at-11.19.07-AM.jpg?w=730&crop=1",
    itemname: "Bicycle",
    startingbid: 1500,
    buyout: 2500,
    category: "sportingGoods",
    condition: "New",
  },
  {
    image: "https://m.media-amazon.com/images/I/5115SW8FP3L._AC_.jpg",
    itemname: "Boxing Gloves",
    startingbid: 40,
    buyout: 95,
    category: "sportingGoods",
    condition: "New",
  },
  {
    image:
      "https://www.gannett-cdn.com/presto/2020/07/18/PCHH/af400e36-18f0-45ca-aabe-bf28ca39ae01-635787293743493871-453653643.jpg?width=534&height=401&fit=crop&format=pjpg&auto=webp",
    itemname: "Football",
    startingbid: 30,
    buyout: 80,
    category: "sportingGoods",
    condition: "New",
  },
  {
    image:
      "https://images.evo.com/imgp/700/181278/741564/burton-custom-snowboard-2021-.jpg",
    itemname: "Snowboard",
    startingbid: 200,
    buyout: 450,
    category: "sportingGoods",
    condition: "Good",
  },
  {
    image: "https://i.ebayimg.com/images/g/yhQAAOSw-FpeZUuO/s-l300.jpg",
    itemname: "Sports Bag",
    startingbid: 60,
    buyout: 115,
    category: "sportingGoods",
    condition: "New",
  },
  {
    image:
      "https://shop.wilson.com/media/catalog/product/cache/38/image/9df78eab33525d08d6e5fb8d27136e95/c/1/c19e6fb453f93430401197b6625ddfdf4b4a3bca_WGGC67000_2019_Profile_SGi_Mens_StandBag.jpg",
    itemname: "Golf Set",
    startingbid: 200,
    buyout: 450,
    category: "sportingGoods",
    condition: "New",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51O%2BxzHku-L._AC_UX569_.jpg",
    itemname: "Sports Glasses",
    startingbid: 60,
    buyout: 200,
    category: "sportingGoods",
    condition: "New",
  },
  // businessIndustrial
  {
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290017cv13d.jpg",
    itemname: "Printer",
    startingbid: 80,
    buyout: 200,
    category: "businessIndustrial",
    condition: "New",
  },
  {
    image:
      "https://ak1.ostkcdn.com/images/products/12556250/Modern-Designs-Grey-MDF-Multifunctional-Office-Desk-With-File-Cabinet-b906367d-5257-42a1-b3eb-e7176c637106_600.jpg?impolicy=medium",
    itemname: "Office Desk",
    startingbid: 150,
    buyout: 300,
    category: "businessIndustrial",
    condition: "Good",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51C0CnN09rL._AC_SY355_.jpg",
    itemname: "Cash Register",
    startingbid: 2000,
    buyout: 3000,
    category: "businessIndustrial",
    condition: "New",
  },
  {
    image:
      "https://images-na.ssl-images-amazon.com/images/I/91Y2HXJCR8L._AC_SX522_.jpg",
    itemname: "Money Safe",
    startingbid: 1300,
    buyout: 1800,
    category: "businessIndustrial",
    condition: "Good",
  },
  {
    image:
      "https://target.scene7.com/is/image/Target/GUEST_b39259f9-9117-4dd4-b211-6ea0a3921d4c?wid=488&hei=488&fmt=pjpeg",
    itemname: "Paper Shredder",
    startingbid: 400,
    buyout: 600,
    category: "businessIndustrial",
    condition: "Good",
  },
];
db.Items.remove({})
  .then(() => db.Items.collection.insertMany(itemSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
