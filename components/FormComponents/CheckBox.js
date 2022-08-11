import React from 'react'
import { useId } from 'react'
function CheckIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
}
function Disagree(){
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
}
export default function CheckBox() {
  
  
    let[status,setStatus]=React.useState(true)

  const toggleStatus=()=>{
    setStatus(!status)
  }

  return (
    <label htmlFor='checkBox' className='relative flex items-center gap-3'>
     <h1 className='text-white'>CheckBox :</h1>
     <input onClick={toggleStatus} type={'checkbox'} className='hidden' id='checkBox'></input>
     <div className='w-8 h-8 border-b flex items-center justify-center'>{status ? <CheckIcon/> : <Disagree/>}</div>
    </label>
  )
}
