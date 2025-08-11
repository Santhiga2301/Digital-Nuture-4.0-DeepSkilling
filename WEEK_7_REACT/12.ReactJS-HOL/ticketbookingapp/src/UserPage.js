import React from 'react';

export default function UserPage() {
  return (
    <div>
      <h2>Welcome Back!</h2>
      <p>Here are your available flights:</p>
      <ul>
        <li>Chennai → Delhi | ₹5000 <button>Book</button></li>
        <li>Mumbai → Bengaluru | ₹3500 <button>Book</button></li>
        <li>Kolkata → Goa | ₹4500 <button>Book</button></li>
      </ul>
    </div>
  );
}
