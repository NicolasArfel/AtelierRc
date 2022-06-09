import { NavLink } from 'react-router-dom';

import './Header.css';
const logoInsta = '../../images/icons8-instagram.svg'
const LogoRC = '../../images/Atelier.png'

const Header = () => {
    return (
        <div>

            <header className="center">
                <nav className="grey white center" role="navigation">
                    <span href='#' id="logo-container" className="brand-logo center"><img alt='LogoRC' className='logo_header' src={LogoRC} /></span>
                    <div className="nav-wrapper container">
                        <ul className="left hide-on-med-and-down">
                            <li className='black-text'>
                                <NavLink to="/" >
                                    Projets
                                </NavLink>
                            </li>
                            <li className='black-text'>
                                <NavLink to="/moblier" >
                                    Mobilier
                                </NavLink>
                            </li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li className='black-text'>
                                <NavLink to="/apropos" >
                                    A propos
                                </NavLink>
                            </li>
                            <li className='black-text'>
                                <NavLink to="/contact" >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <ul id="nav-mobile" className="sidenav">
                            <li className='black-text'>
                                <NavLink to="/" >
                                    Projets
                                </NavLink>
                            </li>
                            <li className='black-text'>
                                <NavLink to="/moblier" >
                                    Mobilier
                                </NavLink>
                            </li>
                            <li className='black-text'>
                                <NavLink to="/apropos" >
                                    A propos
                                </NavLink>
                            </li>
                            <li className='black-text'>
                                <NavLink to="/contact" >
                                    Contact
                                </NavLink>
                            </li>
                        </ul>

                        <span data-target="nav-mobile" className="sidenav-trigger "><i className="material-icons grey-text">menu</i></span>
                    </div>
                    <div className="col l4 s12 logoInsta">
                        <a href='https://www.instagram.com/lepetitchineur/?igshid=YmMyMTA2M2Y%3D' target="blank"><img alt='LogoRC' className='insta' src={logoInsta} /></a>
                    </div>
                    {/* {!isLogged && <i class="black-text right material-icons login">person</i> }
                    {isLogged && <i class="black-text right material-icons login">exit_to_app</i> } */}
                    <i className="black-text right material-icons login">person</i>

                </nav>
            </header>
        </div>
    )
}

export default Header;