const express = require("express");
const fileUpload = require("express-fileupload")
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//To use express-fileupload
app.use(fileUpload())
// Serve up static assets (usually on heroku)
// app.use(express.static(path.join(__dirname, './client/build')));
//     app.get('/', (req, res) => {
//         res.sendFile(path.join(__dirname, './client/build/'))
//     });


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, './client/build')));

}
// Add routes, both API and view
app.use(routes);

//Serve static assets (build folder) if in production

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/auction");

// mongoose.connect(process.env.MONGODB_URI || "mongodb://admin:password123@ds047197.mlab.com:47197/heroku_46bg7618");

// const storage = multer.diskStorage({
//    destination: "./public/uploads/",
//    filename: function(req, file, cb){
//       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//    }
// });


 app.use(routes);
// Add routes, both API and view


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/auction", {
  useNewUrlParser:true
});


// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
