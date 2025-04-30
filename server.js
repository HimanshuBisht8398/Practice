const express=require('express')
const app=express()
console.log("cherry pick======")

app.get('/',(req,res)=>{
    res.send({code:200,message:"Hello Backend is runing successfully!!"})
})
app.listen(4000,()=>{
    console.log('server running on port 4000')
})