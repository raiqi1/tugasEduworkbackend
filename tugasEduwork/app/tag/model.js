const mongoose  = require ('mongoose');

let TagSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:[3,'panjang minimal 3 karakter'],
        maxlength:[20,'maximal 20'],
        required:[true,'harus diisi']
    }
})

module.exports = mongoose.model('Tag',TagSchema)