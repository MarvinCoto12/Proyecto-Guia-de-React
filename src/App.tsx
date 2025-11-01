import './App.css';
import { Saludo, ListaNombres, Formulario, EntradaInfo, Calculadora } from "./componentes";

function App() {
  return (
    <div>
      <Saludo name="Marvin" />
      <br />
      <h2>Lista de nombres</h2>
      <ListaNombres nombres={["Juan", "Luis", "Carlos", "Marvin", "Gaby", "Fercho"]} />
      <br />
      <h2>Formulario básico</h2>
      <Formulario />
      <br />
      <h2>Entrada en tiempo real</h2>
      <EntradaInfo />
      <br />
      <h2>Calculadora Sencilla</h2>
      <Calculadora />
    </div>
  );
}

export default App;