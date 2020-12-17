const express = require('express')
const router = express.Router()
const menuControllers = require('../controllers/menu')

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


router.post('/',middleupload,menuControllers.createMenu)
router.get('/',menuControllers.getAllMenus)
router.get('/:id',menuControllers.getMenuById)
router.get('/group/:id',menuControllers.getMenuByGroup)
router.put('/:id',menuControllers.upDateMenu)
router.delete('/:id',menuControllers.deleteMenu)

module.exports = router