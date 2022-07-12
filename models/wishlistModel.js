const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema(
{
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:[true,'Wishlist must belong to User']
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        ref:"Product",
        required:[true,'Wishlist must belong to a User']
    },
    createdId:Date
},
{
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
}
)  

wishlistSchema.pre('save',function(next){
    this.createdId=Date.now()-1000;
    next();
})

wishlistSchema.pre(/^find/, function(next) {
    this.populate({
        path:'userId', 
        select:'name photo' 
    }).populate({
        path:'productId'
    })
    next()
});

const Wishlist = mongoose.model('Wishlist',wishlistSchema)

module.exports =Wishlist;