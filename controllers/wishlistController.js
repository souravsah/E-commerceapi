const Wishlist = require('./../models/wishlistModel')
const factory = require('./handlerFactory')
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

exports.setProductsUserIds = async (req,res,next) =>{
    let token =  req.headers.authorization.split(' ')[1];
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    if(!req.body.userId) req.body.userId = decoded._id;
    next()
}



exports.getAllWishlist = factory.getAll(Wishlist)
exports.getWishlist = factory.getOne(Wishlist)
exports.createWishlist=factory.createOne(Wishlist)
exports.deleteWishlist = factory.deleteOne(Wishlist)