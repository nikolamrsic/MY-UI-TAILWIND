import React from 'react'


function PrevIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
}

function NextIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
}

function EndIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 stroke-white w-6 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
  </svg>
}

function StartIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
  </svg>
}

export default function Paggination({chellNum,maxPages}) {
 
    //Curent Page
    let[curentPage,setCurentPage]=React.useState(1)
    let[counter,setCounter]=React.useState(1)
     
  
    const getNext=(e)=>{
        if(parseInt(formRef.current.elements['pageNum'][
            formRef.current.elements['pageNum'].length-1
        ].value)===maxPages){
            return
         }
      setCounter(counter+1)
    }
    const getPrev=(e)=>{
       
        if(parseInt(formRef.current.elements['pageNum'][0].value)===1){
           return
        }
        setCounter(counter-1)
      }
    
    let formRef=React.useRef()
   


    const skipToStart=()=>{
        setCounter(1)
    }

    const skipToEnd=()=>{

        if(parseInt(formRef.current.elements['pageNum'][
            formRef.current.elements['pageNum'].length-1
        ].value)===maxPages){
            return
         }

        setCounter(maxPages-(chellNum-1))
    }

  return (
    <div>
      <h1 className='text-md text-white mb-3'>Page selected (Demo) : {curentPage}</h1>
      {/**Navigation container */}
      <div className='flex gap-2 items-center'>
        {/**Skip to Start */}
        <button onClick={skipToStart}><StartIcon/></button>
        {/**Prev */}
        <button onClick={getPrev}><PrevIcon/></button>
            <form ref={formRef}>
            { Array.from(new Array(chellNum),(i,ind)=>i=ind+1).map((num,ind)=>{
                return <input style={{
                    background:curentPage==(ind+counter) && '#4C1D95'
                }} key={ind} name="pageNum" onClick={e=>setCurentPage(e.target.value)} value={ind+counter} readOnly className='text-white hover:bg-purple-700 outline-none w-9 h-9 text-center cursor-pointer  bg-transparent  ransparent'/>
            })}
          </form> 
        <button onClick={getNext}><NextIcon/></button>
        {/**Skip to end */}
        <button onClick={skipToEnd}><EndIcon/></button>

      </div>
    </div>
  )
}
