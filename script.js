let inpcode=document.getElementById("InpCode")
let btnEncode=document.getElementById("btnEncode")
let code=document.getElementById("code")
let btnEncrypt=document.getElementById("btnEncrypt")
btnEncode.onclick=function()
{
   let  data=inpcode.value
    data= btoa(data)
    code.value=data

}

btnEncrypt.onclick=function()
{
    let data=code.value
    data=encyrptvalue(data)
    code.value=data
}

function encyrptvalue(encoded_data)
{
    console.log(typeof(encoded_data))
    let encrypted_data="",unencrypted_data="";
//logic to encrypt the encoded data
for(q in encoded_data)
{
    //console.log(encoded_data[q])
    unencrypted_data=unencrypted_data+encoded_data[q]

    if(encoded_data[q].charCodeAt(0)>=97)
    {
        let v =encoded_data[q].charCodeAt(0)-32
       encrypted_data=encrypted_data+ String.fromCharCode(v)
    } 
    else if(encoded_data[q].charCodeAt(0)>=65 &&encoded_data[q].charCodeAt(0)<=90)
    {
        let v =encoded_data[q].charCodeAt(0)+32
       encrypted_data=encrypted_data+ String.fromCharCode(v)
    } 
    else
    {
        encrypted_data=encrypted_data+encoded_data[q]
    }
}
console.log(encrypted_data)
console.log(unencrypted_data)
    return encrypted_data;

}