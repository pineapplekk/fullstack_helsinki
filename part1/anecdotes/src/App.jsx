import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [vote, setVote] = useState(Array(anecdotes.length).fill(0));
  const mostVotes = Math.max(...vote);
  const indexOfMostVotes = vote.indexOf(mostVotes);

  const min = 0;
  const max = anecdotes.length - 1;
  const randomGenerator = () => {
    return Math.round(Math.random() * (max - min) + min);
  };

  const handleClick = () => {
    let newRandom = randomGenerator();
    if (newRandom === selected) {
      newRandom = randomGenerator();
    }
    setSelected(newRandom);
  };

  const handleVote = (selected) => {
    setVote((prevVote) => {
      const voteCopy = [...prevVote];
      voteCopy[selected] += 1;
      return voteCopy;
    });
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <button onClick={() => handleVote(selected)}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[indexOfMostVotes]}</p>
      <p>has {mostVotes} votes</p>
    </div>
  );
};

export default App;
