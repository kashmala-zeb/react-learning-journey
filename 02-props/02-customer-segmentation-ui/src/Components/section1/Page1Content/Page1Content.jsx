import React from 'react'
import Left from './LeftContent/Left'
import Cards from './RightContent/Cards/Cards'


const Page1Content = (props) => {
  return (
    <div className='bg-white flex justify-between px-3 py-3 h-[90vh] w-full  gap-2'>
       <Left/>
       <Cards content={props.elements}/>
    </div>
  )
}

export default Page1Content
