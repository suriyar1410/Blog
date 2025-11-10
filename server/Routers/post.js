const express=require('express')
const router=express.Router()
const {getAllPost,SinglePost,CreatePost,UpdatePost, DeletePost,getPostsByCategoryId}=require('../Controllers/post.js')


router.get('/',getAllPost)
router.get('/category/:categoryid',getPostsByCategoryId)
router.get('/:id',SinglePost)
router.post('/',CreatePost)
router.put('/:id',UpdatePost)
router.delete('/:id',DeletePost)


module.exports=router;