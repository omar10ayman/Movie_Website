import React from 'react'

export default function NoResults({text}) {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center overflow-hidden'>
    <h3 className='opacity-50'>{text}</h3>
   </div>
  )
}