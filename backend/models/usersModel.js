const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    email:{
        type:String,
        required:[false,'Please add your email']

    },
    phoneNumber:{
        type:String,
        required:[true,'Please add a phone number']
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    }

})

module.exports=mongoose.model('User',userSchema)