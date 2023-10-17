import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { movieContext } from '../store'


export default function Card({id,title,poster_path,isFav ,id2,vote_average}) {
  const {addfavClicks}=useContext(movieContext)
  return (
    <div key={id} className='bg-danger col-md-2 gap-2 bg-transparent text-white position-relative'>
     
     {isFav ? <i onClick={()=>addfavClicks(id)} className='fas fa-heart fa-2x position-absolute ' style={{
        right: '10%',
        marginTop: "10px",
        color:"red"
      }}></i>: <i onClick={()=>addfavClicks(id)} className='fas fa-heart fa-2x position-absolute ' style={{
        right: '10%',
        marginTop: "10px",
      }}></i>}
        <Link style={{
          textDecoration: "none" ,
          color: "white"
        }} to={`/moviedetiels/${id}`}>
       {poster_path ?<img className='w-100' src={'http://image.tmdb.org/t/p/w500'+poster_path} alt='' />:<div style={{
        backgroundColor: "white",
        width: "100%",
        color:"black",
        height: "50%",
       }}>Not Found</div> } 
        <h3 className='h6'>{title} </h3>
        </Link>
    </div>
    )
  
}
