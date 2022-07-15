const express =require('express')
const authController = require('./../controllers/authController')
const cartController = require('./../controllers/cartController')
const router = express.Router()

router.use(authController.protect)


router
    .route('/')
    .get(cartController.getAllCart)
    .post(
        cartController.setProductsUserIds,
        cartController.createCart  
        );

router
     .route('/:id')
     .get(cartController.getCart)
     .delete(cartController.deleteCart)
     
module.exports=router;