const express = require('express');
const router = express.Router();
const {getAllPost,SinglePost,CreatePost,UpdatePost,DeletePost,getPostsByCategoryId} = require('../Controllers/post.js');

const authMiddleware = require('../Middleware/auth'); 

router.get('/', getAllPost);
router.get('/category/:categoryid', getPostsByCategoryId);
router.get('/:id', SinglePost);
router.post('/', authMiddleware, CreatePost); 
router.put('/:id', authMiddleware, UpdatePost);
router.delete('/:id', authMiddleware, DeletePost);

module.exports = router;
