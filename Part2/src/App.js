import React from 'react'
import Courses from './components/Course'

const App = () => {
  const courses = [
    {
      Name: 'Half Stack application development',
      Id: 1,
      parts: [
        {
          Name: 'Fundamentals of React :',
          Exercises: 10,
          Id: 1
        },
        {
          Name: 'Using props to pass data :',
          Exercises: 7,
          Id: 2
        },
        {
          Name: 'State of a component :',
          Exercises: 14,
          Id: 3
        },
        {
          Name: 'Redux :',
          Exercises: 11,
          Id: 4
        }
      ]
    }, 
    {
      Name: 'Node.js :',
      Id: 2,
      Parts: [
        {
          Name: 'Routing :',
          Exercises: 3,
          Id: 1
        },
        {
          Name: 'Middlewares :',
          Exercises: 7,
          Id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses}/>
    </div>
  )
}

export default App
