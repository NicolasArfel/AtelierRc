import React from 'react'

import Banner from '../Banner/Banner'
import './Contact.css'
const ContactImg = '../../images/contact_img.png'

const title = 'Contact'
const description = `Romain Caillon, 75010 Paris. romaincaillon.archi@gmail.com`

const Contact = () => {
    return (
        <main className="container" >
            <Banner title={title} description={description} />
            <div className="row">
                <article className="col s6">
                    <img alt='ContactImg' className='contact__img' src={ContactImg} />
                </article>
                <form className="col s6 right contact__form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Nom</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Prénom</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                            <span className="helper-text" data-error="Email non valide" data-success="Email valide"></span>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="textarea1">Votre Message</label>
                        </div>
                        <button className="btn waves-effect waves-light grey darken-3 contact__button" type="submit" name="action">Envoyer</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Contact