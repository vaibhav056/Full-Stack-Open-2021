import React from 'react'

const Header = ({ course }) => ( <h1>{course}</h1>   )

const Part = ({ pt, exrc }) => ( <p> {pt} {exrc} </p> )

const Content = (props) => {
  const { parts } = props;
  return (
    <>
      <Part pt={parts[0].part1} exrc={parts[0].excercises1} />
      <Part pt={parts[1].part2} exrc={parts[1].excercises2} />
      <Part pt={parts[2].part3} exrc={parts[2].excercises3} />
    </>
  )
}

const Total = ({ parts }) => (
      <p>Number of excercises: {parts[0].excercises1 + parts[1].excercises2 + parts[2].excercises3 }</p>
  )

const App = () => {
  const course = {
    name: 'Half Stack Application development',
    parts: [
      {
        part1: 'Fundamentals to React:',
        excercises1: 10
      },
      {
        part2: 'Using props to pass data:',
        excercises2: 7
      },
      {
        part3: 'State of a component:',
        excercises3: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  )
}

export default App