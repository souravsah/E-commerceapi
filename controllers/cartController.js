const Cart = require('./../models/cartModel')
const factory = require('./handlerFactory')
const { promisify } = require('util');
const jwt = require('jsonwebtoken');

exports.setProductsUserIds = async (req,res,next) =>{
    let token =  req.headers.authorization.split(' ')[1];
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
    if(!req.body.userId) req.body.userId = decoded.id;
    next()
}



exports.getAllCart = factory.getAll(Wishlist)
exports.getCart = factory.getOne(Wishlist)
exports.createCart=factory.createOne(Wishlist)
exports.deleteCart = factory.deleteOne(Wishlist)