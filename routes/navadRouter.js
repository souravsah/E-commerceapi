const express = require('express')
const navadController = require('./../controllers/navadController')


const router = express.Router();

router
    .route('/')
    .get(navadController.getallAdd)
    .post(navadController.createAdd)

router
    .route('/:id')
    .get(navadController.getAdd)
    .patch(navadController.updateAdd)
    .delete(navadController.deleteAdd)

module.exports=router;