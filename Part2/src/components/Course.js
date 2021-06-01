import React from 'react'
const Courses = (c) => {
    
  let Courses = c.courses.map(value => (
    <div key={value["Id"]}>
      <Course coursename={value["Name"]} parts={value["parts"]}/>
    </div>
  ))

  return (
    <div>
      {Courses}
    </div>
  )
}

const Course = (c) => {
  return (
    <div>
      <Header coursename={c.coursename} />
      <Content parts={c.parts}/>
      <Total parts={c.parts} />
    </div>
  )
}
  
const Header = (c) => {
    return (
      <div>
        <h1>{c.coursename}</h1>
      </div>
    )
  }
  
const Content = (c) => {
    
    let Content = c.parts.map(value => (
      <div key={value["Id"]}>
      <Part name={value["Name"]} exercises={value["Exercises"]} />
      </div>
    ))
  
    return (
      <div>
        {Content}
      </div> 
    )
  }
  
  
const Part = (p) => {
    
    return (
      <p>{p.name + " " + p.exercises}</p>
    )
  }
  
const Total = (p) => {
    const total = Object.values(p.parts).reduce((s, {exercises}) => s + exercises, 0)
    
      return (
        <p>
        Number of exercises {total}
        </p>
      )
  }

  

export default Courses
