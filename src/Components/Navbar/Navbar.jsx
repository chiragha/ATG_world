/* eslint-disable no-unused-vars */

import logo from "../Assets/logo.svg";
import  { useState } from 'react';
import fb from "../Assets/fb.svg";
import g from "../Assets/g.svg";


import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";


function Navbar  ()  {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className='hidden md:block mx-10'>
     
<nav class="flex justify-between items-center w-[100%] bg-white my-4 ">


    {/* for logo */}
  <div class="text-xl text-gray-800 font-bold">
    <img src={logo} alt="" />
  </div>

  {/* for search item */}

  <div class="flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 pt-0.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      <input className="ml-2 outline-none bg-transparent border-2 border-zinc-200 rounded-lg font-" type="text" name="search" id="search" placeholder="Search..." />
    </div>





 <div> 



 <div>
 <div>
      {/* <!-- Button trigger modal --> */}
      <TERipple rippleColor="white">
       <div>
       <button
          type="button"
          className=" flex flex-row  pb-2 pt-2.5 text-md font-medium  bg-white rounded-md px-4 py-2 hover:bg-zinc-700 leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() => setShowModal(true)}>
  Create Account. <span className='text-blue-500 font-bold'>Its Free</span>
          <span className="ml-1 [&>svg]:w-5 w-2">
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
        </button>
       </div>
      </TERipple>

      {/* <!-- Modal --> */}
      <TEModal show={showModal} setShow={setShowModal} staticBackdrop >
        <TEModalDialog>
          <TEModalContent>
            {/* <!--Close button--> */}
            <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
          
            {/* <!--Modal body--> */}
           
            <TEModalBody>
              
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">

<p className="text-sm leading-normal text-neutral-800 dark:text-neutral-200">
 Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼      
 </p>
 <h3 class="py-4 text-xl font-bold text-left text-gray-800 dark:text-white">Create an Account!</h3>
  
 <form class="px-8 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
						<div class="mb-4 md:flex md:justify-between">
							<div class="mb-4 md:mr-2 md:mb-0">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="firstName">
                                   
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="firstName"
                                    type="text"
                                    placeholder="First Name"
                                />
							</div>
							<div class="md:ml-2">
								<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="lastName">
                                    
                                </label>
								<input
                                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    id="lastName"
                                    type="text"
                                    placeholder="Last Name"
                                />
							</div>
						</div>
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                               
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
						</div>

                        <div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                               
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Password"
                            />
						</div>

                        <div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700 dark:text-white" for="email">
                               
                            </label>
							<input
                                class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Confirm Password"
                            />
						</div>
						
						<div class="mb-6 text-center">
							<button
                                class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Create Account
                            </button>
						</div>
						<hr className=" border-t" />
						<div className="text-center">
             
							<a className="flex gap-1 text-sm p-2 text-black dark:text-blue-500 align-baseline hover:text-blue-800"
								href="#"> <span><img src={fb} alt="" className='mt-1'/></span>
								Sign Up With Facebook
							</a>
						</div>
						<div className="text-center">
            <a className="flex gap-1 text-sm p-2 text-black dark:text-blue-500 align-baseline hover:text-blue-800"
								href="#"> <span><img src={g} alt="" className='mt-1'/></span>
								Sign Up With Google
							</a>
						</div>
					</form>
          <h2 className='text-center font-medium text-md'>By signing up, you agree to our Terms & conditions, Privacy policy</h2>
</div>
           
          
                
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>




    </div> 

</div>


   
    
   {/* <Link to="/modal"> <button className="bg-white  text-black rounded-md px-4 py-2 hover:bg-zinc-700 transition">
   Create Account. <span className='text-blue-500'>Its Free</span>


          </button>
          </Link>
          <Outlet /> */}
{/* {<Modal onClose={() => setShowModal(false)}/>} */}
    {/* </div>  */}
         
       
    
    {/* <ClickMe /> */}
</nav>
    </div>
  )
}

export default Navbar
