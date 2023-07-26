import React, { useState, useEffect } from 'react';
import detailStyle from './GameDetails.module.css';
import { useFetch } from '../../hooks/useFetch';
import { useNavigate, useParams } from 'react-router-dom';



const GameDetails = () => {


    const handleGoBack=()=>{
 
        navigate(-1);
 
 
    }
    const handleZoom=(e)=>{

        const mediaQuery= window.matchMedia("(max-width: 700px)");
        if(mediaQuery.matches) return

 

        const containerZoom= document.querySelector(`.${detailStyle.GameDetails__zoom}`);
        console.log(containerZoom)
        containerZoom.innerHTML=`<img src=${e.target.src}></img>`

        



    }    
   
    
    const navigate =useNavigate();

   const {id}= useParams()

    const {data, error, loading}= useFetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`)


    
    if(!data) return

            
   
        
   



    


  return (
    <div className={detailStyle.GameDetails}>
        <div className={detailStyle.GameDetails__btn}>
            <button onClick={handleGoBack}><i className="fa-solid fa-arrow-left fa-2xl" style={{color:'#8a2be2'}}></i></button>
        </div>
        <div className={detailStyle.GameDetails__image}>
            <img src={data.thumbnail} alt={data.id} className={detailStyle.image__img} />
        </div>
            <h2 className={detailStyle.GameDetails__title}>{data.title}</h2>
        <div className={detailStyle.GameDetails__desc}>
            <p>{data.short_description}</p>
            <ul>
                <li className={detailStyle.GameDetails__li}>Gender: <span>{data.genre}</span></li>
                <li className={detailStyle.GameDetails__li}>Platform: <span>{data.platform}</span></li>
                <li className={detailStyle.GameDetails__li}>Developer: <span>{data.developer}</span></li>
                <li className={detailStyle.GameDetails__li}>Release Date: <span>{data.release_date}</span></li>
                <li className={detailStyle.GameDetails__li}>Website: <a href={data.game_url} target="_blank"><span>{data.game_url}</span></a></li>
               
            </ul>
        <div className={detailStyle.GameDetails__screenshots}>
            {
                data.screenshots.map((el,index)=>(
                    <img onClick={handleZoom} src={el.image} key={index}></img>
                ))
            }
        </div>
        </div>
        <div className={detailStyle.GameDetails__zoom} id='zoom'></div>


    </div>
  )
}

export default GameDetails