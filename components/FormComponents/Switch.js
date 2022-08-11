import React from 'react'
import { ReactFragment } from 'react'
export default function Switch() {
    let[status,setStatus]=React.useState(false)
  return (
      <div className='flex gap-3'>
     <h1 className='text-white'>Switch :</h1>
    <label htmlFor='radio' className='border flex relative w-12 py-1 px-1 rounded-full '>
        
        <input value={status} onClick={()=>{setStatus(!status)}}  type={'checkbox'} className='absolute hidden ' id='radio'></input>
        <div style={{
            transform:status && 'translateX(calc(90%))',
            background:status ? "#16A34A" :'#581C87'
        }} className='h-5 w-5  bg-purple-900 rounded-full  transition-all'></div>
    </label>
    
    </div>
  )
}
