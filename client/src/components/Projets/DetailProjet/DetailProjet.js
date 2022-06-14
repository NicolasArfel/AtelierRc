import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { findProject } from '../../../Redux/Selectors/projectsSelectors';

import Banner from '../../Banner/Banner';

import './DetailProjet.css';

import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

const DetailProjet = () => {

    // Slug is a variable of URL for dynamisation routes
    const { slug } = useParams();

    // We use a .find method to store in a selectors folder. It allows you to sort the projects according to the url thanks to the 'SLUG' parameter
    const projet = useSelector((state) => findProject(state.ProjectsReducer.projects, slug))
    console.log(projet);

    return (
        <div>
            <Header />
            {projet &&
                <main className="container" >
                    <Banner title={`Design par ${projet.design}`} />
                    <div className="row detail__project">


                        <div className="col s6 sticky__details-project">
                            <div className="col s12">
                                <div className="card card__detail">
                                    <div className="card-content black-text">
                                        <h2 className="center card-title card__title">{projet.slug}</h2>
                                        <p className='card__section-title'>Projet :</p>
                                        {projet.program &&
                                            <p>{projet.program}</p>
                                        }
                                    </div>
                                    {projet.type && projet.surface_area &&
                                        <div className="card-content">
                                            <p className='card__section-title'>Type && surface:</p>
                                            <p>{projet.type} de {projet.surface_area}</p>
                                        </div>
                                    }
                                    {projet.location &&
                                        <div className="card-content">
                                            <p className='card__section-title'>location :</p>
                                            <p>{projet.location}</p>
                                        </div>
                                    }
                                    {projet.demande &&
                                        <div className="card-content">
                                            <p className='card__section-title'>Demande :</p>
                                            <p>{projet.demande}</p>
                                        </div>
                                    }
                                    <p>{projet.client}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col s6">
                            <article className="card card__article">
                                <div className="card-image">
                                    <img className="responsive-img z-depth-2" alt={''} src={''} />
                                </div>
                            </article>
                        </div>

                    </div>
                </main>}
            <Footer />
        </div>
    )
}

export default DetailProjet