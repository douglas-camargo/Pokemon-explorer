// Constantes de clases para estilos reutilizables
const cardContentBase = "p-6 pt-0";

const CardContent = ({css, ...props}) => {
  return (
    <div className={`${css} ${cardContentBase}`} {...props} />
  )
}

export default CardContent