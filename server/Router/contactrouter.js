import expressAsyncHandler from "express-async-handler";

const express = require("express");
const app = express();

//Using app to create contactrouter

const contactrouter = express.Router();

//To post contact message
contactrouter.post("/",expressAsyncHandler(async(req,res)=>{

}))

//To get all posted messages
contactrouter.post("/getmessages",expressAsyncHandler(async(req,res)=>{

    }))


export default contactrouter;
