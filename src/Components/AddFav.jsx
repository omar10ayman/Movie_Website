import React, { useContext } from 'react'
import { movieContext } from '../store'
import Card from '../resuseableCom/Card'
import NoResults from './NoReaults'

export default function AddFav() {
  const {addfav}=useContext(movieContext)
  return (
    addfav.length>0? <div className='container h-100 '>
      <div className="row justify-content-center" id='om'>
        {addfav?.map(item=><Card key={item.id} id={item.id} title={item.title} poster_path={item.poster_path} isFav={item.isFav} id2={item.id2}/>)}
      </div>
    </div> :<NoResults text={"No favourite movies"}/>
  
  )
}
