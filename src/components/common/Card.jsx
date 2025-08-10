// Constantes de clases para estilos reutilizables
const cardBase = "rounded-lg border bg-card text-card-foreground shadow-sm";

const Card = ({css, ...props }) => {
  return (
    <div
      className={`${css} ${cardBase}`}
      {...props}
    />
  )
}

export default Card