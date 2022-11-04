import React from 'react'

const Button = ({bgColor,color,size,text,borderRadius,float}) => {
  return (
    <button type='button'
    style={{backgroundColor:bgColor,color,borderRadius,float}}
    className={'text-${size} p-3 hover:drop-shadow-xl text-xs'}>
        {text}
    </button>
  )
}

export default Button