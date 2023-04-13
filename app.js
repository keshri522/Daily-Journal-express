//jshint esversion:6
const mongoose=require("./Module/mongoose.js")
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// importing dotenv ..
const dotenv = require("dotenv")
dotenv.config();
const{model,Schema}=mongoose;
// creating a Schema for the Documents..
const dataSchema=new Schema({
  Name:String,
  Body:String
})
// creating a Collection in which all the documents is stored..
const Content=new model("Content",dataSchema);
// importing lodash here to.
const _=require("lodash")

const homeStartingContent = "A home, or domicile, is a space used as a permanent or semi-permanent residence for one or many humans, and sometimes various companion animals. It is a fully or semi sheltered space and can have both interior and exterior aspects to it. Homes provide sheltered spaces, for instance rooms, where domestic activity can be performed such as sleeping, preparing food, eating and hygiene as well as providing spaces for work and leisure such as remote working, studying and playing.";
const aboutContent = "A website is a collection of many web pages, and web pages are digital files that are written using HTML(HyperText Markup Language). To make your website available to every person in the world, it must be stored or hosted on a computer connected to the Internet round a clock. Such computers are known as a Web Server.The website’s web pages are linked with hyperlinks and hypertext and share a common interface and design. The website might also contain some additional documents and files such as images, videos, or other digital assets With the Internet invading every sphere, we see websites for all kinds of causes and purposes. So, we can also say that a website can also be thought of as a digital environment capable of delivering information and solutions and promoting interaction between people, places, and things to support the goals of the organization it was created for.";


const app = express();
// this will told express we are using the Embedded Javascript Templating engine here
app.set('view engine', 'ejs')
// require body parser here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// this is just a middleware which will sever all the static file in our system to Server....that are present in the public folder
app.use(express.static("public"));
// here postData is global variable that be access in entire program
const postData = []

// making a APi here for home page
app.get('/', async (req, res) => {
  // finding all the  data which are inside the collection Content inside Db
  const alldata = await Content.find({});
  console.log(alldata);
  res.render('home', { homeContent: homeStartingContent, publishData: alldata });
})
// making a APi here for about page.
app.get("/about", async(req, res) => {
  try {
    res.render('about', { aboutPage: aboutContent })
  } catch (error) {
    res.status(400).send(error)
  }
  

})
// making a APi here for contact page.
app.get("/contact", (req, res) => {
  res.render('contact')
})

// here for Compose path making api
app.get("/compose", async (req, res) => {
  

 
  res.render('compose');
})
// using route in express to redirected to any paths...
// using params based on the user type path we show some data here..

app.get("/post/:path",async (req,res)=>{
  const alldata = await Content.find({});

alldata.forEach(element => {
  // using lodash function lowercase to convert the req.params or element.Title into lower case and when user add a space in paths also ignore the spcaes with the help of lodash so it basically matches the route and show data..
  if(_.lowerCase(req.params.path)===_.lowerCase(element.Name)){
    // _.lowercase will conver into smallletter and also remove the space between/after/before and make single word without any space like another time to anothertime.. and then compare the foreach loop
    // now stroring the value when if condtions matches ..
    const Title= element.Name;
    const Post=element.Body;
    // sending the DynamicTitle,DynamicPost to the post.ejs to make it dynamic according to the user enter the post/pathname if conditon is true then it hold the  particular values of Title or Post in a variable and send the variable to post.ejs file then render this..
    res.render("post",{DynamicTitle:Title,DynamicPost:Post})
  }
});
})

// making post request for compose route..
app.post("/compose", (req, res) => {
    
 
    Title=req.body.additems;
    Post= req.body.addtextarea;

  // creating a Documents which will store all the title and post as a object in the collections.
  const AddItem=new Content({
     Name:Title,
     Body:Post
  })
  AddItem.save()
  // postData.push(data)
  res.redirect('/')

})
// for the button Create new journal
app.post("/", (req, res) => {
  res.redirect("/compose")
})

const port = process.env.Port || 5000
app.listen(port, (err) => {
  if (err) {
    console.log(`The Error is ${err}`)
  }
  else {
    console.log(`Server is running at ${port}`)
  }
})




