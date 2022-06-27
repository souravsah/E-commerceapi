const express = require('express')
const authController = require('./../controllers/authController')
const router = express.Router()



router.post('/signup',authController.signup)
router.post('/login',authController.login)
router.get('/logout',authController.logout)
router.post('/forgotPassword',authController.forgotPassword)
router.patch('/resetPassword',authController.resetPassword)
router.use(authController.protect);
router.patch('/updatemypassword',authController.updatePassword)

module.exports=router