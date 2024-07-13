//importing express
const express = require('express');

//after using the env 
require('dotenv').config()

//here app is factory function using app i created a variable app
const app = express()
const port = 3000
//route to the page
app.get('/',(req,res)=> {
    res.send('Hello world')
})

app.get('/twitter',(req,res)=> {
    res.send('hsbhdbshjf')
})

app.get('/login',(req,res)=> {
    res.send('<h1>Please login first</h1>')
})

//to run in this port app has to listen the port
app.listen(process.env.PORT,()=> {
    console.log('backend is running at port ',port);
})
