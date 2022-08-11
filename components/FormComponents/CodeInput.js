import React, { useRef } from "react";
import { Fragment } from "react";
export default function CodeInput() {
  let [valueChar1, setValueChar1] = React.useState("");
  let [valueChar2, setValueChar2] = React.useState("");
  let [valueChar3, setValueChar3] = React.useState("");
  let [valueChar4, setValueChar4] = React.useState("");

  let char1 = useRef();
  let char2 = useRef();
  let char3 = useRef();
  let char4 = useRef();

  let formRef = useRef();

  let[code,setCode]=React.useState([])


  return (
      <>
    <form ref={formRef} onSubmit={(e)=>{
       e.preventDefault()
        console.log(
            [valueChar1,valueChar2,valueChar3,valueChar4],'<<CODE'
        )
    }} className="flex flex-col">
  
     
    <div className="flex gap-3">
      <input
        ref={char1}
        onChange={(e) => {
          setValueChar1(e.target.value)
          if(e.target.value!==''){
            setCode([...code,e.target.value])  
            char2.current.focus()
          }
        }}
        value={valueChar1}
        className="h-16 w-16 font-bold focus:bg-purple-900 focus:text-white boder border-b-4 border-b-white border-transparent  text-center focus:outline-none bg-white"
      ></input>
      <input
        ref={char2}
        value={valueChar2}
        onChange={(e) => {
            setValueChar2(e.target.value)
            if(e.target.value!==''){
                setCode([...code,e.target.value])  
                char3.current.focus()
            }
          }}
          className="h-16 w-16 font-bold focus:bg-purple-900 focus:text-white boder border-b-4 border-b-white border-transparent  text-center focus:outline-none bg-white"
      ></input>
      <input
        ref={char3}
        value={valueChar3}
        onChange={(e) => {
            setValueChar3(e.target.value)
            if(e.target.value!==''){
                setCode([...code,e.target.value])  
                char4.current.focus()
            }
          }}
          className="h-16 w-16 font-bold focus:bg-purple-900 focus:text-white boder border-b-4 border-b-white border-transparent  text-center focus:outline-none bg-white"
      ></input>
      <input
        type={valueChar4!='' ? 'submit' : 'text'}
        ref={char4}
        value={valueChar4}
        onChange={(e) => {
            setValueChar4(e.target.value)

            if(e.target.value!==''){
             
            }
            
          }}
          className="h-16 w-16 font-bold focus:bg-purple-900 focus:text-white boder border-b-4 border-b-white border-transparent  text-center focus:outline-none bg-white"
      ></input>
    </div>
    
    </form>
   
    </>
  );
}
