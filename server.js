const express=require("express")
const { type } = require("express/lib/response")
const app=express()
app.use("/",express.static(__dirname+"/public"))

function decrypter(req,res,next)
{
    let decrypted_data=""
    let encrypted_data=req.query.code
    console.log((req.query))
    for (q in encrypted_data)
    {
        if(encrypted_data[q].charCodeAt(0)>=97)
    {
        let v =encrypted_data[q].charCodeAt(0)-32
       decrypted_data=decrypted_data+ String.fromCharCode(v)
    } 
    else if(encrypted_data[q].charCodeAt(0)>=65 &&encrypted_data[q].charCodeAt(0)<=90)
    {
        let v =encrypted_data[q].charCodeAt(0)+32
       decrypted_data=decrypted_data+ String.fromCharCode(v)
    } 
    else
    {
        decrypted_data=decrypted_data+encrypted_data[q]
    }
    }
    req.query.code=decrypted_data
    console.log(decrypted_data)
    next()
}

function decoderQueryBase64(req,res,next)
{
    //let c=0;
for(q in req.query)
{
    console.log(req.query[q])
    //c++;
    let data=req.query[q]
    data=new Buffer(data,"base64").toString("ascii")
    req.query[q]=data
}
//console.log(c)//1 
//since req.query gives us array
// whose element is code ....traversing which we get req.query[q] or req.query.code
console.log(req.query)
next()
}

app.get("/eval",decrypter,decoderQueryBase64,(req,res)=>{
    //logic to eval the decoded format

    
   // console.log(req.query.code)
    res.send(eval(req.query.code))
})

app.listen(7890,()=>{
    console.log("server started at http://localhost:7890")
})