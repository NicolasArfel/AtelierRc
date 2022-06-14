import React from 'react'
import { Routes, Route } from 'react-router-dom';

import About from '../About/About';
import Contact from '../Contact/Contact';
import Projets from '../Projets/Projets';
import DetailProjet from '../Projets/DetailProjet/DetailProjet';

import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Error404 from '../Error404/Error404';
import Error403 from '../Error403/Error403';

import BackProjets from '../BackOffice/BackProjets/BackProjets';
import BackMobilier from '../BackOffice/BackMobilier/BackMobilier';
import BackAdministration from '../BackOffice/BackAdministration/BackAdministration';

const App = () => {
  return (
    <div className="App">
   
      <Routes>
        <Route path="/" element={<Projets />} />
        <Route path="/projet/:slug" element={<DetailProjet />} />
        {/* <Route path="/moblier" element={<Mobilier />} /> */}
        <Route path="/apropos" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/back-projets" element={<BackProjets />} />
        <Route path="/back-mobilier" element={<BackMobilier />} />
        <Route path="/back-admin" element={<BackAdministration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

        <Route path="/403" element={<Error403 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
