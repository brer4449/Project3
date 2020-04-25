const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const multer =require('multer');
// API Routes

router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  //changed to public from build
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});


var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${file.originalname}`)
  },
  fileFilter: (req, file, cb) => {
      const ext = path.extname(file.originalname)
      if (ext !== '.jpg' || ext !== '.png') {
          return cb(res.status(400).end('only jpg, png are allowed'), false);
      }
      cb(null, true)
  }
})

var upload = multer({ storage: storage }).single("file")


//=================================
//             Product
//=================================

router.post("/uploadImage", (req, res) => {
  

  upload(req, res, err => {
      if (err) {
          return res.json({ success: false, err })
      }
      return res.json({ success: true, image: res.req.file.path, fileName: res.req.file.filename })
  })

});



module.exports = router;
