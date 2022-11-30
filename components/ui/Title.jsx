import React from 'react'

const Title = ({children, addClass} ) => {
  return ( //props addClass ve children
    <div className={`${addClass} font-dancing font-bold`} >{children}</div>
  )
}

export default Title