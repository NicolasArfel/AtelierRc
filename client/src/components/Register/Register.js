import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Register.css'

const title = `S'incrire`;
const description = `S'incrire pour créer ses favoris et commander les articles uniques !`;

const Register = () => {
    return (
        <main className="login container center" >
        <Banner title={title} description={description} />
        <div className="row ">                
                <form className="col s6 right signUp__form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="first_name" type="text" className="validate" />
                            <label htmlFor="first_name">Prénom</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="last_name" type="text" className="validate" />
                            <label htmlFor="last_name">Nom</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                            <span className="helper-text" data-error="Email non valide" data-success="Email valide"></span>
                        </div>
                        <div className="input-field col s12">
                            <input id="tel" type="tel" className="validate" />
                            <label htmlFor="tel">Numéro de téléphone</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="password">Mot de Passe</label>
                        </div>
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label htmlFor="confirm_password">Confirmer le Mot de Passe</label>
                        </div>
                        <button className="btn waves-effect waves-light grey darken-3 contact__button" type="submit" name="action">Envoyer</button>
                    </div>
                </form>
                <div className="column col s6">
                    <button class="button btn-large waves-effect waves-light grey darken-3">
                        Se connecter
                    </button>                  
                </div>
            </div>
        </main>
    )
};

export default Register;
