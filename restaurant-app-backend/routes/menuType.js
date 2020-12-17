const express = require('express')
const router = express.Router()
const menuTypeControllers = require('../controllers/menuType')

const multer = require('multer')
const uploadMulter = require('../config/upload/upload')
const middleupload =(req,res,next)=>{
    uploadMulter(req, res, function (err) {
          if (err instanceof multer.MulterError) {
            console.log(err);
            res.json({ 'message':err.message })
        }
        else if (err) {
            console.log(err);
            res.json({ 'message':err.message })
        }
        next()
    })

}
router.post('/',middleupload,menuTypeControllers.createMenuType)
router.get('/',menuTypeControllers.getAllmenuType)


module.exports=router