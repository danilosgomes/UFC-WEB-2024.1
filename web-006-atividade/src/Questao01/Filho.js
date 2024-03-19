const Filho = ({ altura, peso }) => {
  let imc;

  function IMC(a, p) {
    return (imc = p / (a * a));
  }

  function resultado(i) {
    if (i < 18)
      return (
        <div>
          <h3>Abaixo do peso</h3>
        </div>
      );
    else if (i > 25)
      return (
        <div>
          <h3>Acima do peso</h3>
        </div>
      );
    else
      return (
        <div>
          <h3>Peso ideal</h3>
        </div>
      );
  }

  return (
    <div>
      <h3>Print IMC: {IMC(altura, peso).toFixed(2)}</h3>
      <h3>Print resultado: {resultado(imc)}</h3>
    </div>
  );
};

export default Filho;
