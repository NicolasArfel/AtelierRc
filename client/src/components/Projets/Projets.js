import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import './Projets.css';

import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const title = 'Projets';
const description = '';

const Projets = () => {

    // useSelector allows us to use the information stored in the ProjectReducer
    const projects = useSelector((state) => state.ProjectsReducer.projects)
    // console.log(projects)

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
                                <img className="responsive-img z-depth-2" alt={project.name} src={`http://localhost:3001/image/projects/${project.name}`} />
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