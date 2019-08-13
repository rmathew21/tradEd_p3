const Company = require("../models/companiesData");
const SeedArray = require("./companies.json");

const mongoose = require("mongoose");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/userData";
let counter = 0;
const disconnectDB = () => mongoose.disconnect();

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true
})
  .then(() => {console.log("MongoDB ready to be seeded")
    
  SeedArray.forEach((object => {
    const company = new Company({
         name: object.name,
         symbol: object.symbol
     });
     company.save((err,result) => {
        counter++;
        if (counter === SeedArray.length) {
            console.log("=========Seeding Completed=========")
            disconnectDB()
        }
        else {console.log("Company added")}
     });
     
 }));
 
 
 
 
  
  
  
 })
  .catch(err => console.log(err));



// const disconnectDB = () => mongoose.disconnect();
