import { useState } from 'react'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap'; // Importation de Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';  // Importation du Header
import Footer from './components/Footer';  // Importation du Footer
import Accueil from './components/Accueil';  // Importation du composant Accueil
import Action from './components/Action';  // Importation du composant Action
import Actualites from './components/Actualites';  // Importation des Actualités
import Contact from './components/Contact';  // Importation du composant Contact
import Don from './components/Don';  // Importation du composant Don
import NousSommes from './components/Noussommes';  // Importation du composant NousSommes

const App = () => {
  return (
    <div className="App">
      <Header />  {/* Utilisation du Header */}
      <Accueil />  {/* Utilisation du composant Accueil */}
      <Action />  {/* Utilisation du composant Action */}
      <Actualites />  {/* Utilisation des Actualités */}
      <Contact />  {/* Utilisation du composant Contact */}
      <Don />  {/* Utilisation du composant Don */}
      <NousSommes />  {/* Utilisation du composant NousSommes */}
      <Footer />  {/* Utilisation du Footer */}
    </div>
  );
}

export default App
