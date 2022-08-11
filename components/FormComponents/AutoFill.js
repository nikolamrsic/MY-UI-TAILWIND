import React from "react";

export default function AutoFill() {
  let [mainValue, setMainValue] = React.useState("");
  let [searchValue, setSearchValue] = React.useState("");
    let [isOpenMenu, setOpenMenu] = React.useState(false);

  let AutoFillRef = React.useRef();

  let [options, setOptions] = React.useState([
    { value: "IceCream  " },
    { value: "Pizza 🍕" },
    { value: "Banana 🍌" },
    { value: "Cactus 🌵" },
    { value: "Beer 🍺" },
    { value: "Car 🚗" },
    { value: "Hamburger 🍔" },
    { value: "Burito 🌯" },
    { value: "Pancakes 🥞" },
    { value: "Cace 🍰" },
    { value: "Coffe☕" },
  ]);
  let [filtered, setFiltered] = React.useState([]);

  const toggleMenuLocal = () => {
    setOpenMenu(!isOpenMenu);
  };

  const closeMenuGlobal=(e)=>{
    if(e.target!==AutoFillRef.current){
      setOpenMenu(false)
    }
  }

  //close Global Menu

  React.useEffect(()=>{
   window.addEventListener('click',closeMenuGlobal)
   return (()=>{
    window.removeEventListener('click',closeMenuGlobal)
   })
  })



  return (
    <div className="w-[250px]">
      <input
        ref={AutoFillRef}
        value={mainValue}
        onFocus={()=>{
          setOpenMenu(true)
        }}
        onChange={(e)=>{
          setMainValue(e.target.value);
          setFiltered(
            options.filter((option)=>{
              if(option.value.toLowerCase().includes(mainValue)){
                return option
              }
            })
          )
          
        }}
        className=" w-full focus:outline-none focus:text-black  border-b-4 border-b-purple-900  bg-purple-600/40 focus:bg-white text-white px-4 py-2"
        type="text"
      />
      {isOpenMenu && 
        <ul className="w-full max-h-[250px] overflow-y-auto mt-2 border flex flex-col gap-3 py-2 px-1 bg-white ">
       
           { filtered.length===0 ? options.map((option)=>{
              return <li>
              <input className="hover:bg-purple-900 hover:text-white w-full py-1 px-2 cursor-pointer" readOnly onClick={(e)=>setMainValue(e.target.value)} value={option.value} key={option.value}></input>
            </li>
           }) : filtered.map((filter)=>{
             return <li className="">
               <input className=" hover:bg-purple-900 hover:text-white w-full py-1 px-2 cursor-pointer "  onClick={(e)=>setMainValue(e.target.value)} value={filter.value} key={filter.value}></input>
             </li>
           })}
         
        </ul>
      }
     
    </div>
  );
}
