const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        pName:{
            type:String,
            required:[true,'Please enter product name']
        },
        pColor:{
            type:String,
            required:[true,'Please enter product color']
        },
        pSize:[
            {
                type:String,
                required:[true,'Size is required'],
                enum:{
                    values:["XS","S","M","L","XL","2XL","3XL"],
                    message:"Only XS, S, M, L, XL, 2XL ,3XL  sizes are allowed"
                }
            }
        ],
        pDescription:{
            type:String,
            required:[true,'Please provide description of product']
        },
        pNewArrival:{
            type:Boolean,
            default:false
        }
    }
)