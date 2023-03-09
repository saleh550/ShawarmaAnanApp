import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import verificationService from './verificationService'

const initialState={ 
    user:null,
    currentCode:null,
    phoneNumber:null,
    isVerifySuccess:false,
    isVerifyError:false,
    isVerifyLoading:false,
    message:''
}


//create code and send it to user's phone number for verification
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
//check the user code and if is correct save the user in the state (login)
export const checkVerify=createAsyncThunk(
    'verification/checkVerify',
     async(data,thunkAPI)=>{
        try {
            return await verificationService.checkVerify(data)
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
                state.currentCode=null
                state.isVerifyError=true
                state.message=action.payload
            })  
            .addCase(createVerify.fulfilled,(state,action)=>{
                state.isVerifyLoading=false
                console.log('payload:'+action.payload.Code)
                state.currentCode=action.payload.code
                state.phoneNumber=action.payload.phoneNumber
                state.isVerifySuccess=true
                state.message=null
            })      
            .addCase(checkVerify.pending,(state)=>{
                state.isVerifyLoading=true
            })
            .addCase(checkVerify.rejected,(state,action)=>{
                state.isVerifyLoading=false
                state.message=action.payload
            })  
            .addCase(checkVerify.fulfilled,(state,action)=>{
                state.isVerifyLoading=false
                state.isVerifySuccess=true
                state.user=action.payload
                state.message=null
            }) 
    }


})

export const {reset}=verificationSlice.actions
export default verificationSlice.reducer