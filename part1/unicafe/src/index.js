import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setScore(score + 1)
    setTotal(total + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setScore(score - 1)
    setTotal(total + 1)
  }

  const calculateAvg = () => {
    if (total === 0) return 0
    return score / total
  }

  const calculatePos = () => {
    if (total === 0) return 0
    return good / total * 100
  }

  return (
    <div>
      <h2>Give feedback</h2>
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <h2>Statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      {/* <div>average {(total === 0) ? 0 : score / total}</div>
      <div>positive {(total === 0) ? 0 : good / total * 100} %</div> */}
      <div>average {calculateAvg()}</div>
      <div>positive {calculatePos()} %</div>
      <div></div>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
