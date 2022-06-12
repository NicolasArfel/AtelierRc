import React from 'react'

import Banner from '../../Banner/Banner';

import './DetailProjet.css'

import projet1 from '../../../projets/Chantier-meulire-Andrsey/1.jpg'
import projet2 from '../../../projets/Chantier-meulire-Andrsey/2.jpg'
import projet3 from '../../../projets/Chantier-meulire-Andrsey/3.jpg'
import projet4 from '../../../projets/Chantier-meulire-Andrsey/4.jpg'
import projet5 from '../../../projets/Chantier-meulire-Andrsey/5.jpg'
import projet6 from '../../../projets/Chantier-meulire-Andrsey/6.jpg'
import projet7 from '../../../projets/Chantier-meulire-Andrsey/7.jpg'
import projet8 from '../../../projets/Chantier-meulire-Andrsey/8.jpg'

const title = 'Atelier Versailles'

const DetailProjet = () => {
    return (
        <main className="container" >
            <Banner title={title} />
            <div className="row">
                <div className="col s6">
                    <div className="col s12">
                        <div className="card card__detail">
                            <div className="card-content black-text">
                                <h2 className="card-title card__title">Atelier Versailles</h2>
                                <p>Projet :</p>
                                <p>Grand appartement haussmannien à moderniser, acheté par la famille 10 ans en arrière.</p>
                            </div>
                            <div className='divider'></div>
                            <div className="card-content">
                                <p>Style :</p>
                                <p>Un style chaleureux, intemporel, avec des choix colorimétriques osés mais toujours élégants.</p>
                            </div>
                            <div className='divider'></div>
                            <div className="card-content">
                                <p>Surface: 200m²</p>
                            </div>
                            <div className='divider'></div>
                            <div className="card-content">
                                <p>Demande :</p>
                                <p>
                                    Optimiser tous les volumes pour que chaque pièce corresponde au mode de vie de cette famille de 5 personnes, créer des rangements mais surtout réussir à garder le cachet de l’immeuble haussmannien.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col s6">
                    <article className="card card__article">
                        <div className="card-image">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet1} />
                        </div>
                    </article>
                    <article className="card  card__article">
                        <div className="card-image">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet2} />
                        </div>
                    </article>
                    <article className="card  card__article">
                        <div className="card-image">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet3} />
                        </div>
                    </article>
                    <article className="card  card__article">
                        <div className="card-image">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet4} />
                        </div>
                    </article>
                    <article className="card  card__article">
                        <div className="card-image">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet5} />
                        </div>
                    </article>
                    <article className="card  card__article">
                        <div className="card-image">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet6} />
                        </div>
                    </article>
                    <article className="card  card__article">
                        <div className="card-image">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet7} />
                        </div>
                    </article>
                    <article className="card  card__article">
                        <div className="card-image">
                            <img className="responsive-img z-depth-2" alt={projet1} src={projet8} />
                        </div>
                    </article>
                </div>
            </div>
        </main>
    )
}

export default DetailProjet