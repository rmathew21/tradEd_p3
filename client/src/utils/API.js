import axios from "axios";
// require("dotenv").config();
//const db = require("../");
// const apiToken = process.env.apiToken;

export default {
    //get companies
    getCompanies: function(q) {
        return axios.get("/api/company", { params: {q: "name:" + q}});
    },
    //save all companies and symbols
    saveCompanies: function(companyData) {
        return axios.post("/api/company", companyData);
    },
}