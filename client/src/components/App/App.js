/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

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
// import BackMobilier from '../BackOffice/BackMobilier/BackMobilier';
import BackAdministration from '../BackOffice/BackAdministration/BackAdministration';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = () => {

  // Dispatch allow us to trigger action from 'redux action' folder
  const dispatch = useDispatch();
  const location = useLocation();
  // console.log(location)

  // Effect active on page load
  useEffect(() => {
    dispatch(actionAxiosProjects());
  }, []);

  const isLogged = useSelector((state) => state.UserReducer.isLogged);
  console.log('loggé ? ', isLogged);
  const role = useSelector((state) => state.UserReducer.role);
  console.log('role ? ', role);

  return (
    <div className="App">
      {location.pathname !== "/403" && location.pathname !== "/404" && <Header />}
      <Routes>
        <Route exact path="/" element={<Projets />} />
        <Route exact path="/projet/:slug" element={<DetailProjet />} />
        {/* <Route path="/moblier" element={<Mobilier />} /> */}
        <Route exact path="/apropos" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/back-projets" element={role === 'admin' ? <BackProjets /> : <Error403 />} />
        {/* <Route path="/back-mobilier" element={role === 'admin' ? <BackMobilier /> : <Error403 />} /> */}
        <Route exact path="/back-admin" element={role === 'admin' ? <BackAdministration /> : <Error403 />} />
        <Route exact path="/login" element={isLogged ? <Projets /> : <Login />} />
        <Route exact path="/register" element={isLogged ? <Projets /> : <Register />} />
        <Route exact path="/403" element={<Error403 />} />
        <Route exact path="/404" element={<Error404 />} />
      </Routes>
      {location.pathname !== "/403" && location.pathname !== "/404" && <Footer />}
    </div>
  );
}

export default App;
