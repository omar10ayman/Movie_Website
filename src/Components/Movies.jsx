import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './Loading';
import Card from '../resuseableCom/Card';
import { movieContext } from '../store';
export default function Movies() {
  const{counter ,showNext,showPrevious ,getMovies,movies}=useContext(movieContext)
 
  return (
   <>
   { movies? <div className='container'>
      <div className="row justify-content-center" id='om'>
        {movies.map(item=><Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} isFav={item.isFav} vote_average={item.vote_average}/>)}
      </div>
    </div> :<Loading/>}
    <nav aria-label="Page navigation example " className='my-5  d-flex justify-content-center align-align-items-center'>
  <ul className="pagination" style={{
    cursor: 'pointer'
  }}>
    <li onClick={showPrevious} className="page-item"><a className="page-link" >Previous</a></li>
    <li onClick={()=>getMovies(counter,'movie')} className="page-item"><a className="page-link">{counter}</a></li>
    <li onClick={()=>getMovies(counter+1,'movie')} className="page-item"><a className="page-link" >{counter+1}</a></li>
    <li onClick={showNext} className="page-item"><a className="page-link" >Next</a></li>

  </ul>
</nav>
   </>
    )
}
