import React, { useState } from 'react';
import '../styles/Contador.css'; 

const Contador = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1>Contador: {count}</h1>
      <div className="button-container">
        <button onClick={() => setCount(count - 1)} className="button">-</button>
        <button onClick={() => setCount(count + 1)} className="button">+</button>
      </div>
    </div>
  );
}

export default Contador;