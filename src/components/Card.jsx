

const Card = ({nombre, apellido, grado}) => {
  return (
    <div>
      <h3>
        El estudiante {nombre} {apellido} ha sido ingresado con éxito al grado {grado}!
      </h3>
    </div>
  );
};

export default Card;
