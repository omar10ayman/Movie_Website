import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './Loading';
import Card from '../resuseableCom/Card';
export default function TVShows() {
  const [movies,setMovies] = useState(null)
  const [counter,setCounter] = useState(1)
  const getMovies = async (pageNum)=>{
      let {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=1bc6b1c83095f7fe5720985c1c6814b7&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`)
      setMovies(data.results)
  }
  // const num =new Array(13).fill(1).map((item,i)=>i+1)
  useEffect(()=>{
      getMovies(1)
  },[])
  const showPrevious =()=>{
    if(counter>1){
      setCounter(counter-1)
    }else{
      setCounter(counter)
    }
  }
  const showNext =()=>{
    if(counter<13){
      setCounter(counter+1)
    }else{
      setCounter(counter)
    }
  }
  return (
   <>
   { movies? <div className='container'>
      <div className="row justify-content-center">
        {movies.map(item=><Card key={item.id} id={item.id} title={item.name} poster_path={item.poster_path}/>)}
      </div>
    </div> :<Loading/>}
    <nav aria-label="Page navigation example " className='my-5  d-flex justify-content-center align-align-items-center'>
  <ul className="pagination" style={{
    cursor: 'pointer'
  }}>
    <li onClick={showPrevious} class="page-item"><a class="page-link" >Previous</a></li>
    <li onClick={()=>getMovies(counter)} class="page-item"><a class="page-link" >{counter}</a></li>
    <li onClick={()=>getMovies(counter+1)} class="page-item"><a class="page-link" >{counter+1}</a></li>
    <li onClick={showNext} class="page-item"><a class="page-link" >Next</a></li>

  </ul>
</nav>
   </>
    )
}
