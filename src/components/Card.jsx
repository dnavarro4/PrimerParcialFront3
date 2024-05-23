import React from 'react'

const Card = ({ name, model }) => {
  return (
    <div style={{border:"solid black 1px", marginTop:"8px", fontWeight:"bold", padding:"8px", borderRadius:"8px"}}>
      <h3>Hola!</h3>
      <h4>El modelo de vehiculo ingresado es {model} del fabricante {name}</h4>
    </div>
  )
}

export default Card