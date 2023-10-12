import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from '../resuseableCom/Card';
import Hr from '../resuseableCom/Hr';
import Loading from './Loading';

export default function Home() {
  const [trendingMovies,settrendingMovies]=useState([])
  const [trendingTv,settrendingTv]=useState([])
  const [trendingPerson,settrendingPerson]=useState([])
  const getDateFromApi = async (urlType,callArrSet)=>{
   let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${urlType}/week?api_key=1bc6b1c83095f7fe5720985c1c6814b7`)
   callArrSet(data.results.slice(0,10))
  }
  getDateFromApi('movie',settrendingMovies)
  getDateFromApi('tv',settrendingTv)
  getDateFromApi('person',settrendingPerson)
  
  return (
  trendingMovies || trendingPerson || trendingTv ?   <div className='container'>
  <div className="row">
    <div className="col-md-4 my-3 d-flex flex-column justify-content-center ">
      <div style={{
        height:"2.5px",
        backgroundColor:"gray",
        width:"25%",
        marginBottom:"25px",
      }}/>
      <h3>Trending<br/>Movies<br/>to watch now</h3>
      <p style={{
        opacity:0.5
      }}>Most watched movies by days</p>
      <div style={{
        height:"2.5px",
        backgroundColor:"gray",
        width:"75%",
        marginTop:"25px",
      }}/>
    </div>
    {trendingMovies.map(item=><Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path}/>)}
    <Hr/>
    <div className="col-md-4 my-3 d-flex flex-column justify-content-center ">
      <div style={{
        height:"2.5px",
        backgroundColor:"gray",
        width:"25%",
        marginBottom:"25px",
      }}/>
      <h3>Trending<br/>Tv<br/>to watch now</h3>
      <p style={{
        opacity:0.5
      }}>Most watched Tv by days</p>
      <div style={{
        height:"2.5px",
        backgroundColor:"gray",
        width:"75%",
        marginTop:"25px",
      }}/>
    </div>
    {trendingTv.map(item=><Card key={item.id} id={item.id} title={item.name} poster_path={item.poster_path}/>)}
    <Hr/>
    <div className="col-md-4 my-3 d-flex flex-column justify-content-center py-3 ">
      <div style={{
        height:"2.5px",
        backgroundColor:"gray",
        width:"25%",
        marginBottom:"25px",
      }}/>
      <h3>Trending<br/>Person<br/>to watch now</h3>
      <p style={{
        opacity:0.5
      }}>Most watched Person by days</p>
      <div style={{
        height:"2.5px",
        backgroundColor:"gray",
        width:"75%",
        marginTop:"25px",
      }}/>
    </div>
    {trendingPerson.map(item=><Card key={item.id} id={item.id} title={item.name} poster_path={item.profile_path}/>)}      </div>
</div>:<Loading/>
  )
}
