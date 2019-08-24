const express = require('express')
const app = express()

app.get('/', (req,res) => {
res.send("How are you express")
})

app.listen(8080,()=>{
    console.log("listening on express 8080");
    
})