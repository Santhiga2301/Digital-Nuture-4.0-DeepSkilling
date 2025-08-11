import React from "react";

const ListofPlayers = () => {
  // using const since players array won't be reassigned
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 92 },
    { name: "Shikhar Dhawan", score: 68 },
    { name: "KL Rahul", score: 55 },
    { name: "Rishabh Pant", score: 77 },
    { name: "Hardik Pandya", score: 88 },
    { name: "Ravindra Jadeja", score: 64 },
    { name: "Jasprit Bumrah", score: 40 },
    { name: "Bhuvneshwar Kumar", score: 73 },
    { name: "Yuzvendra Chahal", score: 50 },
    { name: "Shreyas Iyer", score: 95 }
  ];

  // arrow function + filter to get players with score < 70
  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((p, idx) => (
          <li key={idx}>{p.name} — {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {below70.map((p, idx) => (
          <li key={idx}>{p.name} — {p.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
