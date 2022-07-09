const Product = require("./../models/productModel");
const catchAsync = require("./../utils/catchAsync");
const handleFactory = require("./handlerFactory");
exports.insertProduct = handleFactory.createOne(Product);

exports.getProduct = handleFactory.getOne(Product);

exports.getNewArrivals = catchAsync(async (req,res,next)=>{
  const data =await Product.find({pNewArrival:true});
  res.status(200).json({
    status: 'success',
    data: data
  });

})


exports.getAllProducts =handleFactory.getAll(Product)

exports.updateProduct = handleFactory.updateOne(Product);
exports.deleteProduct = handleFactory.deleteOne(Product);