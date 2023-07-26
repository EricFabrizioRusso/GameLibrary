import React from 'react'
import navStyle from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={navStyle.navBar}>
        <ul>
        <Link className={navStyle.navBar__link} to='/categories/2D'>
          <li className={navStyle.link__li}><i className="fa-solid fa-dice-two"></i>2D</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='/categories/3D'>
          <li className={navStyle.link__li}><i className="fa-solid fa-dice-d6"></i>3D</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/card'>
          <li className={navStyle.link__li}><i className="fa-solid fa-diamond"></i>Cards</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/fighting'>
          <li className={navStyle.link__li}><i className="fa-solid fa-hand-fist"></i>Fighting</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/horror'>
          <li className={navStyle.link__li}><i className="fa-solid fa-ghost"></i>Horror</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/low-spec'>
          <li className={navStyle.link__li}><i className="fa-solid fa-laptop"></i>Low spec</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/mmorpg'>
          <li className={navStyle.link__li}><i className="fa-solid fa-wand-magic-sparkles"></i>MMORPG</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/moba&sort-by=popularity'>
          <li className={navStyle.link__li}><i className="fa-solid fa-flag"></i>MOBAs</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/shooter'>
          <li className={navStyle.link__li}><i className="fa-solid fa-gun"></i>Shooter</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/sports'>
          <li className={navStyle.link__li}><i className="fa-solid fa-volleyball"></i>Sports</li>
        </Link>
        <Link className={navStyle.navBar__link}  to='categories/turn-based'>
          <li className={navStyle.link__li}><i className="fa-solid fa-rotate"></i>TurnBased</li>
        </Link>
        </ul>
    </div>
  )
}

export default NavBar