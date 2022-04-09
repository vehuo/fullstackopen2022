import { useState } from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button
      onClick={onClick}>
      {text}
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'The best way to get a project done faster is to start sooner',
    'Even the best planning is not so omniscient as to get it right the first time.',
    'How does a project get to be a year late?... One day at a time.',
    "Every good work of software starts by scratching a developer's personal itch",
    'Program testing can be used to show the presence of bugs, but never to show their absence!',
    'Before software can be reusable it first has to be usable.',
    'Real programmers can write assembly code in any language.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(7).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const handleSelected = () => {
    const min = 0
    const max = anecdotes.length
    setSelected(Math.floor(Math.random() * (max - min) + min))
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
    if (points[selected] >= points[mostVotes]) {
      setMostVotes(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} points</p>
      <Button onClick={handleSelected} text='random anecdote' />
      <Button onClick={handleVote} text='vote' />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p>has {points[mostVotes]} points</p>
    </div>
  );
}

export default App;
