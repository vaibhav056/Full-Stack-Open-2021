import React from 'react'

 
const Courses = (props) => {
    
    let Courses = props.courses.map(value => (
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
  
const Course = (props) => {
    return (
      <div>
        <Header coursename={props.coursename} />
        <Content parts={props.parts}/>
        <Total parts={props.parts} />
      </div>
    )
  }
 
  
const Header = (props) => {
    return (
      <div>
        <h1>{props.coursename}</h1>
      </div>
    )
  }
  
const Content = (props) => {
    
    let Content = props.parts.map(value => (
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
  
  
const Part = (props) => {
    
    return (
      <p>{props.name + " " + props.exercises}</p>
    )
  }
  
const Total = (props) => {
    const total = Object.values(props.parts).reduce((s, {exercises}) => s + exercises, 0)
    
      return (
        <p>
        Number of exercises: {total}
        </p>
      )
  }

export default Courses
