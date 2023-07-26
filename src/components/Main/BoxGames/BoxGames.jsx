import React from 'react';
import boxStyle from './BoxGames.module.css';
import { Link } from 'react-router-dom';

const BoxGames = ({id,thumbnail}) => {


  return (
    <div className={boxStyle.boxGames}>
      <Link to={`/game/${id}`}>
        <img className={boxStyle.boxGames__img} src={thumbnail} alt={id} loading="lazy" />
      </Link>
    </div>
  )
}

export default BoxGames