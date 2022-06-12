import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import './Header.css';
const logoInsta = '../../images/icons8-instagram.svg'
const LogoRC = '../../images/Atelier.png'

const activeLink = ({ isActive }) => {
    return isActive ? "active-link" : ""
}

const Header = () => {
    return (
        <div>
            <header className="center">
                <nav className="center " role="navigation">
                    <span href='#' id="logo-container" className="brand-logo center"><img alt='LogoRC responsive-img' className='logo_header' src={LogoRC} /></span>
                    <div className="nav-wrapper container">
                        <ul className="left hide-on-med-and-down">
                            <li className='navlink'>
                                <NavLink to="/" className={activeLink} >
                                    Projets
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/moblier" className={activeLink} >
                                    Mobilier
                                </NavLink>
                            </li> */}
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <NavLink to="/apropos" className={activeLink} >
                                    A propos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={activeLink} >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className={activeLink}>
                                    Connexion
                                </NavLink>
                            </li>
                        </ul>
                        <ul id="nav-mobile" className="sidenav">
                            <div className="col l4 s12 logoInsta">
                                <a href='https://www.instagram.com/lepetitchineur/?igshid=YmMyMTA2M2Y%3D' target="blank"><img alt='LogoRC' className='insta' src={logoInsta} /></a>
                            </div>
                            <li>
                                <NavLink to="/" className={activeLink} >
                                    Projets
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/moblier" className={activeLink} >
                                    Mobilier
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/apropos" className={activeLink} >
                                    A propos
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className={activeLink} >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <Link to="/login">
                                    Connexion
                                </Link>
                            </li>
                        </ul>
                        <span data-target="nav-mobile" className="sidenav-trigger "><i className="material-icons grey-text">menu</i></span>
                    </div>
                
                    <div className="col l4 s12 logoInsta hide-on-med-and-down">
                        <a href='https://www.instagram.com/lepetitchineur/?igshid=YmMyMTA2M2Y%3D' target="blank"><img alt='LogoRC' className='insta' src={logoInsta} /></a>
                    </div>

                    {/* {!isLogged && <i class="black-text right material-icons login">person</i> }
                    {isLogged && <i class="black-text right material-icons login">exit_to_app</i> } */}

                </nav>
            </header>
        </div>
    )
}

export default Header;