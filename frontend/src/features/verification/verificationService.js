import axios from 'axios'

const API_URL='/api/users'

//register user
const createVerify =async (data)=>{
    console.log(API_URL+'/create/verification')
    const response=await axios.post(API_URL+'/create/verification',data)
    // if(response.data){
    //     localStorage.setItem('user',JSON.stringify(response.data))
    // }
    return response.data
}
//register user
const checkVerify =async (data)=>{
    const response=await axios.post(API_URL+'/check/verification',data)
    // if(response.data){
    //     localStorage.setItem('user',JSON.stringify(response.data))
    // }
    return response.data
}

const verificationService={
    createVerify,
    checkVerify
}

export default verificationService