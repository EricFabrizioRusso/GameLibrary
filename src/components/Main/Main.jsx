import React, { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import BoxGames from './BoxGames/BoxGames';
import {useParams } from 'react-router-dom';
import mainStyle from './Main.module.css';
import Header from '../Header/Header';
import navStyle from '../NavBar/NavBar.module.css';
import Loader from '../Loader/Loader';


const Main = () => {

  const {category}= useParams();
  let Apidata=[]
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage=30;
  let loader= false;

  if(category === undefined){
    

    const {data, error, loading}=useFetch('https://free-to-play-games-database.p.rapidapi.com/api/games');
    Apidata= data
    loader= loading
  }else{


    const {data, error, loading}=useFetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`);
    Apidata= data
    loader=loading

  }

  if(!Apidata) return;


  
  const indexOfLastItem= currentPage * itemsPerPage;
  const indexOfFirstItem= indexOfLastItem  - itemsPerPage;
  const currentItems= Apidata.slice(indexOfFirstItem, indexOfLastItem);

  /*Data to use:
  id, developer,game_url, genre,platform,title,release_date, thumbnail*/

  const menu= document.querySelector(`.${navStyle.navBar}`)
  const menuLink= document.querySelector(`.${navStyle.link__li}`)

  const handleMenu=()=>{



    if(menu.style.transform === 'translate(0%)'){

      menu.style.transform='translate(-100%)'
    }


  }

  document.addEventListener("click",(e)=>{


    if(e.target.className === `${navStyle.link__li}`){



      menu.style.transform='translate(-100%)'

    }

  })


  return (
    <div className={mainStyle.main}>
        <Header/>
        {loader && <Loader/>}
        {currentItems.map((game,index)=>(

          <div key={Math.random()} onClick={handleMenu} className={mainStyle.main__boxGames}>
            <BoxGames
              key={index} 
              id={game.id}
              thumbnail={game.thumbnail}
            />
          </div>


        ))
        }
        <div className={mainStyle.main__btn}>
          <div className={mainStyle.btn__left}>
            <button onClick={()=> setCurrentPage(currentPage - 1)} disabled={currentPage === 1}><i className="fa-solid fa-arrow-left fa-2xl" style={{color:'#8a2be2'}}></i></button>
          </div>
          <div className={mainStyle.btn__right}>
            <button onClick={()=> setCurrentPage(currentPage + 1)} disabled={currentItems.length < itemsPerPage}><i className="fa-solid fa-arrow-right fa-2xl" style={{color:'#8a2be2'}}></i></button>
          </div>
        </div>
    </div>
  )
}

export default Main