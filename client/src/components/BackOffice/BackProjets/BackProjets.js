import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionPostProject, changeBackInputValue } from '../../../Redux/Actions/BackProjectsActions';

import BannerBackOffice from '../BannerBackOffice/BannerBackOffice';
import BackProjetForm from './BackProjetForm/BackProjetForm';
import './BackProjets.css'

const title = 'Back Office'

const BackProjets = () => {

  const dispatch = useDispatch();
  const projectName = useSelector((state) => state.BackProjectsReducer.project_name);
  const location = useSelector((state) => state.BackProjectsReducer.location);
  const date = useSelector((state) => state.BackProjectsReducer.date);
  const program = useSelector((state) => state.BackProjectsReducer.program);
  const surface = useSelector((state) => state.BackProjectsReducer.surface);
  const type = useSelector((state) => state.BackProjectsReducer.type);
  const client = useSelector((state) => state.BackProjectsReducer.client);
  const design = useSelector((state) => state.BackProjectsReducer.design);
  const photoCredit = useSelector((state) => state.BackProjectsReducer.photo_credit);

  return (
    <main className="container" >
      <BannerBackOffice title={title} />
      <div className="row">
        <BackProjetForm
          projectName={projectName}
          location={location}
          date={date}
          program={program}
          surface={surface}
          type={type}
          client={client}
          design={design}
          photoCredit={photoCredit}
          changeInputValue={(value, name) => {
            // console.log('changeField', { value, name });
            dispatch(changeBackInputValue(value, name));
          }}
          handlePostProject={() => {
            dispatch(actionPostProject())
          }}
        />
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
  )
}

export default BackProjets