import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from './components/Login/Login';
import Perfil from './components/Perfil/Perfil';
import PageFilmes from './components/pageFilmes/pageFilmes';

export default () =>{

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/perfil' element={<Perfil />} />
        <Route path='/feature' element={<PageFilmes />} />
      </Routes>
    </Router>     
  ) 
}