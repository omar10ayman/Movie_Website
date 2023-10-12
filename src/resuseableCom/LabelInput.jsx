import React from 'react'

export default function LabelInput({label,labelName,onchange,type}) {
  return (
    <>
    <label className='mb-2 w-100' htmlFor={label}>{labelName}</label>
    <input className='form-control bg-transparent mb-3' onChange={onchange} id={label} name={label} type={type} />
    </>
  )
}
