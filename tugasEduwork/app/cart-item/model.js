const mongoose = require('mongoose');
const {Schema} =  mongoose

const cartItemSchema =  mongoose.Schema({
    name:{
        type:String,
        minLength:[5,'panjang makanan min 50 karakter'],
        required:[true,'harus diisi']
    },
    qty:{
        type:Number,
        min:[1,' min qty 1'],
        required:[true,'harus diisi']
    },
    price:{
        type:Number,
        default:0
    },
    image_url:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
})

module.exports = mongoose.model("CartItem",cartItemSchema)