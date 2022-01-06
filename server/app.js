//Getting Express
const express = require("express");
const app = express();

//Enabling use of cookie-parser
const cookieparser = require("cookie-parser");
app.use(cookieparser());

//Enabling use of .env
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

//To connect with database
require("./database/connection")
const port = process.env.PORT || 8000;

app.listen((req, res) => {
  console.log(`Listening to port no ${port}`);
});
