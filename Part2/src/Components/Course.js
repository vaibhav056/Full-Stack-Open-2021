import React from 'react'
const Course = ({courses}) => {
    return(
      <div>
        {courses.map(c =>
          <div key={c.id}>
            <Header course={c.name} />
            <Content parts={c.parts} />
            <Total parts={c.parts} />
          </div>
          )}
      </div>
    )
  }
 const Header = ({course}) => {
    return (
      <div>
        <h1>{course}</h1>
      </div>
    )
  }
const Content = ({parts}) => {
  return(
      <div>
        {parts.map(i => 
          <p key={i.id}><Part i={i} /></p>
        )}
      </div>
    )
  }
   const Part = ({i}) => {
    return (
      <>{i.name} : {i.exercises}</>
    )
  }
   const Total = ({parts}) => {
    const total = parts.reduce((s, p) => s + p.exercises, 0)
  
    return(
    <p><strong>Total of : {total} exercises</strong></p>
    )
  }
export default Course