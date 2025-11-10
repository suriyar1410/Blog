const express=require('express')
const router=express.Router()
const {getAllcategory,Singlecategory,Updatecategory,Deletecategory,Createcategory}=require('../Controllers/category.js')



router.get('/',getAllcategory)
router.get('/:id',Singlecategory)
router.post('/',Createcategory)
router.put('/:id',Updatecategory)
router.delete('/:id',Deletecategory)





module.exports=router;