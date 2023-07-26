import React from 'react'
import loaderStyle from './Loader.module.css'

const Loader = () => {
  return (
    <div className={loaderStyle.loader}>
      <div className={loaderStyle.loader__Container}><span></span></div>
      <div className={loaderStyle.loader__Container}><span></span></div>
      <div className={loaderStyle.loader__Container}><i></i></div>
      <div className={loaderStyle.loader__Container}><i></i></div>
    </div>
  )
}

export default Loader