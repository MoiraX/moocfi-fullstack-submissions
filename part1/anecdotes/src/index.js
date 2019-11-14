import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Anecdote = ({ anecdote, vote }) => (
  <div>
    <div>
      {anecdote}
    </div>
    <div>
      has {vote} votes
    </div>
  </div>
)

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)

  const emptyVotes = new Array(anecdotes.length).fill(0)
  const [votes, setVotes] = useState(emptyVotes)

  // function from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }

  const handleSelectClick = () => {
    setSelected(getRandomInt(0, anecdotes.length))
  }

  const handleVoteClick = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const getHighVoteIdx = () => votes.indexOf(Math.max(...votes))

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote anecdote={anecdotes[selected]} vote={votes[selected]} />
      <Button onClick={handleVoteClick} text=' vote ' />
      <Button onClick={handleSelectClick} text='next anecdote' />
      <h2>Anecdote with most votes</h2>
      <Anecdote anecdote={anecdotes[getHighVoteIdx()]} vote={votes[getHighVoteIdx()]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
