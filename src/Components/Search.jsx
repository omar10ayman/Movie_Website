import React, { useState } from 'react'
import LabelInput from '../resuseableCom/LabelInput'
import { useContext } from 'react'
import { movieContext } from '../store'
import Hr from '../resuseableCom/Hr'
import Card from '../resuseableCom/Card'
import Loading from './Loading'
import NoResults from './NoReaults'

export default function Search() {
    const {movies}=useContext(movieContext)
    const [movieSearch,setmovieSearch]=useState([])
    const onchange=(e) =>{
        let movieSearch1 =movies?.filter(movie => movie.title.includes(e.target.value))
        if(e.target.value==""){
            setmovieSearch([])
        }else
        setmovieSearch([...movieSearch1])
        
    }
const searchFun=()=>{
    console.log("ooe")
}
  return (
    <div className='container  h-100 mb-5 '>
        <LabelInput label={"search"} type={"text"} onchange={onchange} labelName={"Search Bar :"} />
        <Hr/>
      <div className= 'container'>
        <div className='row'>
        {movieSearch.length>0 ? movieSearch.map(item=> <Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} isFav={item.isFav} id2={item.id2} vote_average={item.vote_average}/> ):<NoResults text={"No search reasults"}/>}
        </div>
      
      </div>
    </div>
  )
}
