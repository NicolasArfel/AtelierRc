
import './Header.css';

const Header = () => {
    return (
        <div>
        
            <header className="center">
                <nav className="grey lighten-3 center" role="navigation">
                    <span id="logo-container" className="brand-logo center">LOGO</span>
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
                    <i class="black-text left material-icons insta">photo_camera</i> 
                    {/* {!isLogged && <i class="black-text right material-icons login">person</i> }
                    {isLogged && <i class="black-text right material-icons login">exit_to_app</i> } */}
                    <i class="black-text right material-icons login">person</i> 

                </nav>
            </header>
        </div>
    )
}

export default Header;