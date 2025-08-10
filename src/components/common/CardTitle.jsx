import React from 'react'

// Constantes de clases para estilos reutilizables
const cardTitleBase = "text-2xl font-semibold leading-none tracking-tight";

const CardTitle = ({css, ...props}) => {
  return (
    <h3
      className={`${css} ${cardTitleBase}`}
      {...props}
    />
  )
}

export default CardTitle