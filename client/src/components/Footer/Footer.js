import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './Footer.css'
const LogoRC = '../../images/logo-simple.png'
const logoInsta = '../../images/instagram-brands.svg'


const Footer = () => {

const isLogged = useSelector((state) => state.UserReducer.isLogged);

    return (
        <footer className="page-footer">
            <div className="row footer-content">
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
            <div className="footer-copyright">
                <div className="container center">
                    <p className='copyright'>© 2022 Copyright Atelier-RC</p>
                {!isLogged && <NavLink to="/login" className='login__link' >
                    Se connecter au Back Office
                </NavLink>}
                </div>
            </div>
        </footer>
    )
}

export default Footer