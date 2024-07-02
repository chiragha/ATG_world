import React from 'react';
import ex from "../Assets/exclamation.svg";

const ArtSidebar = () => {
  return (
    <div  className='hidden md:block'>
        <div class="rounded overflow-hidden  flex flex-col">
    <div class="bg-white max-w-2xl  overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 ml-5 sm:px-6">
        {/* for location */}
        <h3 class="text-lg leading-6 font-medium text-gray-900">
      <div className="mb-3 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
              <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border border-solid border-black bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none"
                  placeholder="Enter Your Location"
                  aria-label="Search"
                  aria-describedby="button-addon2" />

              {/* <!--Search icon--> */}
              <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                 <img src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-edit-24px'%20clip-path='url(%23clip0_1_848)'%3e%3cpath%20id='Vector'%20d='M2.5%2014.375V17.5H5.625L14.8417%208.28334L11.7167%205.15834L2.5%2014.375ZM17.2583%205.86667C17.5833%205.54167%2017.5833%205.01667%2017.2583%204.69167L15.3083%202.74167C14.9833%202.41667%2014.4583%202.41667%2014.1333%202.74167L12.6083%204.26667L15.7333%207.39167L17.2583%205.86667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_848'%3e%3crect%20width='20'%20height='20'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="img" style={{width:20}}/>
              </span>
          </div>
      </div>

        </h3>
        <p class=" max-w-2xl flex gap-2 text-sm text-gray-500 text-start">
            <span><img src={ex} alt='' className=''/></span>
        Your location will help us serve better and extend a personalised experience.
        </p>
    </div>
    <div class="border-t border-gray-200">
        <h2 className='flex gap-2 mt-4' ><img src="data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='twotone-thumb_up-24px'%20clip-path='url(%23clip0_1_1263)'%3e%3cpath%20id='Vector'%20opacity='0.3'%20d='M15.75%209V7.5H9L10.005%203.495L6.75%206.75V14.25H13.5L15.75%209Z'%20fill='black'/%3e%3cpath%20id='Vector_2'%20d='M6.75%2015.75H13.5C14.1225%2015.75%2014.655%2015.375%2014.88%2014.835L17.145%209.5475C17.2125%209.375%2017.25%209.195%2017.25%209V7.5C17.25%206.675%2016.575%206%2015.75%206H11.0175L11.73%202.5725L11.7525%202.3325C11.7525%202.025%2011.625%201.74%2011.4225%201.5375L10.6275%200.75L5.685%205.6925C5.415%205.9625%205.25%206.3375%205.25%206.75V14.25C5.25%2015.075%205.925%2015.75%206.75%2015.75ZM6.75%206.75L10.005%203.495L9%207.5H15.75V9L13.5%2014.25H6.75V6.75ZM0.75%206.75H3.75V15.75H0.75V6.75Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1263'%3e%3crect%20width='18'%20height='18'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
         alt="" className='w-4 h-4 mt-1'/><span>REcommended Groups</span></h2>
        <dl>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <span className='flex flex-row'>
                <span><img src='https://dont-copy.netlify.app/assets/recGroup2-A2R6AKaI.jpg' alt="img" className=' rounded-full w-7 h-7 mr-1  '/></span>
                <dt class="text-md font-medium text-black mt-1">
                Leisure
                </dt>
               
                </span>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <button class="bg-zinc-300 hover:bg-blue-700 text-black  py-2 px-4 rounded-full">
                   Follow
                    </button>
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <span className='flex flex-row'>
                <span><img src='https://dont-copy.netlify.app/assets/recGroup3-AxHGDmNo.jpg' alt="img" className=' rounded-full w-7 h-7 mr-1  '/></span>
                <dt class="text-md font-medium text-black mt-1">
                Activism
                </dt>
               
                </span>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
               <button class="bg-zinc-300 hover:bg-blue-700 text-black  py-2 px-4 rounded-full">
               Follow
                </button>
                </dd>
            </div>
            <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <span className='flex flex-row'>
                <span><img src='https://dont-copy.netlify.app/assets/recGroup4-cA6Wedko.jpg' alt="img" className=' rounded-full w-7 h-7 mr-1  '/></span>
                <dt class="text-md font-medium text-black mt-1">
                MBA
                </dt>
               
                </span>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
               <button class="bg-zinc-300 hover:bg-blue-700 text-black  py-2 px-4 rounded-full">
                Follow
                    </button>
                </dd>
            </div>
            <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <span className='flex flex-row'>
                <span><img src='https://dont-copy.netlify.app/assets/recGroup1-JHI-0zi5.jpg' alt="img" className=' rounded-full w-7 h-7 mr-1  '/></span>
                <dt class="text-md font-medium text-black mt-1">
                Philosophy
                </dt>
               
                </span>
                <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <button class="bg-zinc-300 hover:bg-blue-700 text-black  py-2 px-4 rounded-full">
                Follow
                </button>
                
                </dd>
                <button class=" text-blue-500 text-right ">
               See More...
                </button>
            </div>
        </dl>
    </div>
</div>
    </div>
    </div>
  )
}

export default ArtSidebar
