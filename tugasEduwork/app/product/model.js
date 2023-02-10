const mongoose = require('mongoose');
const {Schema} = mongoose
const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'required field'],
        minLength:[3,'panjang nama makanan min 3 karakter']
    },
    description:{
        type:String,
        minLength:[3,'panjang nama makanan min 3 karakter']
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    image_url:String,
    category:{
        type:Schema.Types.ObjectId,
        ref:"Category"
    },
    tags:{
        type:Schema.Types.ObjectId,
        ref:"Tag"
    }
    
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema)