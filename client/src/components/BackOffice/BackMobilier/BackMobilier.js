import React from 'react'

import BannerBackOffice from '../BannerBackOffice/BannerBackOffice';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer'

import './backMobilier.css'

const title = 'Back Office'

const BackMobilier = () => {
  return (
    <>
      <Header />
      <main className="container" >
        <BannerBackOffice title={title} />
        <div className="row">
          <form className="col s6 left contact__form">
            {/* <div className="file-field input-field col s12">
            <div className="btn">
              <span>File</span>
              <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" placeholder="Upload one or more files" />
            </div>
          </div> */}
            <div className="input-field col s12">
              <input id="project_name" type="text" className="validate" />
              <label htmlFor="project_name">Nom</label>
            </div>
            <div className="input-field col s12">
              <input id="project-type" type="text" className="validate" />
              <label htmlFor="project-type">Type</label>
            </div>
            <div className="input-field col s12">
              <textarea id="project-etat" type="text" className="materialize-textarea" ></textarea>
              <label htmlFor="project-etat">Etat</label>
            </div>
            <div className="input-field col s12">
              <textarea id="project-description" type="text" className="materialize-textarea" ></textarea>
              <label htmlFor="project-description">Description</label>
            </div>
            <div className="input-field col s12">
              <textarea id="project-available" type="text" className="materialize-textarea" ></textarea>
              <label htmlFor="project-available">Disponibilité</label>
            </div>
            <div className="input-field col s12">
              <textarea id="project-price" type="number" className="materialize-textarea" ></textarea>
              <label htmlFor="project-price">Prix</label>
            </div>
            <button className="btn waves-effect waves-light grey darken-3 button" type="submit" name="action">Ajouter l'article</button>
          </form>
          <div className="col s12 right table__back-projects">
            <table className="centered responsive-table striped">
              <thead>
                <tr>
                  <th>Nom de l'article</th>
                  <th>Disponibilité</th>
                  <th>Prix</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Article chére</td>
                  <td>Disponible</td>
                  <td>1500 euros</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
                <tr>
                  <td>Article chére</td>
                  <td>Disponible</td>
                  <td>1500 euros</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
                <tr>
                  <td>Article chére</td>
                  <td>Disponible</td>
                  <td>1500 euros</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
                <tr>
                  <td>Article chére</td>
                  <td>Disponible</td>
                  <td>1500 euros</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
                <tr>
                  <td>Article chére</td>
                  <td>Disponible</td>
                  <td>1500 euros</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BackMobilier