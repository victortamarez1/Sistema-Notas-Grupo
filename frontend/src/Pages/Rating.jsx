import { useEffect, useState } from "react";
import { getRating, deleteRating } from "../service/ratingService";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import "../styles/Rating.css";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import Footer from "../component/Footer";

function Rating() {
  const [ratings, setRating] = useState([]);

  useEffect(() => {
    let cancelado = false;

    async function cargar() {
      try {
        const data = await getRating();
        if (!cancelado) {
          setRating(data);
        }
      } catch (err) {
        console.error("Error conectando", err);
      }
    }

    cargar();

    return () => {
      cancelado = true;
    };
  }, []);

  const total = ratings.length;
  const maxScore = total > 0 ? Math.max(...ratings.map((r) => r.score)) : 0;
  const minScore = total > 0 ? Math.min(...ratings.map((r) => r.score)) : 0;

  const mejorEstudiante =
    total > 0
      ? ratings.reduce((best, r) => (r.score > best.score ? r : best))
      : { name: "N/A" };

  const eliminar = async (id) => {
    if (window.confirm("¿Seguro que quieres eliminar este registro?")) {
      try {
        await deleteRating(id);
        setRating(ratings.filter((item) => item.id !== id));
      } catch (err) {
        console.error("Error en la conexión delete:", err);
      }
    }
  };

  return (
    <div>
      <Header />

      <Navbar
        total={total}
        maxScore={maxScore}
        minScore={minScore}
        mejor={mejorEstudiante.name}
      />

      <div className="container">
        <h2 className="title">Notas Disponibles</h2>

        <div className="card-list">
          {ratings.length === 0 ? (
            <p className="empty">No hay datos.</p>
          ) : (
            ratings.map((r) => (
              <div key={r.id} className="card-rating">
                <h2 className="name">{r.name}</h2>

                <p className="score">
                  <strong>Score:</strong> {r.score}
                </p>

                <p>Promedio: {r.score} %</p>

                <div className="pie">
                  <p>
                    <Link className="edit-link" to={`/editar/${r.id}`}>
                      <CiEdit /> Editar
                    </Link>
                  </p>

                  <button className="eliminar" onClick={() => eliminar(r.id)}>
                    <MdDelete />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Rating;
