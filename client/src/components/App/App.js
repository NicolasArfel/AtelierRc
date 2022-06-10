import React from 'react'
import { Routes, Route } from 'react-router-dom';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Projets from '../Projets/Projets';
import DetailProjet from '../Projets/DetailProjet/DetailProjet';

import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Projets />} />
        <Route path="/projet/:slug" element={<DetailProjet />} />
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
