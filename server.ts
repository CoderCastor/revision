import express from 'express';

const app = express();

app.get("/",(req,res)=>{
	res.json({
	msg : "working fine"
	})
})

app.listen(3000,()=>console.log("Server is running on port 3000"))
