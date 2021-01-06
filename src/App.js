import "./App.css";
import ParametrosEntrada from "./Componentes/ParametrosEntrada";
import PruebaApiReq from "./Componentes/ComponentePruebaReq";

function App() {
  return (
    <div className="App">
      <div className="headerDiv">
        <h1>Generador de Etiquetas de Clasificación Energética</h1>
      </div>
      <h2 className="parametrosEntrada">Parametros de Entrada</h2>
      <ParametrosEntrada />
      <PruebaApiReq />
    </div>
  );
}

export default App;
