import React from 'react';
import { useState } from 'react';
import arrow from "../Assets/arrow.svg";
import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
    TERipple,
  } from "tw-elements-react";
import ArtMobile from './ArtMobile';
  

const ArtNav = () => {

  const [buttonText, setButtonText] = useState('Join Group');
 
  const handleClick = () => {
    setButtonText(buttonText === 'Join Group' ? 'Leave Group' : 'Join Group');
  };
  return (
    <div>




      <div class="border-b mb-5 flex justify-between text-sm mx-12">


   


      <div className='hidden md:block'>
    <div class="flex gap-3  text-blue-600 items-center pb-2 pr-2 ">
       
      
    <a href="#" class="font-bold  cursor-pointer text-black text-lg">All Posts (32)
    <div className='h-[1px]  cursor-pointer bg-black w-[100%]'></div></a>
    <a href="#" className="font-md cursor-pointer hover:border-b ">Article</a>
    <a href="#" className="font-md cursor-pointer">Event</a>
    <a href="#" className="font-md cursor-pointer">Education</a>
    <a href="#" className="font-md cursor-pointer">Job</a>
</div> 
    </div>

<div className='hidden md:block'>
    <div className='flex gap-4'>
  
    <TEDropdown className="flex justify-center">
      <TERipple rippleColor="light">
        <TEDropdownToggle className="flex items-center mb-5 whitespace-nowrap rounded bg-zinc-200 px-3 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black ">
         Write Post
          <span className="ml-2 [&>svg]:w-5 w-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu>
      </TEDropdownMenu>
    </TEDropdown>


    <TEDropdown className="flex justify-center">
      <TERipple rippleColor="light">
        <TEDropdownToggle onClick={handleClick} className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
        {buttonText}
          <span className="ml-2 [&>svg]:w-5 w-2 h-5 font-bold">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0">
                </g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                    </g>
                    <g id="SVGRepo_iconCarrier"> 
                    <circle cx="8" cy="8" r="2.5" stroke="#222222" stroke-linecap="round"></circle>
                     <path d="M11.7679 8.5C12.0332 8.04063 12.47 7.70543 12.9824 7.56815C13.4947 7.43086 14.0406 7.50273 14.5 7.76795C14.9594 8.03317 15.2946 8.47 15.4319 8.98236C15.5691 9.49472 15.4973 10.0406 15.2321 10.5C14.9668 10.9594 14.53 11.2946 14.0176 11.4319C13.5053 11.5691 12.9594 11.4973 12.5 11.2321C12.0406 10.9668 11.7054 10.53 11.5681 10.0176C11.4309 9.50528 11.5027 8.95937 11.7679 8.5L11.7679 8.5Z" stroke="#222222">
                        </path> <path d="M13.4054 17.507L13.8992 17.4282L13.4054 17.507ZM12.5 18H3.50002V19H12.5V18ZM3.08839 17.5857C3.21821 16.7717 3.53039 15.6148 4.26396 14.671C4.97934 13.7507 6.11871 13 8.00002 13V12C5.80109 12 4.37371 12.9004 3.47442 14.0573C2.59334 15.1909 2.24293 16.5374 2.10087 17.4282L3.08839 17.5857ZM8.00002 13C9.88133 13 11.0207 13.7507 11.7361 14.671C12.4697 15.6148 12.7818 16.7717 12.9117 17.5857L13.8992 17.4282C13.7571 16.5374 13.4067 15.1909 12.5256 14.0573C11.6263 12.9004 10.199 12 8.00002 12V13ZM3.50002 18C3.20827 18 3.05697 17.7827 3.08839 17.5857L2.10087 17.4282C1.95832 18.322 2.6872 19 3.50002 19V18ZM12.5 19C13.3128 19 14.0417 18.322 13.8992 17.4282L12.9117 17.5857C12.9431 17.7827 12.7918 18 12.5 18V19Z" fill="#222222"></path> <path d="M17.2966 17.4162L16.8116 17.5377L17.2966 17.4162ZM11.8004 13.9808L11.5324 13.5586L11.0173 13.8855L11.4391 14.3264L11.8004 13.9808ZM13.4054 17.507L13.8992 17.4282L13.4054 17.507ZM16.3951 18H12.5V19H16.3951V18ZM16.8116 17.5377C16.8654 17.7526 16.7076 18 16.3951 18V19C17.2658 19 18.0152 18.2277 17.7816 17.2948L16.8116 17.5377ZM13.5001 14C14.5278 14 15.2496 14.5027 15.7784 15.2069C16.3178 15.9253 16.6345 16.8306 16.8116 17.5377L17.7816 17.2948C17.5905 16.5315 17.2329 15.4787 16.5781 14.6065C15.9126 13.7203 14.9202 13 13.5001 13V14ZM12.0683 14.4029C12.4581 14.1556 12.9262 14 13.5001 14V13C12.732 13 12.0787 13.2119 11.5324 13.5586L12.0683 14.4029ZM11.4391 14.3264C12.3863 15.3166 12.7647 16.6646 12.9116 17.5857L13.8992 17.4282C13.7397 16.4285 13.3158 14.8416 12.1617 13.6351L11.4391 14.3264ZM12.9116 17.5857C12.9431 17.7827 12.7918 18 12.5 18V19C13.3128 19 14.0417 18.322 13.8992 17.4282L12.9116 17.5857Z" fill="#222222"></path> <rect x="16.25" y="5.25" width="4.5" height="0.5" rx="0.25" stroke="#222222" stroke-width="0.5" stroke-linecap="round"></rect> <rect x="18.75" y="3.25" width="4.5" height="0.5" rx="0.25" transform="rotate(90 18.75 3.25)" stroke="#222222" stroke-width="0.5" stroke-linecap="round"></rect> </g></svg>
          </span>
        </TEDropdownToggle>
      </TERipple>

      <TEDropdownMenu>
      </TEDropdownMenu>
    </TEDropdown>

    
    </div>
    </div>

</div>
    </div>
  )
}

export default ArtNav
