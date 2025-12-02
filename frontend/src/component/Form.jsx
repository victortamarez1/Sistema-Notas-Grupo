import React, { useState, useEffect } from "react";
import { postRating, putRating } from "../service/ratingService";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../styles/Form.css";

function Form() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState({
    id: "",
    name: "",
    score: "",
  });

  //  Cargar datos al editar
  useEffect(() => {
    if (id) {
      axios
        .get(`http://127.0.0.1:8000/api/ratings/${id}/`)
        .then((res) => {
          setRating({
            id: res.data.id,
            name: res.data.name,
            score: res.data.score,
          });
        })
        .catch((err) => console.error("Error al cargar el rating:", err));
    }
  }, [id]);

  const salir = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!id) {
      try {
        const response = await postRating(rating);
        console.log("Rating guardado:", response);

        setRating({
          name: "",
          score: "",
        });

        navigate("/");
      } catch (err) {
        console.error("Error en el POST:", err);
      }
    } else {
      try {
        const response = await putRating(id, rating);
        console.log("Rating actualizado:", response);

        navigate("/");
      } catch (err) {
        console.error("Error en el PUT:", err);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRating((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>{id ? "Editar Estudiante" : "Agregar Nuevo Estudiante"}</h2>

        <input
          type="text"
          name="name"
          value={rating.name}
          onChange={handleChange}
          placeholder="Escribe el nombre"
          required
        />

        <br />
       
          <input
            type="number"
            name="score"
            value={rating.score}
            onChange={handleChange}
            placeholder="Escribe la nota"
            required
          />
       

        <div className="pie">
          <p className="volver" onClick={salir}>
            Volver
          </p>

          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
