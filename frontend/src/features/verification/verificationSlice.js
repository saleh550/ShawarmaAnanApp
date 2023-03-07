import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import verificationService from './verificationService'

const initialState={ 
    currentCode:null,
    userCode:null,
    phoneNumber:null,
    isVerifySuccess:false,
    isVerifyError:false,
    isVerifyLoading:false,
    message:''
}


//Register user 
export const createVerify=createAsyncThunk(
    'verification/createVerify',
     async(data,thunkAPI)=>{
       
        try {
            return await verificationService.createVerify(data)
        } catch (error) {
            const message=(error.response&&error.response.data&&error.response.data.message)
            ||error.message
            ||error.toString()
            return thunkAPI.rejectWithValue(message)
        }
     }

)

export const verificationSlice=createSlice({
    name:'verification',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isVerifyLoading=false
            state.isVerifyError=false
            state.isVerifySuccess=false
            state.message=''
        }
    },
    extraReducers:(builder)=>{
        builder
            .addCase(createVerify.pending,(state)=>{
                state.isVerifyLoading=true
            })
            .addCase(createVerify.rejected,(state,action)=>{
                state.isVerifyLoading=false
                state.userCode=null
                state.currentCode=null
                state.isVerifyError=true
                state.message=action.payload
            })  
            .addCase(createVerify.fulfilled,(state,action)=>{
                state.isVerifyLoading=false
                state.currentCode=action.payload.currentCode
                state.phoneNumber=action.payload.phoneNumber
                state.isVerifySuccess=true
                state.message=null
            })      
    }


})

export const {reset}=verificationSlice.actions
export default verificationSlice.reducer