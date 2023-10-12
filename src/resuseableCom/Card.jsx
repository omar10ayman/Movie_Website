import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({id,title,poster_path}) {
  return (
    
    <div  key={id} className='bg-danger col-md-2 gap-2 bg-transparent text-white position-relative'>
      <i  className='fas fa-heart fa-2x position-absolute ' style={{
        right: '10%',
        marginTop: "10px"
      }}></i>
        <Link style={{
          textDecoration: "none" ,
          color: "white"
        }} to={`/moviedetiels/${id}`}>
        <img className='w-100' src={'http://image.tmdb.org/t/p/w500'+poster_path}/>
        <h3 className='h6'>{title}</h3>
        </Link>
    </div>
    )
  
}
