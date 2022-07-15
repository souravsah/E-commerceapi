const mongoose = require('momgoose')


const cartSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'Cart must belong to a cart']
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:'Product',
        required:[true,'Cart must belong to a product']
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
},{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
);

cartSchema.pre(/^find/,function(next){
    this.populate({
        path:'productId'
    })
    next();
})

const Cart = mongoose.model('Cart',cartSchema)

module.exports=Cart;