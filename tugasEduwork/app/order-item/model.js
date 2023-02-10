const mongoose = require('mongoose');
const {model,Schema} = mongoose;

const orderItemSchema = Schema({
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
        default:[true,'harga item harus diisi']
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