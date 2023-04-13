const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/EjsTemplateDb",{ useNewUrlParser: true }).then(()=>console.log("Successfully connected  to MongDb")).catch((err)=>console.log(err));

module.exports=mongoose;