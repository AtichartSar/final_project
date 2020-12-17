const express = require('express')
const router = express.Router()
const reviewCotrollers=require('../controllers/review')

router.post('/',reviewCotrollers.createReview)
router.get('/',reviewCotrollers.getAllReview)
router.get('/:id',reviewCotrollers.getReviewByMenuId)

module.exports =router