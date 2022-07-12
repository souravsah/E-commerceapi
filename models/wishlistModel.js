const mongoose = require('mongoose')
const User = require('./userModel')
const Product = require('./productModel')


const wishlistSchema = new mongoose.Schema(
{
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'Wishlist must belong to User']
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:[true,'Wishlist must belong to a Product']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
);



wishlistSchema.pre(/^find/, function(next) {
    this.populate({
        path:'productId'
    })
    next();
});

const Wishlist = mongoose.model('Wishlist',wishlistSchema);

module.exports = Wishlist;