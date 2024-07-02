import React from 'react';
import { useState } from 'react';
import arrow from "../Assets/arrow.svg";

const ButtonHero = () => {
    const [buttonText, setButtonText] = useState('Join Group');
 
    const handleClick = () => {
      setButtonText(buttonText === 'Join Group' ? 'Leave Group' : 'Join Group');
    };
  return (
    <div>
      <nav class="flex items-center justify-between  flex-wrap pt-7 px-6 ">
  <div class="flex items-center flex-shrink-0 text-black mr-6">
    
  <button className="block lg:hidden">
      <img src={arrow} alt="" className='hover:text-zinc-400 hover:border-white'/>
    </button>
  </div>
  <div class="block lg:hidden">
    <button onClick={handleClick} class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-zinc-400 hover:border-white">
     {buttonText}
    </button>
  </div> 
</nav>
    </div>
  )
}

export default ButtonHero
