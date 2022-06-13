import React from 'react'

import BannerBackOffice from '../BannerBackOffice/BannerBackOffice';
import './BackProjets.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const title = 'Back Office'

const BackProjets = () => {
  return (
    < >
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
            <div>
              <div className="input-field col s12">
                <input id="project_name" type="text" className="validate" />
                <label htmlFor="project_name">Nom</label>
              </div>
              <div className="input-field col s12">
                <input id="project-localisation" type="text" className="validate" />
                <label htmlFor="project-localisation">Localisation</label>
              </div>
              <div className="input-field col s12">
                <textarea id="project-date" type="text" className="materialize-textarea" ></textarea>
                <label htmlFor="project-date">Date</label>
              </div>
              <div className="input-field col s12">
                <textarea id="project-programme" type="text" className="materialize-textarea" ></textarea>
                <label htmlFor="project-programme">Programme</label>
              </div>
              <div className="input-field col s12">
                <textarea id="project-surface" type="number" className="materialize-textarea" ></textarea>
                <label htmlFor="project-surface">Surface</label>
              </div>
              <div className="input-field col s12">
                <textarea id="project-type" type="text" className="materialize-textarea" ></textarea>
                <label htmlFor="project-type">Type</label>
              </div>
              <div className="input-field col s12">
                <textarea id="project-commenditaire" type="text" className="materialize-textarea" ></textarea>
                <label htmlFor="project-commenditaire">Commenditaire</label>
              </div>
              <div className="input-field col s12">
                <textarea id="project-conception" type="text" className="materialize-textarea" ></textarea>
                <label htmlFor="project-conception">Conception</label>
              </div>
              <div className="input-field col s12">
                <textarea id="project-credit-photo" type="text" className="materialize-textarea" ></textarea>
                <label htmlFor="project-credit-photo">Crédit photo</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light grey darken-3 button" type="submit" name="action">Ajouter le projet</button>
          </form>
          <div className="col s12 right table__back-projects">
            <table className="centered responsive-table striped">
              <thead>
                <tr>
                  <th>Nom du projet</th>
                  <th>Surface</th>
                  <th>commenditaire</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Atelier Versailles</td>
                  <td>200m²</td>
                  <td>jean luc</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
                <tr>
                  <td>Atelier Versailles</td>
                  <td>200m²</td>
                  <td>jean luc</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
                <tr>
                  <td>Atelier Versailles</td>
                  <td>200m²</td>
                  <td>jean luc</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
                <tr>
                  <td>Atelier Versailles</td>
                  <td>200m²</td>
                  <td>jean luc</td>
                  <td><button className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3" type="submit" name="supprimer">Supprimer</button><button className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3" type="submit" name="supprimer">Modifier</button></td>
                </tr>
                <tr>
                  <td>Atelier Versailles</td>
                  <td>200m²</td>
                  <td>jean luc</td>
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

export default BackProjets