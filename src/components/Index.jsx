import React from 'react'
import NavBar from './NavBar/navBar'
import Main from './Main/Main'
import indexStyle from './Index.module.css';
import Header from './Header/Header';
import {BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Error from './Error/Error';
import GameDetails from './GameDetails/GameDetails';


const Index = () => {
  return (
    <div className={indexStyle.index}>
        {/* <Header/> */}
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/about' element={<h1>About</h1>}/>
          <Route path='/categories/:category' element={<Main/>}/>
          <Route path='/game/:id' element={<GameDetails/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Index