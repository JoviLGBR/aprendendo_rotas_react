import { useParams } from "react-router-dom";

function Produto() {

  const {id}= useParams();
  return (
    <div>
        <h2>Detalhe do Produto:</h2>
        Meu produto é {id}
    </div>
  );
}

export default Produto;
