const mongoose=require("mongoose")
const dotenv=require("dotenv");
dotenv.config()
mongoose.connect(`mongodb+srv://rkeshri522:${process.env.Mongo_Password}@cluster0.pmobmox.mongodb.net/EjsTemplateDb`,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log("Successfully connected  to MongDb")).catch((err)=>console.log(err));

module.exports=mongoose;