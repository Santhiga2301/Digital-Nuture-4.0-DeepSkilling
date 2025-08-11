import React from "react";

const IndianPlayers = () => {
  const teamPlayers = ["Virat", "Rohit", "Shikhar", "KL", "Pant", "Hardik", "Jadeja", "Bumrah"];

  // Using destructuring assignment to hold filtered arrays (example of destructuring)
  const oddPlayers  = teamPlayers.filter((_, index) => index % 2 !== 0);
  const evenPlayers = teamPlayers.filter((_, index) => index % 2 === 0);

  // Two arrays to merge
  const T20players = ["Bumrah", "Chahal"];
  const RanjiPlayers = ["Pujara", "Rahane"];

  // Merge arrays using spread operator (ES6)
  const mergedPlayers = [...T20players, ...RanjiPlayers];

  // Example: array destructuring to get first & rest
  const [firstPlayer, secondPlayer, ...restPlayers] = teamPlayers;

  return (
    <div>
      <h2>Odd Team Players (by index)</h2>
      <ul>
        {oddPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players (by index)</h2>
      <ul>
        {evenPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged Team (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h3>Destructuring demo</h3>
      <p>First: {firstPlayer}</p>
      <p>Second: {secondPlayer}</p>
      <p>Rest: {restPlayers.join(", ")}</p>
    </div>
  );
};

export default IndianPlayers;
