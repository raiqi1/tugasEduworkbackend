const mongoose = require('mongoose')
const {Schema,model} = mongoose;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const bcrypt = require('bcrypt')

let UserSchema = Schema ({
    full_name:{
        type:String,
        required:[true,'nama harus diisi'],
        maxLength:[255,'panjang nama maxsimal 225 karakter'],
        minLength:[3,'minimal panjang harus 3 karakter']
    },
    customer_id:{
        type:Number
    },
    email:{
        type:String,
        required:[true,'email harus diisi'],
        maxLength:[255,'panjang nama maxsimal 225 karakter'],
    },
    password :{
        type:String,
        required:[true,'password harus diisi'],
        maxLength:[255,'panjang nama maxsimal 225 karakter'],
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    },
    token:[String]

},{timestamps:true});

UserSchema.path('email').validate(function(value){
    const EMAIL_RE = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return EMAIL_RE.test(value);
},attr => `${attr.value} harus merupakan email yg valid!`);

UserSchema.path('email').validate(async function(value){
    try {
        const count = await this.model('User').count({email:value})
        return !count
    } catch (error) {
        this(error)
    }
},attr => `${attr.value}sudah terdaftar`)

const HASH_ROUND = 10;
UserSchema.pre('save',function(next){
    this.password = bcrypt.hashSync(this.password,HASH_ROUND);
    next()
});

UserSchema.plugin(AutoIncrement,{inc_field:'customer_id'});

module.exports = model('User',UserSchema)