/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { actionAxiosProjects } from '../../Redux/Actions/ProjetsActions';

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

  // Dispatch allow us to trigger action from 'redux action' folder
  const dispatch = useDispatch();

  // Effect active on page load
  useEffect(() => {
    dispatch(actionAxiosProjects());
  }, []);

  const isLogged = useSelector((state) => state.UserReducer.isLogged);
  console.log('loggé ? ', isLogged);

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
        <Route path="/login" element={isLogged ? <Projets /> : <Login />} />
        <Route path="/register" element={isLogged ? <Projets /> : <Register />} />
        <Route path="/403" element={<Error403 />} />
        <Route path="*" element={<Error404 />} />
      </Routes>

    </div>
  );
}

export default App;
