import { useState ,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { checkVerify } from "../features/verification/verificationSlice";
function CheckVerify(){
    const [userCode,setUserCode]=useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {currentCode,phoneNumber,user}=useSelector(state=>state.verification)
    useEffect(()=>{
        if(user){
            navigate('/')
        }
    },[user])
    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(checkVerify({phoneNumber:phoneNumber,userCode:userCode,currentCode:currentCode}))
    }
    return(<>

               <div className="container">
            <form onSubmit={onSubmit}>
            <label  class="form-label">We sent code  to your phone number , {phoneNumber}</label>
            <div className="mb-3 ">
                
                <h6  class="form-label ">Your Code</h6>
                <input 
                type="text" 
                className="form-control "
                name='Code'
                value={userCode}
                onChange={(e)=>setUserCode(e.target.value)}
                  />
            </div>
            <div className="text-center">
            <button type="submit" className="btn btn-secondary mb-2">Verify</button>
            <Link to='/create/verification'><label className="col-12 text-primary">Your number is incorrect?</label></Link>
            </div>
            </form>

        </div>
    </>)
}
export default CheckVerify