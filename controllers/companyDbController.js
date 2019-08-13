const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findById: function(req, res) {
    console.log("db.Company" + db.Company);
    db.traded.findById(req.params.id)
      .then(dbCompany => res.json(dbCompany))
      .catch(err => res.status(422).json(err));
  },
//   create: function(req, res) {
//     db.Book.create(req.body)
//       .then(dbBook => res.json(dbBook))
//       .catch(err => res.status(422).json(err));
//   }
};