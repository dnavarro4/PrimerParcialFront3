import { useState } from 'react';
import './App.css'
import Card from './components/Card'
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [name, setName] = useState("");
  const [model, setModel] = useState("");

  const handleNameChange = (event) => {
    setShow(false);
    setShowError(false);
    setName(event.target.value);
  };
  const handleModelChange = (event) => {
    setShow(false);
    setShowError(false);
    setModel(event.target.value);
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (name.length < 3 || name.charAt(0) === " " || model.length < 6) {
      setShow(false);
      setShowError(true);
      return;
    }
    setShow(true);
    setShowError(false);
  };
  
  return (
    <div className="App" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h1>Elige marca y modelo de vehiculo preferido</h1>
      <form onSubmit={handleFormSubmit} style={{width:"25%"}}>
        <div style={{width:"100%"}}>
          <input
            type="text"
            placeholder="Fabricante del vehiculo"
            value={name}
            onChange={handleNameChange}
            style={{width:"100%", boxSizing:"border-box"}}
          />
        </div>
        <div style={{width:"100%"}}>
          <input
            type="text"
            placeholder="Modelo de vehiculo"
            value={model}
            onChange={handleModelChange}
            style={{width:"100%", boxSizing:"border-box"}}
          />
        </div>
        <button type="submit" style={{margin:"8px 0px 8px 0px", backgroundColor:"#d2e0e8", width:"100%"}}>Enviar</button>
      </form>
      {show && <Card name={name} model={model} />}
      {showError && <ErrorMessage/>}
    </div>
  )
}

export default App
