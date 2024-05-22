import React from 'react'

const Card = ({nombre, apellido, salario}) => {
  return (
    <div>
        Hola, soy una tarjeta
        <h4>nombre: {nombre}</h4>
        <h4>apellido: {apellido}</h4>
        <h4>salario: ${salario}</h4>
    </div>
  )
}

export default Card