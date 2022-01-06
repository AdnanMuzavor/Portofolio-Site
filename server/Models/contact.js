//Schema for project cards
const mongoose = require("mongoose");
const contactdata = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  message: {
    type: String,
  },
});

const Contact = new mongoose.Schema("Contact", contactdata);

module.exports = Contact;
