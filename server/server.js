const express=require('express')
const mongoose=require('mongoose')
require('dotenv/config')
const cors = require('cors');
const postroutes=require('./Routers/post.js')
const categoryroutes=require('./Routers/category.js')
const app=express()


app.use(express.json());
app.use(cors());

mongoose.connect(String(process.env.MONOGODB_URI))
.then(()=>{console.log('Database connected...')})
.then(()=>{app.listen(process.env.PORT,()=>{console.log("server start...")})})
.catch((err)=>{console.log(err)})

app.use('/api/posts',postroutes)
app.use('/api/category',categoryroutes)