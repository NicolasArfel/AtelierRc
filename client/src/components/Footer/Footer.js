import React from 'react'

import './FooterStyle.css'
const LogoRC = '../../images/Atelier.png'
const logoInsta = '../../images/icons8-instagram.svg'

const footer = () => {
    return (
        <footer className="page-footer white">
            <div className="row">
                <div className="col l4 s12 footer-contact">
                    <p className='black-text'>Romain Caillon</p>
                    <p className='black-text'>75010 Paris</p>
                    <a href="mailto: romaincaillon.archi@gmail.com" className='mailto'>romaincaillon.archi@gmail.com</a>
                </div>
                <div className="col l4 s12">
                    <img className='logoRC responsive-img' alt='LogoRC' src={LogoRC} />
                </div>
                <div className="col l4 s12 logoInsta">
                    <a href='https://www.instagram.com/lepetitchineur/?igshid=YmMyMTA2M2Y%3D' target="blank"><img alt='LogoRC' className='logo-insta' src={logoInsta} /></a>
                </div>
            </div>
            <div className="footer-copyright white">
                <div className="container">
                    <p className='copyright'>© 2022 Copyright Atelier-RC</p>
                </div>
            </div>
        </footer>
    )
}

export default footer