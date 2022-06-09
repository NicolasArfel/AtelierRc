import React from 'react'

import './Contact.css'
const ContactImg = '../../images/about.jpeg'

const Contact = () => {
    return (
        <main className="container">
            <div className='contact__banner'>
                <p className='contact__banner-p'>
                    Contact
                </p>
            </div>
            <div className="row">
                <div className="col s6">
                    <article className='contact__aticle'>
                        <p className='black-text'>Romain Caillon</p>
                        <p className='black-text'>75010 Paris</p>
                        <a href="mailto: romaincaillon.archi@gmail.com" className='mailto'>romaincaillon.archi@gmail.com</a>
                    </article>
                    <img alt='ContactImg' className='contact__img' src={ContactImg} />
                </div>
                <form className="col s6 right contact__form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Nom</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Prénom</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                            <span className="helper-text" data-error="L'email n'est pas valide" data-success="right"></span>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="last_name">Votre Message</label>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Contact