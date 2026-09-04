import React from 'react'

const RightCard = (props) => {
  return (
    <div className=' bg-white w-80 h-full rounded-4xl overflow-hidden relative shrink-0'>

      <img className='absolute inset-0 object-cover h-full w-full' src={props.img} alt="Girl" />

      <div className='absolute inset-0 h-full w-full p-6 flex flex-col justify-between bg-black/30'>

        <h2 className='bg-white text-black rounded-full w-10 h-10  items-center flex 
        justify-center font-bold font-mono'>{props.no}</h2>

        <p className='text-white mt-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Velit dolorem illo suscipit culpa omnis voluptatibus, eaque doloribus quos beatae, 
          veritatis aliquam, dolore libero sit 
           maiores? Esse ex veniam dignissimos deleniti.
           </p>

       <div className='flex justify-between'>

        <button className='bg-blue-950 text-white rounded-full p-2 w-25'>{props.btn}</button>

         <button className='bg-blue-950 text-white rounded-full p-2 w-10 h-10'>"-"</button>

      </div>

      </div>

    </div>
  )
}

export default RightCard
