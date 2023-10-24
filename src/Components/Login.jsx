import React, {  useState } from 'react'
import Joi from 'joi'
import LabelInput from '../resuseableCom/LabelInput'
import { Link, useNavigate } from 'react-router-dom'

export default function Login({getfromLacal,getfromSession}) {
    const [user,setUser]=useState({
        email:'',
        password:'',
        })
    const [errorLocal,seterrorLocal]=useState('')
    const [error,setError]=useState([])
    const [isLoading,setLoading]=useState(false)
    const navigate= useNavigate()
    const getDate=(e)=>{
        let myuser={...user}
        myuser[e.target.name]=e.target.value
        setUser(myuser)
    }
    const sumbitData=(e)=>{
        e.preventDefault()
        setLoading(true)
        let validatedData=validateData()
        if(validatedData.error){
            
            setError([...validatedData.error.details])
            setLoading(false)
        }
        else{
            if(getfromLacal?.find(o=>o.email===user.email && o.password===user.password)){
                navigate("/home")
                let x =getfromLacal.find(o=>o.email===user.email && o.password===user.password)
                sessionStorage.setItem("user",JSON.stringify({...user,name:x.first_name}))
                console.log(user)
                setLoading(false)
            }
            else{
                setLoading(false)
                seterrorLocal("Invalid Email or Password")
            }
        }
        // console.log(data)
    }
    const validateData=()=>{
        let scheme =Joi.object({
            email:Joi.string().email({minDomainSegments:2,tlds:{allow:['com','net']}}).required(),
            password:Joi.string().pattern(new RegExp('^[A-Z][a-z]{3,10}$')).required(),
        })
        return scheme.validate(user,{abortEarly:false})
    }
  return (
    <div className= ' w-75 vh-100  m-auto  '>
        {error.map(error=> error.context.label==='password' ?<div key={error.context.key} className='alert py-2 alert-danger'>Password invalid</div> :<div key={error.context.key} className='alert py-2 alert-danger'>{error.message}</div>)}
        {errorLocal!=='' ? <div className='alert py-2 alert-danger' >{errorLocal}</div>:''}
        <h2 >Login Now</h2>
    <form onSubmit={sumbitData}>
        
        <LabelInput type={"email"} label={"email"} labelName={"Email"} onchange={getDate} />
        <LabelInput type={"password"} label={"password"} labelName={"Password"} onchange={getDate} />
        <Link style={{
            textDecoration: 'none',
            color: "white",
            opacity:0.5
        }} to={"/forget"}><p>forget password</p> </Link>
        <button className='btn btn-outline-info' type='submit'>{isLoading===true ?<i className='fas fa-spinner fa-spin'></i> :"Login"}</button>
    </form>
    </div>
  )
}
