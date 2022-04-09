import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Statistics = ({ text, total, value }) => {
  if (total === 0) {
    return <tr><td></td></tr>
  }
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increaseGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const increaseNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const increaseBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        onClick={increaseGood}
        text='good' />
      <Button
        onClick={increaseNeutral}
        text='neutral' />
      <Button
        onClick={increaseBad}
        text='bad' />
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistics text='good' total={total} value={good} />
          <Statistics text='neutral' total={total} value={neutral} />
          <Statistics text='bad' total={total} value={bad} />
          <Statistics text='all' total={total} value={total} />
          <Statistics text='average' total={total} value={(good - bad) / total} />
          <Statistics text='positive' total={total} value={good / total * 100} />
        </tbody>
      </table>
    </div>
  );
}

export default App;
