/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';

/* import actions */
import { useDispatch, useSelector } from 'react-redux';
import { actionAxiosProjects } from '../../Redux/Actions/ProjetsActions';
import { actionDispatchStatus } from '../../Redux/Actions/BackProjectsActions';
import { actionAxiosFurnitures } from '../../Redux/Actions/FurnituresActions';

/* css import */
import './App.css';

/* reusables components */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

/* components */
import About from '../About/About';
import Contact from '../Contact/Contact';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Credit from '../Credit/Credit';

import Projets from '../Projets/Projets';
import DetailProjet from '../Projets/DetailProjet/DetailProjet';
import Furnitures from '../Furnitures/Furnitures';
import FurnitureDetail from '../Furnitures/FurnitureDetail/FurnitureDetail';
import FurnituresContact from '../Furnitures/FurnituresContact/FurnituresContact';

import Error404 from '../Error404/Error404';
import Error403 from '../Error403/Error403';

import BackProjets from '../BackOffice/BackProjets/BackProjets';
import BackAdministration from '../BackOffice/BackAdministration/BackAdministration';
import BackAddProjet from '../BackOffice/BackProjets/BackAddProjet/BackAddProjet';
import BackUpdateProjet from '../BackOffice/BackProjets/BackUpdateProjet/BackUpdateProjet';
import BackMobilier from '../BackOffice/BackMobilier/BackMobilier';
import BackAddFurnitures from '../BackOffice/BackMobilier/BackAddFurnitures/BackAddFurnitures';
import BackUpdateFurniture from '../BackOffice/BackMobilier/BackUpdateFurniture/BackUpdateFurniture';

import Loader from '../Loader/Loader';


const App = () => {

  // Dispatch allow us to trigger action from 'redux action' folder
  const dispatch = useDispatch();

  // console.log(location)
  const [loading, setLoading] = useState(true);
  // Effect active on page load
  useEffect(() => {  
      setTimeout(() => {
      setLoading(false);
      /* eslint-disable no-undef */
        jQuery(() => {
          jQuery('.sidenav').sidenav();
          jQuery('.carousel').carousel();          
        })      
    }, 3000);    
    dispatch(actionAxiosFurnitures())
    dispatch(actionAxiosProjects());
    dispatch(actionDispatchStatus());
  }, [dispatch]);

  const isLogged = useSelector((state) => state.UserReducer.isLogged);
  // console.log('loggé ? ', isLogged);
  const role = useSelector((state) => state.UserReducer.role);
  // console.log('role ? ', role);
  // const token = useSelector((state) => state.UserReducer.token);
  // console.log('token ? ', token);

  return loading ? (
    <Loader /> ) : 
     (
    <div className="App">
     <Header />
      <Routes>
        <Route exact path="/" element={<Projets />} />
        <Route exact path="/projets" element={<Projets />} />
        <Route exact path="/projet/:slug" element={<DetailProjet />} />
        <Route exact path="/mobilier" element={<Furnitures />} />
        <Route exact path="/mobilier/:slug" element={<FurnitureDetail />} />
        <Route exact path="/contact/mobilier/:slug" element={<FurnituresContact />} />
        <Route exact path="/apropos" element={<About />} />
        <Route exact path="/contact" element={<Contact isLogged={isLogged} />} />
        <Route exact path="/back-projets/addProject" element={role === 'admin' ? <BackAddProjet /> : <Error403 />} />
        <Route exact path="/back-projets/updateProject/:slug" element={role === 'admin' ? <BackUpdateProjet /> : <Error403 />} />
        <Route exact path="/back-projets" element={role === 'admin' ? <BackProjets /> : <Error403 />} />
        <Route exact path="/back-admin" element={role === 'admin' ? <BackAdministration /> : <Error403 />} />
        <Route path="/back-mobilier" element={role === 'admin' ? <BackMobilier /> : <Error403 />} />
        <Route path="/back-mobilier/addMobilier" element={role === 'admin' ? <BackAddFurnitures /> : <Error403 />} />
        <Route path="/back-mobilier/updateMobilier/:slug" element={role === 'admin' ? <BackUpdateFurniture /> : <Error403 />} />
        <Route exact path="/login" element={isLogged ? <Projets /> : <Login />} />
        <Route exact path="/profile" element={isLogged ? <Profile /> : <Login />} />
        <Route exact path="/403" element={<Error403 />} />
        <Route exact path="*" element={<Error404 />} />
        <Route exact path="/credit" element={<Credit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
