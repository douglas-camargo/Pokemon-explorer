const CardHeader = ({css, ...props}) => {
  return (
    <div
      className={`${css} flex flex-col space-y-1.5 p-6`}
      {...props}
    />
  )
}

export default CardHeader;
