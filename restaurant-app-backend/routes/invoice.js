const express = require('express')
const router = express.Router()
const invoiceControllers = require('../controllers/invoice')

router.post('/',invoiceControllers.createInvoice)
router.get('/',invoiceControllers.getAllInvoice)
router.get('/:id',invoiceControllers.getInvoiceById)


module.exports = router