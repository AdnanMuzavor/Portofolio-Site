//Model for Gallery Images + Skill Images + Project-card

const mongoose = require("mongoose");
const Gallery = new mongoose.Schema({
  image: {
    type: String,
  },
  content: {
    type: String,
  },
  category:{
      type:String
  }
});

const GalleryImg = new mongoose.model("GalleryImg", Gallery);

module.exports = GalleryImg;
