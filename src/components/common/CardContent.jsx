const CardContent = ({css, ...props}) => {
  return (
    <div className={`${css} p-6 pt-0`} {...props} />
  )
}

export default CardContent