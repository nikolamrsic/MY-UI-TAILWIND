import React from 'react'

export default function Sidebar() {
  return (
    <div className='fixed left-0 w-2/12 h-screen text-white bg-purple-900/50 backdrop-blur-2xl top-0 z-[9999] '>
        <ul className='flex flex-col gap-5'>
            <li className='text-xl w-full text-start px-5 py-2 hover:text-white  hover:bg-purple-500/20 '>Home</li>
            <li className='text-xl w-full text-start px-5 py-2 hover:text-white  hover:bg-purple-500/20 '>About</li>
            <li className='text-xl w-full text-start px-5 py-2 hover:text-white  hover:bg-purple-500/20 '>Service</li>
            <li className='text-xl w-full text-start px-5 py-2 hover:text-white  hover:bg-purple-500/20 '>Blog</li>
            <li className='text-xl w-full text-start px-5 py-2 hover:text-white  hover:bg-purple-500/20 '>Contact</li>
      
    
            
        </ul>
        
    </div>
  )
}
