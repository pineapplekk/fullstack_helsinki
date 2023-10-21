import { useState } from "react";

import "./App.css";

function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

const Statistics = ({ good, bad, neutral }) => {
  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const positive = (good / all) * 100 + "%";

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={avg} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (type) => {
    if (type === "good") setGood(good + 1);
    if (type === "neutral") setNeutral(neutral + 1);
    if (type === "bad") setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button
        text="good"
        onClick={() => {
          handleClick("good");
        }}
      />
      <Button
        text="neutral"
        onClick={() => {
          handleClick("neutral");
        }}
      />
      <Button
        text="bad"
        onClick={() => {
          handleClick("bad");
        }}
      />
      <h1>statistics</h1>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <p>No feedback given</p>
      ) : (
        <Statistics good={good} bad={bad} neutral={neutral} />
      )}
    </div>
  );
}

export default App;
