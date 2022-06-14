import React from 'react'
import { Link } from 'react-router-dom';

import './Projets.css'

import projet1 from '../../projets/Chantier-meulire-Andrsey/1.jpg'
import projet2 from '../../projets/pers-projet-junot/1.jpg'
import projet3 from '../../projets/pers-projet-lamarck/1.jpg'
import projet4 from '../../projets/pers-projet-saint-maur/1.jpg'
import projet5 from '../../projets/pers-projet-voltaire/1.jpg'
import projet6 from '../../projets/photos-chantier-saint-maur/a.jpg'

import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const title = 'Projets'
const description = ''

const Projets = () => {
    return (
        <div>
            <Header/>
            <main className="container" >
                <Banner title={title} description={description} />
                <div className="row project__section">
                    <Link to="/projet/:slug" >
                        <div className="card-image card__image ">
                            <img className="responsive-img z-depth-2" alt={projet4} src={projet4} />
                            <h2 className='card__image-title' >Titre image</h2>
                        </div>
                    </Link>
                    <Link to="/projet/:slug" >
                        <div className="card-image card__image ">
                            <img className="responsive-img z-depth-2" alt={projet2} src={projet2} />
                        </div>
                    </Link>
                    <Link to="/projet/:slug" >
                        <div className="card-image card__image ">
                            <img className="responsive-img z-depth-2" alt={projet3} src={projet3} />

                        </div>
                    </Link>
                    <Link to="/projet/:slug" >
                        <div className="card-image card__image ">
                            <img className="responsive-img z-depth-2" alt={projet5} src={projet5} />

                        </div>
                    </Link>
                    <Link to="/projet/:slug" >
                        <div className="card-image card__image ">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet1} />

                        </div>
                    </Link>
                    <Link to="/projet/:slug" >
                        <div className="card-image card__image ">
                            <img className="responsive-img z-depth-2" alt={projet6} src={projet6} />

                        </div>
                    </Link>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Projets