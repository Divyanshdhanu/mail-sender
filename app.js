const express =require('express')
const app=express()
const nodemailer= require('nodemailer')

var transport= nodemailer.createTransport(
    {
        service: 'gmail',
        auth:{
            user: 'divyanshsingh1161@gmail.com',
            pass: 'Niharika6243'
        }
    }
)


// send out email
var mailOptions= {
    from: 'divyanshsingh1161@gmail.com',
    to: 'sdivyansh59@gmail.com , kshatriyadivyansh@gmail.com',
    subject:'Hello world this is a test mail',
    //text: 'This is the body of the mail'  use to send text 
    html: '<h1> Hello World </h1>'
}

transport.sendMail(mailOptions,(error,info)=>{
     if(error){
         console.log(error)
     }else{
         console.log("Email sent "+ info.response)
     }
})
app.get('/',(req,res)=>{
    res.send("Hello World")
})



// assign port 
const port= process.env.PORT  || 3000
app.listen(port,()=>{
    console.log(`app is running on ${port} `)
})