import React from 'react'
import erroStyle from './Error.module.css'
const Error = () => {
  return (
    <div className={erroStyle.error}>
        <h1 className={erroStyle.error__title}>Page not found</h1>
        <img src="/404.png" alt="" />
    </div>
  )
}

export default Error