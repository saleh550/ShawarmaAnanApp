const express=require('express')
const router=express.Router()
const {creatVerification,checkVerification} =require('../controllers/userController')


router.post('/create/verification',creatVerification)
router.post('/check/verification',checkVerification)

module.exports=router
