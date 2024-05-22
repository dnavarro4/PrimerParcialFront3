import './App.css'
import Card from './components/Card'
import Form from './components/Form'

function App() {
  const sueldo = 500000
  return (
    <>
      <Form/>
      <Card nombre="daniel" apellido="navarro" salario={sueldo*2}/>
      <Card nombre="theo" apellido="avila" salario={sueldo}/>

    </>
  )
}

export default App
