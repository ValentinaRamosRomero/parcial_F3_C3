import { useState } from "react";
import Card from "./Card";
import "../form.css";

const Form = () => {
  const [estudiante, setEstudiante] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    grado: "",
  });
  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      estudiante.nombre.trimStart().length > 2 &&
      estudiante.apellido.length >= 6 &&
      estudiante.edad < 18
    ) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div>
      {mostrar ? (
        <Card
          nombre={estudiante.nombre}
          apellido={estudiante.apellido}
          grado={estudiante.grado}
        />
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <label className="form-label">Nombre Estudiante:</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) =>
              setEstudiante({ ...estudiante, nombre: event.target.value })
            }
          />
          <label className="form-label">Apellido Estudiante:</label>
          <input
            className="form-input"
            type="text"
            onChange={(event) =>
              setEstudiante({ ...estudiante, apellido: event.target.value })
            }
          />
          <label className="form-label">Edad:</label>
          <input
            className="form-input"
            type="number"
            onChange={(event) =>
              setEstudiante({ ...estudiante, edad: event.target.value })
            }
          />
          <select
            id="grado"
            name="grado"
            className="form-select"
            value={estudiante.grado}
            onChange={(event) =>
              setEstudiante({ ...estudiante, grado: event.target.value })
            }
          >
            <option value="">Seleccione el grado al que ingresa</option>
            <option value="sexto">Sexto</option>
            <option value="septimo">Septimo</option>
            <option value="octavo">Octavo</option>
            <option value="noveno">Noveno</option>
            <option value="decimo">Decimo</option>
            <option value="once">Once</option>
          </select>

          <button>Registrar Estudiante</button>
          {error ? (
            <h4 style={{ color: "red" }}>
              Por favor chequea que la información sea correcta
            </h4>
          ) : null}
        </form>
      )}
    </div>
  );
};

export default Form;
