import React from 'react';
import headerSyle from './Header.module.css';

import navStyle from '../NavBar/NavBar.module.css';

const Header = () => {

  const handleMenu=()=>{

    const btn= document.querySelector(`.${headerSyle.header__btn}`);
    const menu= document.querySelector(`.${navStyle.navBar}`)


    if(menu.style.transform === 'translate(0%)'){

      menu.style.transform='translate(-100%)'
    }else{

      menu.style.transform='translate(0%)'

    }
    
  }
  

  return (
    <div className={headerSyle.header}>
      <div className={headerSyle.header__title}>
        <h2 className={headerSyle.title__h2}>Welcome to <span>MPGames</span></h2>
        <p className={headerSyle.header__p1}>You will find a collection of multiplayer games to play</p>
        <p className={headerSyle.header__p2}>All the game data is retrieved from the FreeToGame API.</p>
      </div>
        <div className={headerSyle.header__btn}>
          <button onClick={handleMenu} className={headerSyle.header__btn}><i className="fa-solid fa-bars fa-2xl" style={{color:'#8a2be2'}}></i></button>
        </div>
        
   
        
    </div>
  )
}

export default Header