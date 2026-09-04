import React from 'react'
import RightCard from './RightCard'

const Cards = (props) => {

  return (
    <div id='cards' className='bg-white px-4 py-4 h-[75vh] w-255 flex overflow-x-auto flex-nowrap gap-4 rounded-4xl'>
     {props.content.map((image)=>(
         <RightCard img={image.img} no={image.no} btn={image.btn}/>

     )
    
    )}
    

    </div>
  )
}

export default Cards
