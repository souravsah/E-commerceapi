const express = require('express')
const authController = require('./../controllers/authController')
const wishlistController=require('./../controllers/wishlistController')
const router =express.Router()

router.use(authController.protect)


router
    .route('/')
    .get(wishlistController.getAllWishlist)
    // .post(
    //     wishlistController.setProductsUserIds,
    //     wishlistController.createWishlist  
    //     );

router
     .route('/:id')
     .get(wishlistController.getWishlist)
     .delete(wishlistController.deleteWishlist)
     
module.exports=router;