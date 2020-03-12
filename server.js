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

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://admin:password123@ds047197.mlab.com:47197/heroku_46bg7618");

// const storage = multer.diskStorage({
//    destination: "./public/uploads/",
//    filename: function(req, file, cb){
//       cb(null,"IMAGE-" + Date.now() + path.extname(file.originalname));
//    }
// });

// const upload = multer({
//    storage: storage,
//    limits:{fileSize: 1000000},
// }).single("myImage");

// const router = express.Router();

// router.post('/upload', function (req, res) {
//   upload(req, res, function (err) {
//       iconsole.log("Request ---", req.body);
//       console.log("Request file ---", req.file);//Here you get file.
//       /*Now do where ever you want to do*/
//       if(!err) {
//           return res.send(200).end();
//       }
//   })
// })

//Upload Endpoint -- endpoint we want to send a request to from react and send along our file
// app.post("/api/items", (req, res) => {
//   // req.files is used to access uploaded file (via express-upload)
//   if (req.files === null) {
//     return res.status(400).json({ msg: "No File was Uploaded" })
//   }

//   // We define the .file in react
//   const file = req.files.file
//   //This is how we move the file to the right directory (where we want to put that file)
//   file.mv(`${__dirname}/client/public/images/${file.name}`, err => {
//     //If the path doesn't exist, send a server error and the error itself
//     if (err) {
//       console.error(err)
//       return res.status(500).send(err)
//     }

//     res.json({ fileName: file.name, filePath: `/images/${file.name}` })
//   })
// })
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
