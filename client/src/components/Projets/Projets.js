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

const title = 'Projets'
const description = ''

const Projets = () => {
    return (
        <main className="container" >
            <Banner title={title} description={description} />
            <div className="row project__section">
                <article className="col s12 m6 l3 project__article card">
                    <Link to="/" >
                        <div class="card-image">
                            <img className="responsive-img" alt={projet4} src={projet4} />
                            <span class="card-title black-text">Card Title</span>
                        </div>
                    </Link>
                </article>
                <article className="col s12 m6 l3 project__article card">
                    <Link to="/" >
                        <div class="card-image">
                            <img className="responsive-img" alt={projet2} src={projet2} />
                            <span class="card-title black-text">Card Title</span>
                        </div>
                    </Link>
                </article>
                <article className="col s12 m6 l3 project__article card">
                    <Link to="/" >
                        <div class="card-image">
                            <img className="responsive-img" alt={projet3} src={projet3} />
                            <span class="card-title black-text">Card Title</span>
                        </div>
                    </Link>
                </article>
                <article className="col s12 m6 l3 project__article card">
                    <Link to="/" >
                        <div class="card-image">
                            <img className="responsive-img" alt={projet5} src={projet5} />
                            <span class="card-title black-text">Card Title</span>
                        </div>
                    </Link>
                </article>
                <article className="col s12 m6 l3 project__article card">
                    <Link to="/" >
                        <div class="card-image">
                            <img className="responsive-img" alt={projet1} src={projet1} />
                            <span class="card-title black-text">Card Title</span>
                        </div>
                    </Link>
                </article>
                <article className="col s12 m6 l3 project__article card" >
                    <Link to="/" >
                        <div class="card-image">
                            <img className="responsive-img" alt={projet6} src={projet6} />
                            <span class="card-title black-text">Card Title</span>
                        </div>
                    </Link>
                </article>
            </div>
        </main>
    )
}

export default Projets