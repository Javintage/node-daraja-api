const express = require('express')
const app = express()
const body_parser=require("body-parser")
const request=require("request")
app.use(body_parser.json())

// routes
app.get('/',(req,res)=>{
    res.send("welcome to my application")
})
app.get('/access-token', (req,res)=>{
    // access token 
    let url="https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    let auth=new Buffer.from("4NhK5srNoGIyVFtEoeMZxAfXAYu1XLnJTf7IbEW20IjsMws6:A4N8IU3PATNp1GMlhq8ZA3JLx2bKfd38nGbDu0lOu51dX1bd3uwdU9NBqR7rssKS").toString('base64')
    request(
        
      { url: url,
        headers:{
            "Authorization " : "Basic" + auth   
             }   
    },
    (error,response,body)=>{
        if(error){
            console.log(error)
        }else {
            res.status(200).json(body)
        }

    })
})

// listen 

app.listen(8000)