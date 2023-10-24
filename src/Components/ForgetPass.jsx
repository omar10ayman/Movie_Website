import React, {  useState } from 'react'
import LabelInput from '../resuseableCom/LabelInput'

export default function ForgetPass({getfromLacal}) {
    const[getPass ,setGetPass]=useState("")
    let[value ,setvalue]=useState("")
    let inputValue;
    const onchange =(e)=>{
        inputValue = e.target.value
        console.log(inputValue)
        setvalue(inputValue)
    }
    const onClick =()=>{
      console.log(value)
      if(value !== undefined){
        let x =getfromLacal?.find(user=> user.email.includes(value))
        setGetPass(x.password)
        setvalue("")
      }else{
        alert("Please enter Email")
      }
    }
  return (
    <div className='container vh-100'><LabelInput  value={value} label={"email"} labelName={"Enter your email"} type={"email"} onchange={onchange}/>
    <button onClick={onClick} className='btn btn-outline-info'>Enter</button>

    {getPass.length>0   && <div className='text-center'>
    <h4 >Your Password is :{getPass}</h4>
    </div>}
    </div>
  )
}
