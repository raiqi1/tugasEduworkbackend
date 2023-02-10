const mongoose  = require('mongoose')
const {Schema} = mongoose

const deliveryAddresSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'nama alamat harus diisi'],
        maxlength:[255,'panjang maksimal 255 karakter']
    },
    kelurahan:{
        type:String,
        required:[true,'keluarahan alamat harus diisi'],
        maxlength:[255,'panjang maksimal 255 karakter']
    },
    kecamatan:{
        type:String,
        required:[true,'kecamatan alamat harus diisi'],
        maxlength:[255,'panjang maksimal 255 karakter']
    },
    kabupaten:{
        type:String,
        required:[true,'kabupaten alamat harus diisi'],
        maxlength:[255,'panjang maksimal 255 karakter']
    },
    provinsi:{
        type:String,
        required:[true,'provinsi alamat harus diisi'],
        maxlength:[255,'panjang maksimal 255 karakter']
    },
    detail:{
        type:String,
        required:[true,'detail alamat harus diisi'],
        maxlength:[255,'panjang maksimal 255 karakter']
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
    
},{timestamps:true})

module.exports = mongoose.model("DeliveryAddress",deliveryAddresSchema)