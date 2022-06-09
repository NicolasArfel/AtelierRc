import './Header.css';

const logoInsta = '../../images/icons8-instagram.svg'
const LogoRC = '../../images/Atelier.png'

const Header = () => {
    return (
        <div>
        
            <header className="center">
                <nav className="grey lighten-3 center" role="navigation">
                    <span href='#' id="logo-container" className="brand-logo center"><img alt='LogoRC' className='logo_header' src={LogoRC} /></span>
                    <div className="nav-wrapper container">
                        <ul className="left hide-on-med-and-down">
                            <li className='black-text'>Projets</li>
                            <li className='black-text'>Mobilier</li>
                        </ul>
                        <ul className="right hide-on-med-and-down">
                            <li className='black-text'>A Propos</li>
                            <li className='black-text'>Contact</li>
                        </ul>
                        <ul id="nav-mobile" className="sidenav">
                            <li className='black-text'><span >Projets</span></li>
                            <li className='black-text'><span >Mobilier</span></li>
                            <li className='black-text'><span >A Propos</span></li>
                            <li className='black-text'><span >Contact</span></li>
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