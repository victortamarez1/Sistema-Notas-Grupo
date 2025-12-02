import React from "react";
import "../styles/Navbar.css";
import { IoMdPersonAdd } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar({ total, maxScore, minScore }) {
  return (
    <div className="card">
      <div className="card-navbar">
        <h3>{total}</h3>
        <p>Estudiantes Registrados</p>
      </div>
      <div className="card-add">
        <Link to="/agregar" className="card-link">
          <h3>
            <IoMdPersonAdd />
          </h3>
          <p>Agregar Nuevo</p>
        </Link>
      </div>
      <div className="card-navbar">
        <h3>{maxScore}</h3>
        <p>Calificación Más Alta</p>
      </div>

      <div className="card-navbar">
        <h3>{minScore}</h3>
        <p>Calificación Más Baja</p>
      </div>
    </div>
  );
}

export default Navbar;
