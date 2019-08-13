require("dotenv").config();
const axios = require("axios");
const db = require("../../models/companiesData");
const apiToken = process.env.apiToken;
const router = require("express").Router();
const companyController = require("../../controllers/companyController");
const companyDbController = require("../../controllers/companyDbController");

router.route("/")
.get(companyController.findAll)
// .post(companyController.create)

router.route("/:id")
.get(companyDbController.findById);

console.log("company.js file");

module.exports = router;