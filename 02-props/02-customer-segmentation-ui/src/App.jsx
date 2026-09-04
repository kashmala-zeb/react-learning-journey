import React from 'react'
import Section1 from './Components/section1/Section1'



const App = () => {
  const users =[
    {
      no : 1,
      img : "/men.jpeg",
      btn : 'Satisfied'
    },
     {
      no : 2,
      img : "/mus.jpeg",
      btn : 'Satisfied'
    },
     {
      no : 3,
      img : "/boy.jpeg",
      btn : 'Underserved'
    },
     {
      no : 4,
      img : "/girl.jpeg",
      btn : 'Underbanked'
    },

  ]
  return (
    <div>
      <Section1  users={users}/>
       
     
    </div>
  )
}

export default App
