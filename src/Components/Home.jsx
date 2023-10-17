import React, { useContext } from 'react'
import Card from '../resuseableCom/Card';
import Hr from '../resuseableCom/Hr';
import Loading from './Loading';
import {movieContext}  from '../store';

export default function Home() {  
  const{trendingMovies,trendingPerson,trendingTv,movies,tv}=useContext(movieContext)
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
    {movies?.slice(0,10).map(item=><Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} isFav={item.isFav} id2={item.id2} vote_average={item.vote_average}/>)}
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
    {tv?.slice(0,10).map(item=><Card key={item.id} id={item.id} title={item.name} poster_path={item.poster_path} isFav={item.isFav} id2={item.id2} vote_average={item.vote_average}/>)}
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
    {console.log(trendingPerson)}
    {trendingPerson.map(item=><Card key={item.id} id={item.id} title={item.name} poster_path={item.profile_path} isFav={item.isFav} id2={item.id2} vote_average={item.popularity}/>)}</div>
</div>:<Loading/>
  )
}
