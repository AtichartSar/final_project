const express = require('express')
const router = express.Router()
const invoiceControllers = require('../controllers/invoice')
const passport = require('passport')

//middle ware ต้อง login ก่อนถึงสามารถ
const authentication = passport.authenticate('nameJwt',{session:false});

router.post('/',authentication,invoiceControllers.createInvoice)
router.get('/',invoiceControllers.getAllInvoice)
router.get('/:id',invoiceControllers.getInvoiceById)


module.exports = router