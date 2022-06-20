import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionDeleteProject, actionDispatchStatus } from '../../../Redux/Actions/BackProjectsActions';

import BannerBackOffice from '../BannerBackOffice/BannerBackOffice';
import './BackProjets.css'

const title = 'Back Office'

const BackProjets = () => {

  const dispatch = useDispatch();

  const projects = useSelector((state) => state.ProjectsReducer.projects);

  console.log('projects dans backprojet', projects);
  return (
    <main className="container" >
      <BannerBackOffice title={title} />

      <div className="row">

        <div className="col s12 right table__back-projects">
          <table className=" projects__list centered responsive-table striped">
            <thead>
              <tr>
                <th>Nom du projet</th>
                <th>Surface</th>
                <th>commanditaire</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(project => (
                <tr key={project.id}>
                  <td>{project.project_name}</td>
                  <td>{project.surface_area}</td>
                  <td>{project.client}</td>
                  <td>
                    <button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3"
                      type="submit"
                      name="supprimer"
                      onClick={() => {
                        dispatch(actionDeleteProject(project.project_id))
                      }}
                    >Supprimer</button>
                    <button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3"
                      type="submit"
                      name="supprimer">Modifier</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to='/back-projets/addProject'>
            <button className="button btn-large waves-effect waves-light grey darken-3">
              Ajouter un Projet
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default BackProjets