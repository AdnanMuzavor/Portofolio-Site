
const mongoose= require("mongoose");

const DB=process.env.DATABASE;

mongoose.connect(DB,{useUnifiedTopology:true,
   })
.then(()=>{
    console.log("Connection with mo mongodb done.")
})
.catch((e)=>{
    console.log(e);
})