import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(6).fill(0));

const Button = ({ text, handleClick }) => (
  <button onClick={ handleClick }>
    { text }
  </button>
)

const Anecdote = ({ anecdote, votes }) => (
  <div>
    <h4>{ anecdote }</h4>
    <p>has { votes } votes</p>
  </div>
)

  const [votes, setVotes] = useState(
    Array
    .apply(null, new Array(anecdotes.length))
    .map(Number.prototype.valueOf, 0)
  );

  const getNextAnecdote = () => {
    const random = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(random);
  }

  const vote = () => {
    const c = [...votes];
    c[selected] += 1;

    const Maxindex = c.indexOf(Math.max(...c));

    setVotes(c);
    setPoints(Maxindex);
  }

  return (
    <div>
      <h1>Anecdote of the day :</h1>
     <p1> <Anecdote anecdote={ anecdotes[selected] } votes={ votes[selected] } /></p1>
      <Button text="Vote" handleClick={ vote } />
      <Button text="Next Anecdote" handleClick={ getNextAnecdote } />
      <h1>Anecdote with most Number of Votes :</h1>
      <Anecdote anecdote={ anecdotes[points] } votes={ votes[points] } />
    </div>
  )
}

export default App;