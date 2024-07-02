import React from 'react'
function ArtHead  (props)  {
  return (
    <div>
       <div class="py-4 mb-auto text-left items-start ml-3">
           <a href="#"
                class="font-medium text-lg inline-block  mb-2">
                    <h2 className='d-flex'>{props.head1}<span className='font-bold text-[30px]'>{props.head}</span></h2></a>
                    <span className='flex gap-4'>
            <h4 class="text-black text-lg font-bold">
        {props.para}
            </h4>
            <img src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-more_vert-24px'%3e%3cpath%20id='Vector'%20d='M18.6667%2014C18.6667%2015.2833%2019.7167%2016.3333%2021%2016.3333C22.2833%2016.3333%2023.3333%2015.2833%2023.3333%2014C23.3333%2012.7166%2022.2833%2011.6666%2021%2011.6666C19.7167%2011.6666%2018.6667%2012.7166%2018.6667%2014ZM16.3333%2014C16.3333%2012.7166%2015.2833%2011.6666%2014%2011.6666C12.7167%2011.6666%2011.6667%2012.7166%2011.6667%2014C11.6667%2015.2833%2012.7167%2016.3333%2014%2016.3333C15.2833%2016.3333%2016.3333%2015.2833%2016.3333%2014ZM9.33333%2014C9.33333%2012.7166%208.28333%2011.6666%207%2011.6666C5.71666%2011.6666%204.66666%2012.7166%204.66666%2014C4.66666%2015.2833%205.71666%2016.3333%207%2016.3333C8.28333%2016.3333%209.33333%2015.2833%209.33333%2014Z'%20fill='black'/%3e%3c/g%3e%3c/svg%3e" alt="img" className='w-8 rounded-full cursor-pointer'/></span>
            <p className='my-2'>{props.para2}</p>
        </div>
    </div>
  )
}

export default ArtHead
