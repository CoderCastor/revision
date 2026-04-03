import express from "express"

const app = express()

app.get("/",(req,res)=>{
    res.json({
        msg : "Working fine. codercastor"
    })
})

app.listen(8005,()=>console.log("Server in running on port 8005"))