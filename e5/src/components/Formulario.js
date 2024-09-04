import React, { useState } from 'react';
import '../styles/Formulario.css';

function Bienvenida()  {
  const [name, setName] = useState(''); // Estado para almacenar el valor del input
  const [submitted, setSubmitted] = useState(false); // Estado para verificar si el formulario ha sido enviado

  const handleSubmit = (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe automáticamente
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="form-container">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="welcome-form">
          <label htmlFor="name">Ingresa tu nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
          />
          <button type="submit" className="submit-button">Enviar</button>
        </form>
      ) : (
        <h1 className="welcome-message">¡Bienvenido, {name}!</h1>
      )}
    </div>
  );
};

export default Bienvenida;