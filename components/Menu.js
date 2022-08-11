import React from 'react'

export default function Menu({filled,outlined,title,onClickHandle}) {
  
  

  //variants
  let filledStyle=`py-3 px-9 w-fit   bg-purple-900  border border-purple-700   hover:bg-purple-700 transition-all  text-white`
  let outlinedStyle=`py-3 px-9 w-fit    border border-purple-700   hover:bg-purple-700 transition-all  text-white`


  let menuBtnRef=React.useRef()
  let[isMenuOpen,setMenuOpen]=React.useState(false)

  //orienatation
  const orientation_left={
    display:'flex',
    flexDirection:'row'
  }
  
  const  orientation_right={
    display:'flex',
    flexDirection:'row-reverse',
  }

  const  orientation_bottom={
    display:'flex',
    flexDirection:'column',
  }
  const  orientation_top={
    display:'flex',
    flexDirection:'column',
  }




  let [options,setOptions]=React.useState([
      {title:'Your link'},
      {title:'Your link'},
      {title:'Your link'},
      {title:'Your link'},
     
  ])
  
  const toogleMenuGlobal=(e)=>{
    if(e.target!=menuBtnRef.current){
        setMenuOpen(false)
        
    }
  
  }
  const tootleMemnuLocal=(e)=>setMenuOpen(!isMenuOpen)
  React.useEffect(()=>{
    window.addEventListener('click',toogleMenuGlobal)
    return (()=>{
        window.removeEventListener('click',toogleMenuGlobal)
    })
  },[isMenuOpen])

  return (
    <div  className='w-fit flex flex-col relative  gap-3  '>
        {/**Toggle Menu */}
        <button onClick={()=>{
          tootleMemnuLocal()
          if(onClickHandle){
            onClickHandle()
          }
        }} ref={menuBtnRef} className={filled ? filledStyle : outlinedStyle}>Menu</button>
        {/**Link container */}
        { isMenuOpen &&
        <div className='  relative  4'>
        <div className=' absolute     min-w-fit w-[250px] drop-shadow-md z-50'>
            {/**List of links */}
            <ul className='w-full px-2 py-4 bg-white'>
                {/**Render list */}
                {options.map((option,index)=>{
                    return <li key={index} className='p-2 hover:bg-purple-900 hover:text-white cursor-pointer'><button value="Cicked" onClick={(e)=>{alert(e.target.value
                        )}}>{option.title +`${index+1}`}</button></li>
                })}
            </ul>
        </div>
        </div>
}
    </div>
  )
}
