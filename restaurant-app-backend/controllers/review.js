const db = require('../models/index')
const getAllReview = async (req, res) => {

    const allReviews = await db.Review.findAll({ include: [db.Menu] });
    res.status(200).send(allReviews);
}
const createReview = async (req, res) => {
    const { rate, description,menu_id } = req.body
    console.log("menu_id",menu_id)
    const newReview = await db.Review.create({
        description: description,
        rate: rate,
        menu_id:menu_id
    })
    res.status(201).send(newReview)
}


const getReviewByMenuId = async (req, res) => {
    const targetId = req.params.id
    const targetReviews = await db.Review.findAll({ where: { menu_id: targetId } });
    const lengthRate = targetReviews.length;

    let filte1 = targetReviews.filter(data => data.rate === 1)
    let filte2 = targetReviews.filter(data => data.rate === 2)
    let filte3 = targetReviews.filter(data => data.rate === 3)
    let filte4 = targetReviews.filter(data => data.rate === 4)
    let filte5 = targetReviews.filter(data => data.rate === 5)
    let rate1,rate2,rate3,rate4,rate5;
    if (filte1 != 0) {
         rate1 = targetReviews.filter(data => data.rate === 1).length / lengthRate * 100
    }
    if (filte2 != 0) {
         rate2 = targetReviews.filter(data => data.rate === 2).length / lengthRate * 100
    }
    if (filte3 != 0) {
         rate3 = targetReviews.filter(data => data.rate === 3).length / lengthRate * 100
    }
    if (filte4 != 0) {
         rate4 = targetReviews.filter(data => data.rate === 4).length / lengthRate * 100
    }
    if (filte5 != 0) {
         rate5 = targetReviews.filter(data => data.rate === 5).length / lengthRate * 100
    }
    const payload = {
        rate1:rate1,
        rate2:rate2,
        rate3:rate3,
        rate4:rate4,
        rate5:rate5,
        review:targetReviews

    }
    console.log(payload);
    res.status(200).send(payload)
}


module.exports = {
    createReview,
    getAllReview,
    getReviewByMenuId
}