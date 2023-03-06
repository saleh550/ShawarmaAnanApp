const dotenv =require('dotenv').config()
const express=require('express')
const colors=require('colors')
const PORT=process.env.PORT || 5000
const connectDB=require('./config/db')
const {errorHandler}=require('./middleware/errorMiddleware')
const app=express()


//Connect to DB
connectDB()

app.use(express.json())
app.use(express.urlencoded({extended: true}))


//Routes
app.use('/api/users', require('./routes/userRoutes'))


app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`)
})