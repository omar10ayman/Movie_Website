import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Loading from './Loading';
export default function MovieDetails() {
    const params =useParams()
    const [moviedetiels,setMovieDetails] = useState(null)
    const getMovieDetails = async ()=>{
        let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=1bc6b1c83095f7fe5720985c1c6814b7&%20language=en-US`)
        setMovieDetails(data)
    }
    useEffect(()=>{
        getMovieDetails()
    },[])
  return (
    moviedetiels ? <div className='container'>
        <div className="row justify-content-center align-items-center ">
            <div className="col-md-3">
                <img className='w-100' src={'http://image.tmdb.org/t/p/w500'+moviedetiels.poster_path} alt="" />
            </div>
            <div className="col-md-9 p-3">
                <h3 className='text-white'>{moviedetiels.title}</h3>
                <p className=' text-white opacity-50 my-5'>{moviedetiels.overview}</p>
                <ul>
                    <li>
                    Budgets: {moviedetiels.budget}
                    </li>
                    <li>
                    Date: {moviedetiels.release_date}
                    </li>
                    <li>
                    Vote: {moviedetiels.vote_average}
                    </li>
                </ul>
            </div>
        </div>
    </div> :<Loading/>
    )
}
