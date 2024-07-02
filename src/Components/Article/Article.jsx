import React from 'react';
import art1 from "../Assets/art1.jpg";
import art2 from "../Assets/art2.jpg";
import art3 from "../Assets/art3.jpg";
import ArtNav from './ArtNav';
import ArtSidebar from './ArtSidebar';
import ArtView from './ArtView';
import ArtHead from './ArtHead';


const Article = () => {
  return (
    <div>



      <div className="max-w-screen-xl  p-5 sm:p-10 md:p-16 ">

<ArtNav />


<div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 gap-10 ml-16 ">

   
    <div class="rounded overflow-hidden flex flex-col ">
        <a href="#"></a>
        <div class="relative"><a href="#">
                <img class="w-full"
                    src={art1}
                    alt="Sunset in the mountains" className="bottom-0 top-0 right-0 left-0 h-60 w-[100%]"/>
                
            </a>
           
        </div>
       <ArtHead 
       head1="✍️"
       head="Article"
       para="What if famous brands had regular fonts? Meet RegulaBrands!"
       para2="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"/>
        <ArtView />
    </div>



  <ArtSidebar />




    <div class="rounded overflow-hidden flex flex-col">
        <a href="#"></a>
        <div class="relative"><a href="#">
                <img class="w-full"
                    src={art2}
                    alt="Sunset in the mountains" className="bottom-0 top-0 right-0 left-0 h-60 w-[100%]"/>
                
            </a>
           
        </div>
        <ArtHead 
       head1="🔬️"
       head=" Education"
       para="What if famous brands had regular fonts? Meet RegulaBrands!"
       para2="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"/>
        <ArtView />
    </div>






    <div>
       
    </div>



   
    <div class="rounded overflow-hidden flex flex-col">
        <a href="#"></a>
        <div class="relative"><a href="#">
                <img class="w-full"
                    src={art3}
                    alt="Sunset in the mountains" className="bottom-0 top-0 right-0 left-0 h-60 w-[100%]"/>
               
            </a>
        </div>
        <ArtHead 
       head1="🗓️"
       head=" Meetup"
       para="What if famous brands had regular fonts? Meet RegulaBrands!"
       para2="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"/>
        <ArtView />
    </div>


    
   
    <div >
        </div>





        <div class="rounded overflow-hidden flex flex-col">
        <a href="#"></a>
        <div class="relative"><a href="#">
              
                <div
                    class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a><a href="#!">
               
            </a>
        </div>
        <ArtHead 
       head1="💼️"
       head=" Job"
       para="What if famous brands had regular fonts? Meet RegulaBrands!"
       para2="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"/>
        <ArtView />
    </div>


        </div>
        </div>`
    </div>
  )
}

export default Article
