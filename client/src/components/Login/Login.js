import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Login.css'

const title = 'Se connecter';
const description = 'Grâce à votre espace personnel, vous serez en mesure de retrouver vos articles préférés !';

const Login = () => {
    return (

        <main className="login container center" >
            <Banner title={title} description={description} />
            <div className="row ">
                <form className="col s6 left login__form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="email"
                                type="email"
                                className="validate" />
                            <label htmlFor="email">
                                Email
                            </label>
                            <span
                                className="helper-text"
                                data-error="Email non valide"
                                data-success="Email valide"></span>
                        </div>
                        <div className="input-field col s12">
                            <textarea
                                id="textarea1"
                                className="materialize-textarea"></textarea>
                            <label htmlFor="password">
                                Mot de Passe
                            </label>
                        </div>
                        <button
                            className="btn waves-effect waves-light grey darken-3 button"
                            type="submit"
                            name="action">
                            Se connecter
                        </button>
                    </div>
                </form>
                <div className="column col s6">
                    <p>Vous n'avez pas de compte ? Inscrivez-vous !</p>
                    <Link to='/register'>
                        <button className="button btn-large waves-effect waves-light grey darken-3">
                            S'inscrire
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
};

export default Login;
