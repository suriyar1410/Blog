const express=require('express')
const mongoose=require('mongoose')
require('dotenv/config')
const cors = require('cors');
const postroutes=require('./Routers/post.js')
const categoryroutes=require('./Routers/category.js')
const app=express()


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(' Database connected...');
    app.listen(process.env.PORT, () => {
      console.log(' Server started on port', process.env.PORT);
    });
  })
  .catch((err) => console.error('Database connection error:', err));


app.use('/api/posts',postroutes)
app.use('/api/category',categoryroutes)