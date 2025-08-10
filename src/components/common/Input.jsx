// Constantes de clases para estilos reutilizables
const inputBase = "flex h-10 w-full rounded-md border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm";

const Input = ({css, ...props}) => {
  return (
    <input
      className={`${css ? css : inputBase}`}
      {...props}
    />
  )
}

export default Input;
