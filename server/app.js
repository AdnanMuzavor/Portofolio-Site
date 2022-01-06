//Getting Express
const express = require("express");
const app = express();

//Enabling use of cookie-parser
const cookieparser = require("cookie-parser");
app.use(cookieparser());

//Enabling use of .env
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

//To enable server to understand json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Using routers created
import datarouter from "./Router/datarouter";
import contactrouter from "./Router/contactrouter";
app.use("/api/postdata", datarouter); 
app.use("/api/contactme", contactrouter);

//To connect with database
require("./database/connection");
const port = process.env.PORT || 8000;

app.listen((req, res) => {
  console.log(`Listening to port no ${port}`);
});
