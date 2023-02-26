const mongoose = require('mongoose');
const {model,Schema} = mongoose;

const orderItemSchema = Schema({
    name:{
        type:String,
        minLength:[5,'panjang makanan min 50 karakter'],
        required:[true,'harus diisi']
    },
    price:{
        type:Number,
        default:[true,'harga item harus diisi']
    },
    qty:{
        type:Number,
        required:[true,'harus diisi'],
        min:[1,' min qty 1']
    },
    product:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
    order:{
        type:Schema.Types.ObjectId,
        ref:'Order'
    }
});

module.exports = model("OrderItem",orderItemSchema)