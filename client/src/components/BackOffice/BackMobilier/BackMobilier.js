/* --- import modules --- */

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

/* --- import actions --- */

import { actionDeleteFurniture } from '../../../Redux/Actions/BackFurnituresActions';

/* --- import component --- */

import BannerBackOffice from '../BannerBackOffice/BannerBackOffice';

/* --- import css --- */

import './BackMobilier.css'

/* --- variables --- */

const title = 'Back Office'

/* --- creation of the component --- */

const BackMobilier = () => {

  /* --- dispatch variable for using actions --- */

  const dispatch = useDispatch();

  /* --- we get the furnitures state frmo the reducer --- */
  const furnitures = useSelector((state) =>
    state.FurnituresReducer.furnitures);
  // console.log('mobilier dans backprojet', furnitures);

  /* --- creation of the view --- */
  return (
    <main className="container" >
      <BannerBackOffice
        title={title}
        description={''}
      />
      <div className="row">
        <div className="col s12 right table__back-projects">
          <table className=" projects__list centered responsive-table striped">
            <thead>
              <tr>
                <th>Nom de l'article</th>
                <th>Etat</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {furnitures.map(furniture => (
                <tr key={furniture.id}>
                  <td>{furniture.furniture_name}</td>
                  <td>{furniture.condition}</td>
                  <td>{furniture.type}</td>
                  <td>
                    <button
                      className="btn-flat waves-effect waves-light button__back-admin-delete red lighten-3"
                      type="submit"
                      name="supprimer"
                      onClick={() => {
                        const confirmBox = window.confirm(
                          "Voulez-vous vraiment supprimer cet article ?"
                        )
                        if (confirmBox === true) {

                          dispatch(
                            /* --- we send the furnitures id we want to delete --- */
                            actionDeleteFurniture(furniture.furniture_id)

                          );
                        }
                      }}
                    >
                      Supprimer
                    </button>

                    <Link to={`/back-mobilier/updateMobilier/${furniture.slug}`} >
                      <button
                        className="button__back-admin-modify btn-flat waves-effect waves-light teal lighten-3"
                        type="submit"
                        name="supprimer">
                        Modifier
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to='/back-mobilier/addMobilier'>
            <button className="button btn-large waves-effect waves-light grey darken-3">
              Ajouter un Mobilier
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default BackMobilier;