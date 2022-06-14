import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { actionAxiosProjects } from '../../Redux/Actions/ProjetsActions';

import './Projets.css';

import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const title = 'Projets';
const description = '';

const Projets = () => {

    // Dispatch allow us to trigger action from 'redux action' folder
    const dispatch = useDispatch();
    const projects = useSelector((state) => state.ProjectsReducer.projects)
    // console.log(projects)

    // Effect active on page load
    useEffect(() => {
        dispatch(actionAxiosProjects());
    }, []);

    return (
        <div>
            <Header />
            <main className="container" >
                <Banner title={title} description={description} />
                <div className="row project__section">
                    {projects.map(project => (
                        <Link
                            to={`/projet/${project.slug}`}
                            key={project.id}
                        >
                            <div className="card-image card__image ">
                                <img className="responsive-img z-depth-2" alt={project.name} src={``} />
                                <h2 className='card__image-title' >{project.slug}</h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Projets