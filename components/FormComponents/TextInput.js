import React from 'react'

export default function TextInput(props) {
   
   let {eror}=props
     
    let ErorStyle={
        outlineStyle: 'dashed',
        outlineWidth:'2px',
        outlineColor: '#ef4444'
    }   

  return (
    <div className='flex flex-col gap-2'>
        <input placeholder={eror ? 'Eror' : 'No Eror'}  style={ eror ? ErorStyle : {} } className='    focus:outline-none focus:text-black  border-b-4 border-b-purple-900  bg-purple-600/40 focus:bg-white text-white px-4 py-2' type='text'/>
        {eror && <div className='text-sm text-white'>Your Eror Message!</div>}
    </div>
  )
}
