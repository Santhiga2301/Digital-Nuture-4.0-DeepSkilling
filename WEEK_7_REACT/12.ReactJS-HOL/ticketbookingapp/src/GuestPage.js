import React from 'react';

export default function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>Here are our available flights:</p>
      <ul>
        <li>Chennai → Delhi | ₹5000</li>
        <li>Mumbai → Bengaluru | ₹3500</li>
        <li>Kolkata → Goa | ₹4500</li>
      </ul>
      <p><strong>Login to book your tickets!</strong></p>
    </div>
  );
}
