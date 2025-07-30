// const port = 4000;
// const express = require("express");
// const app = express();
// const mongoose =require("mongoose");
// const jwt =require("jsonwebtoken");
// const multer =require("multer");
// const path = require("path");
// const cors = require("cors");
// const { type } = require("os");

// app.use(express.json());
// app.use(cors());

// // database connection with mongodb
// // mongoose.connect("mongodb+srv://karthikria:Nathiya@30@cluster0.aclz4pv.mongodb.net/e-commerce");
// require('dotenv').config();
// mongoose.connect(process.env.MONGO_URL);

// // api creation

// app.get("/",(req,res)=>{
//     res.send("express app is running");
// })

// //image storage engine

// const storage =multer.diskStorage({
//     destination : './upload/images',
//     filename:(req,file,cb)=>{
//         return cb(null,`${file.fieldname}_${Date.now()} ${path.extname(file.originalname)}`)
//     }
// })


// const upload = multer({storage:storage})
// // creating upload endpoint for images
// app.use('/images',express.static('upload/images'))

// app.post("/upload",upload.single('product'),(req,res)=>{
//     res.json({
//         success:1,
//         image_url:`http://localhost:${port}/images/${req.file.filename}`
//     })
// })

// // schema for creating products
// const product =mongoose.model("product",{
//     id:{
//         type: Number,
//         required:true,
//     },
//     name:{
//         type:String,
//         required:true,
//     },
//     img:{
//         type:String,
//         required:true,
//     },
//     category:{
//         type:String,
//         required:true,
//     },
//     new_price:{
//         type:Number,
//         required:true,
//     },
//     old_price:{
//         type:Number,
//         required:true,
//     },
//     date:{
//         type:String,
//         default:Date.now,
//     },
//     available:{
//        type:Boolean,
//        default:true,
//     }
// })

// app.post('/addproduct',async(req,res)=>{
//     // let products =await product.find({});
//     let products = await product.find({});
// let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

//     // let id;
//     // if(product.length>0){
//     //     let last_product_array =product.slice(-1);
//     //     let last_product = last_product_array[0];
//     //     id =last_product.id+1;
//     // }
//     // else{
//         // id=1;
//     // }
//     const product =new product({
//         id:id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price,
//     });
//     console.log(product);
//     await product.save();
//     console.log("saved");
//     res.json({
//         success:true,
//         name :req.body.name,
//     })
// })
// // cteating api for deleting product

// app.post('/removeproduct',async(req,res)=>{
//     await product.findOneAndDelete({id:req.body.id});
//     console.log("removed")
//     res.json({
//         success :true,
//         name:req.body.name
//     })
// })

// // creating api for getting all products 
// app.get('/allproducts',async (req,res)=>{
//     let products = await product.find({});
//     console.log("all products fetched ");
//     res.send(products);
// })


// //shema creating for user model
// const Users =mongoose.model('Users',{
//     name:{
//         type:String,

//     },
//     email:{
//         type:String,
//         unique:true,
//     },
//     password:{
//         type:String,
//     },
//     cartData:{
//         type:Object,
//     },
//     date:{
//         type:Date,
//         default:Date.now,
//     }
// })

// // creating endpoint for registering thre Users
// app.post('/signup',async (req,res)=>{
//     let check = await Users.findOne({email:req.body.email});
//     if(check){
//         return res.status(400).json({success:false,error:"existing user found with same email id"})
//     }
//     let cart = {};
//     for (let i = 0; i < 300; i++) {
//          cart[i]=0;
//     }
//     const user =new User({
//         name:req.body.username,
//         email:req.boddy.email,
//         password:req.body.password,
//         cartData:cart,
//     })
//    await user.save();
//    const data ={
//     user:{
//         id: user.id
//     }
//    }
//    const token =jwt.sign(data,'secret_ecom');
//    res.json({success:true,token})

// })

// //creating the endpoint for user login
// app.post('/login',async(req,res)=>{
//     let user =await Users.findOne({email:req.body.email});
//     if(user){
//         const passcompare = rwq.body.password === user.password;
//         if(passcompare){
//             const data ={
//                 user :{
//                     id:user.id
//                 }
//             }
//             const token =jwt.sign(data,'secret_ecom');
//             res.json({success:true,token});
//         }
//         else{
//             res.json({success:false,errors:"wrong passwords"});
//         }
//     }
//     else{
//         res.json({success:false,errors:"wrong email id"});
//     }
// })
// //creating end point for newcollection database
// app.get('/newcollections',async(req,res)=>{
//     let products =await Product.find({});
//     let newcollection =products.slice(1).slice(-8);
//     console.log("newcollection fetched");
//     res.send(newcollection);
// })

// //creating end point for popular in women

// app.get('/popularinwomen',async(req,res)=>{
//     let products = await Product.find({category:'women'});
//     let popular_in_women =products.slice(0,4);
//     console.log(" popular in women fetched");
//     res.send(popular_in_women);
// })

// //creating middleware to fetch user
// const fetchUser =async ((req,res)=>{
//     const token =req.header('auth-token');
//     if(!token){
//         res.status(401).send({errors:"please authenticate using valid token"})
//     }
//     else{
//         try {
//            const data =jwt.verify(token,'secret_ecom'); 
//            req.user = data.user;
//            next();
//         } catch (error) {
//             res.status(401).send({errors:"please autheticate using a valid token"})
//         }
//     }

// })
// //creating end point for adding productd in cartData
// app.post('/addtocart',fetchUser,async (req,res)=>{
//         console.log("added",req.body.itemId);
//     let userData =await Users.findOne({_id:req.user.id});
//     userData.cartData[req.body.itemId] +=1;
//     await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.send("added");

// })
// // creating endpoint to rmove from cartData
// app.post('/removefromcart',fetchUser,async (req,res)=>{
//     console.log("removed",req.body.itemId);
//     let userData =await Users.findOne({_id:req.user.id});
//     if(userData.cartData[req.body.itemId]>0)
//     userData.cartData[req.body.itemId] -=1;
//     await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
//     res.send("removed");

// })

// //creating end point to cart data
// app.post("/getcart",fetchUser,async (req,res)=>{
//     console.log("getcart")
//     let userData = await Users.findOne({_id:req.user.id});
//     res.json(userData.cartData);

// })



// app.listen(port,(error)=>{
//     if(!error){
//         console.log("server running on port  "+port)

//     }
//     else{
//         console.log("error :"+error)
//     }
// })
require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

// Connect to MongoDB
console.log("Loaded MONGO_URL from .env:", process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ DB Connection Error:", err));

// API status check
app.get("/", (req, res) => {
  res.send("✅ Express app is running");
});

// Image storage setup
const storage = multer.diskStorage({
  destination: './upload/images',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  }
});
const upload = multer({ storage });
app.use('/images', express.static('upload/images'));

// Upload endpoint
app.post("/upload", upload.single('product'), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${port}/images/${req.file.filename}`
  });
});

// Product Schema
const ProductModel = mongoose.model("Product", {
  id: Number,
  name: String,
  image: String,
  category: String,
  new_price: Number,
  old_price: Number,
  date: { type: Date, default: Date.now },
  available: { type: Boolean, default: true }
});

// Add Product
app.post('/addproduct', async (req, res) => {
  let products = await ProductModel.find({});
  let id = products.length > 0 ? products[products.length - 1].id + 1 : 1;

  const newProduct = new ProductModel({
    id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  await newProduct.save();
  console.log("✅ Product saved");
  res.json({ success: true, name: req.body.name });
});

// Remove Product
app.post('/removeproduct', async (req, res) => {
  await ProductModel.findOneAndDelete({ id: req.body.id });
  console.log("❌ Product removed");
  res.json({ success: true, id: req.body.id });
});

// Get All Products
app.get('/allproducts', async (req, res) => {
  let products = await ProductModel.find({});
  res.send(products);
});

// User Schema
const Users = mongoose.model("Users", {
  name: String,
  email: { type: String, unique: true },
  password: String,
  cartData: Object,
  date: { type: Date, default: Date.now }
});

// Signup
app.post('/signup', async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res.status(400).json({ success: false, error: "User already exists with this email" });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) cart[i] = 0;

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
    cartData: cart
  });

  await user.save();

  const data = { user: { id: user.id } };
  const token = jwt.sign(data, 'secret_ecom');
  res.json({ success: true, token });
});

// Login
app.post('/login', async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });
  if (user) {
    const passCompare = req.body.password === user.password;
    if (passCompare) {
      const data = { user: { id: user.id } };
      const token = jwt.sign(data, 'secret_ecom');
      return res.json({ success: true, token });
    } else {
      return res.json({ success: false, errors: "Wrong password" });
    }
  } else {
    return res.json({ success: false, errors: "Email not found" });
  }
});

// Get New Collections
app.get('/newcollections', async (req, res) => {
  let products = await ProductModel.find({});
  let newcollection = products.slice(-8);
  res.send(newcollection);
});

// Popular in Women
app.get('/popularinwomen', async (req, res) => {
  let products = await ProductModel.find({ category: 'women' });
  let popular = products.slice(0, 4);
  res.send(popular);
});

// Middleware to verify user token
const fetchUser = async (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send({ errors: "No token provided" });

  try {
    const data = jwt.verify(token, 'secret_ecom');
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).send({ errors: "Invalid token" });
  }
};

// Add to Cart
app.post('/addtocart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Item added to cart");
});

// Remove from Cart
app.post('/removefromcart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0) {
    userData.cartData[req.body.itemId] -= 1;
  }
  await Users.findOneAndUpdate({ _id: req.user.id }, { cartData: userData.cartData });
  res.send("Item removed from cart");
});

// Get Cart
app.post('/getcart', fetchUser, async (req, res) => {
  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});
// Dummy data (or you might fetch from DB)
const allProducts = require("./data"); // or hardcoded array

app.get("/allproducts", (req, res) => {
  res.json(allProducts);
});


// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
