import React, { useEffect, useState } from 'react'
import LabelInput from '../resuseableCom/LabelInput'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

export default function Resister({getfromLacal}) {
    let [userArry,setUserArry]=useState([])
    const [user,setUser]=useState({
        first_name:'',
        last_name:'',
        email:'',
        age:0,
        password:'',
    })
    const [email,setemailError]=useState("")
    const [error,setError]=useState([])
    const [isLoading,setLoading]=useState(false)
    const navigate= useNavigate()
    useEffect(()=>{
        if(getfromLacal?.length>0==true) {
            userArry=[...getfromLacal]
            console.log(" not null")
            setUserArry(userArry)
        }else{
            console.log("null")
            userArry=[]
            setUserArry(userArry)
        }
        console.log(userArry)
    },[])
    const getDate=(e)=>{
      let myuser={...user}
        myuser[e.target.name]=e.target.value
        if(getfromLacal?.find(email => email.email===myuser["email"])){
            setemailError("Email is exist already")
        }else{

            setUser(myuser)
        }
       
    }
    const  sumbitData= (e)=>{
        e.preventDefault()
        setLoading(true)
        let validatedData=validateData()
        if(validatedData.error){

            setError([...validatedData.error.details])
            setLoading(false)
        }
        else{
            // let {data}=Axios.Post("https://route-egypt-api.herokuapp.com/signup",user)
            userArry.push(user)
            setUserArry(userArry)
            localStorage.setItem("userArr",JSON.stringify(userArry))
            navigate("/login")
            setLoading(false)
        }
        
    }
    const validateData=()=>{
        let scheme =Joi.object({
            first_name:Joi.string().alphanum().min(3).max(10).required(),
            last_name:Joi.string().alphanum().min(3).max(10).required(),
            age:Joi.number().min(16).max(80).required(),
            email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
            password:Joi.string().pattern(new RegExp('[A-Z][a-z]{3,10}$')).required(),
        })
        return scheme.validate(user,{abortEarly:false})
    }
  return (
    <div className= ' w-75 h-100  m-auto'>
        {email && <div  className='alert py-2 alert-danger'>{email}</div> }
        {error.map(error=> error.context.label==='password' ?<div key={error.context.key} className='alert py-2 alert-danger'>Password must be (3-10) letters/ First letter is UpperCase </div> :<div key={error.context.key} className='alert py-2 alert-danger'>{error.message}</div>)}
        <h2 >Resister Now</h2>
    <form onSubmit={sumbitData}>
        <LabelInput type={"text"} label={"first_name"} labelName={"First Name"} onchange={getDate} />
        <LabelInput type={"text"} label={"last_name"} labelName={"Last Name"} onchange={getDate} />
        <LabelInput type={"email"} label={"email"} labelName={"Email"} onchange={getDate} />
        <LabelInput type={"number"} label={"age"} labelName={"Age"} onchange={getDate} />
        <LabelInput type={"password"} label={"password"} labelName={"Password"} onchange={getDate} />
        <button className='btn btn-info' type='submit'>{isLoading===true ?<i className='fas fa-spinner fa-spin'></i> :"Submit"}</button>
    </form>
    </div>
  )
}
