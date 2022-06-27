const mongoose = require('mongoose')

const navaddSchema = new mongoose.Schema(
    {
    addImageLink:{
        type:String,
        unique:[true,'Add Image Link must be unique'],
        required:[true,'Add image link is required']
    }
})

const Navad = mongoose.model("Navad",navaddSchema)

module.exports = Navad;