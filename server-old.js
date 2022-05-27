const express=require("express")
const app=express()

function middleware1(req,res,next)
{
    console.log("prenext_middleware1")
    next()
    console.log("post_next_mw_1")
}
function middleware2(req,res)
{
    console.log("pre_send_in middleware 2")
    res.send("Middleware 2 or wat")
    console.log("post_send_mw2")
}

app.get("/x",middleware1,middleware2)


app.listen(5432,()=>{
    console.log("server started at port http://localhost:5432")
})
