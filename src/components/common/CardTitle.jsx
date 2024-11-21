import React from 'react'

const CardTitle = ({css, ...props}) => {
  return (
    <h3
      className={`${css} text-2xl font-semibold leading-none tracking-tight`}
      {...props}
    />
  )
}

export default CardTitle