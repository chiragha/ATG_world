import React from 'react';
import ButtonHero from './ButtonHero';

const Hero = () => {

 
  return (
    <>

<section
  className="relative bg-[url('https://eco-n-tech.com/wp-content/cache/thumb/ec/890ddcd1c2ce5ec_3806x1034.png')] bg-cover bg-center bg-no-repeat h-96"
>


<ButtonHero />


  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >




    <div className="max-w-xl lg:text-center ltr:sm:text-left rtl:sm:text-right mb-11 ">
 

      <h1 class=" max-w-lg sm:text-xl/relaxed md:text-left items-start  text-white">
      <span className='text-4xl'>Computer Engineering</span> <br/>
      <span>142,765 Computer Engineers follow this</span>
      </h1>







     
    </div>
    {/* for md and sm screen  */}


  </div>



</section>

</>
  
  )
}

export default Hero
