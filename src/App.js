import './App.css';

function App() {
  const a = 20
  const b = 10
  const msm = 'Total: '
  return (
    <div className="App">
      <h1> Titulo de la app</h1>
      <strong>Estamos trabajando en ello</strong>
      <br></br>
      <h2>{msm}{a+b}</h2>

    </div>
  );
}

export default App;
