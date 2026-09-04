import React from 'react'
import Navbar from './Page1Content/Navbar/Navbar'
import Page1Content from './Page1Content/Page1Content'

const Section1 = (props) => {
  return (
    <div className='bg-white h-screen'>
      <Navbar/>
     <Page1Content elements={props.users}/>
      
    </div>
  )
}

export default Section1
