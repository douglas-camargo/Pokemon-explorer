const Card = ({css, ...props }) => {
  return (
    <div
      className={`${css} rounded-lg border bg-card text-card-foreground shadow-sm`}
      {...props}
    />
  )
}

export default Card