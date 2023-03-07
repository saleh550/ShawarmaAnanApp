import { useState } from "react"

function CreateVerify(){
    const [item,setItem]=useState()
    const onChange=(e)=>{
        setItem(e.target.value)
        console.log(item)
    }
    const onClick =()=>{
        console.log(item)
    }
    return(<>
       <div className="text-center">
        <input
            name='phoneNumber'
            value={item}
            onChange={onChange}
        />
        <button className="btn btn-dark" onClick={onClick}> submit</button>
       </div>
    </>)
}
export default CreateVerify