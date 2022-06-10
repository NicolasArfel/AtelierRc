import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Login.css'

const title = 'Se connecter';
const description = 'Veuillez vous connecter pour accéder à vos favoris !';;


const Login = () => {
    return (
        
        <main className="login container center" >
        <Banner title={title} description={description} />
        <div className="row ">                
                <form className="col s6 left register__form">
                    <div className="row">                        
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                            <span className="helper-text" data-error="Email non valide" data-success="Email valide"></span>
                        </div>                       
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="password">Mot de Passe</label>
                        </div>                       
                        <button className="btn waves-effect waves-light grey darken-3 contact__button" type="submit" name="action">Envoyer</button>
                    </div>
                </form>
                <div className="column col s6">
                    <Link to='/register'>
                    <button class="button btn-large waves-effect waves-light grey darken-3">
                        S'inscrire
                    </button>                  
                    </Link>
                </div>
            </div>
        </main>
    )
};

export default Login;
