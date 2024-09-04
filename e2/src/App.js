import React from 'react';
import './App.css';

// Componente de Tarjeta de Presentación
const BusinessCard = ({ nombre, apellido, profesion, imagen }) => {
  return (
    <div className="card">
      <img src={imagen} alt={`${nombre} ${apellido}`} className="imagen" />
      <div className="info">
        <h2 className="name">{`${nombre} ${apellido}`}</h2>
        <p className="profesion">{profesion}</p>
      </div>
    </div>
  );
};

// Ejemplo de uso del componente
const App = () => {
  return (
    <div>
      <BusinessCard
        nombre="Sean"
        apellido="Luca"
        profesion="Tecnico informatico"
        imagen= "http://localhost:3000/picui.png"
      />
    </div>
  );
};

export default App;