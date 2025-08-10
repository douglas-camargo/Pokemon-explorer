// Constantes de clases para estilos reutilizables
const cardHeaderBase = "flex flex-col space-y-1.5 p-6";

const CardHeader = ({css, ...props}) => {
  return (
    <div
      className={`${css} ${cardHeaderBase}`}
      {...props}
    />
  )
}

export default CardHeader;
