import React, { useEffect, useState ,createContext} from 'react'
import axios from 'axios';
export const movieContext=createContext(0)

export default function MovieContextProvider(props){
    const [trendingMovies,settrendingMovies]=useState([])
    const [trendingTv,settrendingTv]=useState([])
    const [trendingPerson,settrendingPerson]=useState([])
    const getDateFromApi = async (urlType,callArrSet)=>{
     let {data}= await axios.get(`https://api.themoviedb.org/3/trending/${urlType}/week?api_key=1bc6b1c83095f7fe5720985c1c6814b7`)
     callArrSet(data.results.slice(0,10).map((movie)=> {
       return {...movie,isFav:false ,title:movie.title || movie.name,id2:Math.floor(Math.random()*10000)}
    }))
    }
  useEffect(()=>{
    getDateFromApi('movie',settrendingMovies)
    getDateFromApi('tv',settrendingTv)
    getDateFromApi('person',settrendingPerson)
    getMovies(1,"tv")
    getMovies(1,"movie")
  },[])
  const [movies,setMovies] = useState(null)
  const [tv,setTv] = useState(null)
  const [counter,setCounter] = useState(1)
  const getMovies = async (pageNum,urlType)=>{
      let {data} = await axios.get(`https://api.themoviedb.org/3/discover/${urlType}?api_key=1bc6b1c83095f7fe5720985c1c6814b7&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNum}`)
      if(urlType==="movie"){
        
          setMovies(data.results.map((movie)=> {
            return {...movie,isFav:false,title:movie.title || movie.name ,id2:Math.floor(Math.random()*10000)}
         }))
      }else{
        setTv(data.results.map((movie)=> {
            return {...movie,isFav:false, title:movie.title || movie.name,id2:Math.floor(Math.random()*10000) }
         }))
      }
   
      
  }
  // const num =new Array(13).fill(1).map((item,i)=>i+1)

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
  let allArrays=[movies,tv]
  const [addfav,setAddfav]=useState([])
  const addfavClicks =(id)=>{
    let everyArr= allArrays.map((arr,index)=> arr.find(movie=>movie.id ===id ))
    let filterArr =everyArr.filter(movie=> movie)
    filterArr[0].isFav =!filterArr[0].isFav
    if(filterArr[0].isFav){

        setAddfav([...addfav,filterArr[0]])
        
        console.log(tv)
         console.log(filterArr[0].id)
    }else{
       let deletedFromArr= addfav.filter(movie=> movie.id!==id)   
       setAddfav([...deletedFromArr])  
    }
  }
    return <movieContext.Provider value={{trendingMovies,trendingPerson,trendingTv,movies,tv,counter,showPrevious,showNext,getMovies,addfavClicks,addfav}}>
        {props.children}
    </movieContext.Provider>
}
