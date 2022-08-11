import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import Paggination from '../components/Paggination'
import Switch from '../components/FormComponents/Switch'
import CheckBox from '../components/FormComponents/CheckBox'
import TextInput from '../components/FormComponents/TextInput'
import AutoFill from '../components/FormComponents/AutoFill'
import CodeInput from '../components/FormComponents/CodeInput'
import Sidebar from '../components/Sidebar'
import React from 'react'
export default function Home() {
  let [openSidebar,setOpenSidebar]=React.useState(false)
  return (
    <div className='w-full min-h-screen  bg-gradient-to-tl to-slate-800 from-[#131313]'>
      {/** */}
      <div className=' boder border-purple-600 drop-shadow-xl  bg-gradient-to-b from-purple-900 to-violet-800 text-center py-5'>
        <h1 className='text-3xl text-white font-bold'>MY Tailwind UI Demo</h1>
        <h3 className='text-sm mt-4 text-white'>made by: Nikola M.</h3>
        </div>

      {/**Navigation components */}
      <section className=' flex flex-col gap-5 px-5 py-6'>
        <div className='px-2 py-4 w-fit '><h1 className='text-xl  text-white'>Navigation Components</h1></div>
        <div>
          <div className='flex gap-5 flex-col'>
            <div className='flex gap-5'>
              <Menu filled />
              <Menu outlined />
              <Menu filled  />
              <button className='text-white border border-violet-900 py-4 px-8' onClick={()=>{setOpenSidebar(!openSidebar)}}>Toggle SIde bar</button>
              { openSidebar &&
              <Sidebar/>
}
            </div>
            <div>
              <Paggination chellNum={5} maxPages={10} />
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-gradient-to-r from-purple-800 to-black h-[1px] border-none"></div>
      {/**Inputs Components */}
      <section className='px-5 py-6 flex flex-col gap-'>
        <div className='px-2 py-4 w-fit '><h1 className='text-xl  text-white'>Inputs Components</h1></div>
        <div className='flex flex-col gap-8 px-2 py-4 '>
          <Switch />
          <CheckBox />
          <div className='flex gap-3'>
            <h1 className='text-white'>Input fileds:</h1>
            <div className='flex gap-3'>
              <TextInput />
              <TextInput eror />
            </div>
          </div>
          <div className='flex gap-3'>
          <h1 className='text-white'>AutoFill fileds:</h1>
          <AutoFill/>
          </div>
          <div className='flex flex-row gap-3'>
            <h1 className='text-white'>Code input:</h1>
            <CodeInput/>
          </div>
        </div>
      </section>
    </div>
  )
}
