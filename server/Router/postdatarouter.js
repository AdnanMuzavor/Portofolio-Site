const express = require("express");
import expressAsyncHandler from "express-async-handler";
//Creating router to post data

const datarouter = express.Router();

//For posting Images and content
datarouter.post(
  "/postdata",
  expressAsyncHandler(async (req, res) => {})
);

//For getting images and content
datarouter.get(
  "/",
  expressAsyncHandler(async (req, res) => {})
);

export default datarouter;
