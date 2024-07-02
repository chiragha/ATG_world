import React from 'react';
import arrow from "../Assets/arrow.svg";

const ArtMobile = () => {
   
  return (
    <>
    
    
  <button className="block lg:hidden">
      <img src={arrow} alt="" className='hover:text-zinc-400 hover:border-white'/>
    </button>
  
  <div class="block lg:hidden">
    <button  class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-zinc-400 hover:border-white">
     hello
    </button>
    </div>
 
    </>
  )
}

export default ArtMobile
