import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cabecalho from './App';
import Nav from './Nav';
import Main from './Main';
import Section from './Section';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Nav />
    <Main />
    <Section />
    <Footer />
  </React.StrictMode>
  
  
);

reportWebVitals();
