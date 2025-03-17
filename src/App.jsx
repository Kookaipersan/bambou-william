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
    <Router>  {/* Encapsulez tout le contenu dans Router */}
      <div className="App">
        <Header />  {/* Affichage du Header */}

        <Container>
          <Routes>  {/* Définition des routes */}
            <Route path="/" element={<Accueil />} />  {/* Page d'accueil */}
            <Route path="/Actions" element={<Action />} />  {/* Page des actions */}
            <Route path="/Actualites" element={<Actualites />} />  {/* Page des actualités */}
            <Route path="/Contact" element={<Contact />} />  {/* Page de contact */}
            <Route path="/Don" element={<Don />} />  {/* Page de don */}
            <Route path="/Noussommes" element={<NousSommes />} />  {/* Page "Nous sommes" */}
          </Routes>
        </Container>

        <Footer />  {/* Affichage du Footer */}
      </div>
    </Router>
  );
}

export default App
