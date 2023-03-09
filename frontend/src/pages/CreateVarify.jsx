import { useState,useEffect } from "react"
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import {createVerify,reset} from '../features/verification/verificationSlice'

function CreateVerify(){
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [phoneNumber,setPhoneNumber]=useState()
    const {currentCode,isVerifyError,isVerifyLoading,isVerifySuccess}=useSelector(state=>state.verification)
    useEffect(()=>{
        if(isVerifySuccess){
            dispatch(reset())
            navigate('/check/verification')
        }
        if(isVerifyError,isVerifyError){
            console.log("Error")
        }
        
    },[isVerifySuccess])

    const onChange=(e)=>{
        setPhoneNumber(e.target.value)
        console.log(phoneNumber)
    }
    const onSubmit =(e)=>{
        e.preventDefault()
        dispatch(createVerify({phoneNumber:phoneNumber}))
    }
    return(<>
        <div className="container text-center">
            <form onSubmit={onSubmit}>

            <div className="mb-3">
                <label  class="form-label">Phone Number</label>
                <input 
                type="text" 
                className="form-control"
                name='phoneNumber'
                value={phoneNumber}
                onChange={onChange}
                  />
            </div>
            <button type="submit" className="btn btn-secondary mb-2">Submit</button>
            <label className="col-12 text-secondary">Contain your number for Login or Signup</label>
            </form>

        </div>

    </>)
}
export default CreateVerify