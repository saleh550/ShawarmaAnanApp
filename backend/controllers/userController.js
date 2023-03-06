const asyncHandler =require('express-async-handler')
const jwt=require('JsonWebToken')
const User=require('../models/usersModel')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);
const verifySid = "VA3f8a09e74ee66884b0c5174ddce2c82a";
const client = require("twilio")(accountSid, authToken);

const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{  
        expiresIn:'30d'
    })
}


const checkVerification=asyncHandler(async(req,res)=>{
    const {userCode,currentCode,phoneNumber}=req.body
    if(userCode===currentCode){
        try {
            const userIsExist=await User.findOne({phoneNumber:phoneNumber})
            if(userIsExist){
                res.status(200).json({
                    id:userIsExist._id,
                    name:userIsExist.name,
                    phoneNumber:userIsExist.phoneNumber,
                    token:generateToken(userIsExist._id)
                });
            }else{
                const newUser=await User.create({
                    phoneNumber:phoneNumber
                })
                res.status(200).json({
                    id:newUser._id,
                    phoneNumber:newUser.phoneNumber,
                    token:generateToken(newUser._id)
                })
            }
        } catch (error) {
            res.json(error)
        }
    }else{
        res.status(401);
        throw new Error("Your code is incorrect!")
    }
})
const creatVerification=asyncHandler(async(req,res)=>{
    const {phoneNumber}=req.body
    
    //check the digits is it numbers 
    const isNumeric = /^[0-9]+$/.test(phoneNumber);
    if(!isNumeric){
        res.status(400);
        throw new Error("Your phone number contains non-numeric characters ")
    }

    //check the phone number 
    if(phoneNumber.length!=10){
        res.status(400);
        throw new Error("Your phone number is incorrect , You have to include 10 digits .")
    }


    const digits=phoneNumber.slice(1);
    const newPhoneNumber ='+972'+digits
    let randomN=Math.floor(Math.random()*90000)+100000;
    try {
        client.messages
        .create({
           body: `Welcome To ShawarmaAnan Website - Your Code is : ${randomN}`,
           from: '+12057976836',
           to:newPhoneNumber
         })
        .then(message => console.log("message"));
        res.json({phoneNumber:phoneNumber,code:randomN})
    } catch (error) {
        res.json(error.message)
    }


})

module.exports={
    checkVerification,
    creatVerification
}
