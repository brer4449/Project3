const db = require("../models");


// Defining methods for the auctionController
module.exports = {

    //**Get **/
  findAll: function(req, res) {
    db.Items
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //???????????????//
  findById: function(req, res) {
    db.Items

      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //*************** */

  ////Post******//
  create: function(req, res) {
    db.Items

      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

//   update: function(req, res) {
//     db.Items
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//Delete//
  remove: function(req, res) {
    db.Items

      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
