import React, { useState } from 'react'

const Button = ({ Click, txt }) => {
  return (
    <>
      <button onClick={Click}>{txt}</button>
    </>
  )
}

const Statistic = ({ text,CorrValue }) => {
  return (<>
    <td>{text}</td><td>{CorrValue}</td>
  </>
  )
}

const StatisticsObtained = ({ Good, Neutral, Bad, All }) => {
  if (!All) {
    return (
      <>
        <h1>Statistics Obtained:</h1>
        <p>No feedback were given</p>
      </>
    )
  }
  return (
    <div>
      <h1>Statistics Obtained:</h1>
      <table>
        <tbody>
          <tr><Statistic text='Good' CorrValue={Good} /></tr>
          <tr><Statistic text='Neutral' CorrValue={Neutral} /></tr>
          <tr><Statistic text='Bad' CorrValue={Bad} /></tr>
          <tr><Statistic text='All' CorrValue={All} /></tr>
          <tr><Statistic text='Average' CorrValue={(Good - Bad) / All} /></tr>
          <tr><Statistic text='Percentage' CorrValue={(Good * 100) / All + '%'} /></tr>
        </tbody>
      </table>

    </div>
  )
}



const App = () => {

  const [Good, setGood] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Bad, setBad] = useState(0)
  const All = Good + Neutral + Bad

  const GoodClick = () => setGood(Good + 1)
  const NeutralClick = () => setNeutral(Neutral + 1)
  const BadClick = () => setBad(Bad + 1)
  return (
    <div>
      <h1>Give The Feedback :) !</h1>
      <Button
        Click={GoodClick}
        text='Good' />

      <Button
        Click={NeutralClick}
        text='Neutral' />

      <Button
        Click={BadClick}
        text='Bad' />

      <StatisticsObtained
        Good={Good}
        Bad={Bad}
        Neutral={Neutral}
        All={All} />
    </div >

  )
}

export default App