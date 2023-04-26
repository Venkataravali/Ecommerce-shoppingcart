const express = require("express");
const app = express(); //creating app
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth");

dotenv.config();


mongoose.connect(process.env.MONGO_URL)
//that above is ur secret key if you post this in any github or social media if anybody access this they can create collections and all
//so hide in .env file 
.then(()=>console.log("DB connection is successfull "))
.catch((err)=> console.log(err))

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

 
//Creating REST api's in route folder and used here with the help of middleware 

  //whenever you go to this end point you will get usertest 
//to run this application it should listen any port number


app.listen(process.env.PORT || 5001, () => {
    console.log("Backend server is running!");
  });