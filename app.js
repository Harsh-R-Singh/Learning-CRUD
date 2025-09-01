const express = require('express')
const app = express()
const path =require('path')
const userModel= require("./models/user")
app.set("view engine","ejs")
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))

//Home Page

app.get('/', (req, res) => {
  res.render('index') 
})

//Read Page
app.get('/read',async (req, res) => {
  let allusers=await userModel.find();
  res.render('read',{users:allusers})
})

//Update Page
app.get('/edit/:id',async (req, res) => {
  let edituser=await userModel.findOne({_id:req.params.id});
  res.render('edit',{users:edituser})
})

app.post('/edit/:id',async (req, res) => {
  let { name ,email,image }=req.body;
  let edituser = await userModel.findOneAndUpdate({_id:req.params.id},{ name ,email,image },{new:true});
  res.redirect('/read')
})

//Delete User
app.get('/delete/:id',async (req, res) => {
  let deleteuser=await userModel.findOneAndDelete({_id:req.params.id});
  res.redirect('/read')
})

//Create User
app.post('/create', async (req, res) => {
  let { name ,email,image }=req.body;
  let createduser = await userModel.create({
    name,
    email,
    image
  });
  res.redirect('/read');
})

app.listen(3000)