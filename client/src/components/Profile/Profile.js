import Banner from "../Banner/Banner";
import './Profile.css'

const title = 'Profil';
const description = `Vous pouvez modifer les informations vous concernant ici .`;

const Profile = () => {
    return (
        <>
            <Banner title={title} description={description} />
            <div className="row ">
                <div className='column col s6 left user__info'>
                    <h3>Romain Caillon</h3>
                    <p>Email : romaincaillon.archi@gmail.com</p>
                    {/* <p>Numéro de Téléphone : 0601020304</p> */}
                    {/* <p>Adresse : Perpette les alouettes</p> */}
                    {/* <p>Ville : 75010 Paris</p> */}
                </div>
                <form className="col s6 right register__form">
                    <div className="row">
                        <div className="input-field col s12">
                            <input
                                id="last_name"
                                type="text"
                                className="validate" />
                            <label htmlFor="last_name">Nom</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                id="first_name"
                                type="text"
                                className="validate" />
                            <label htmlFor="first_name">Prénom</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                id="email"
                                type="email"
                                className="validate" />
                            <label htmlFor="email">Email</label>
                            <span
                                className="helper-text"
                                data-error="Email non valide"
                                data-success="Email valide"
                            ></span>
                        </div>
                        {/* <div className="input-field col s12">
                            <input
                                id="adress"
                                type="text"
                                className="validate" />
                            <label htmlFor="adress">Adresse</label>
                        </div> */}
                        {/* <div className="input-field col s12">
                            <input
                                id="zip_code"
                                type="text"
                                className="validate" />
                            <label htmlFor="zip_code">Code Postal</label>
                        </div> */}
                        {/* <div className="input-field col s12">
                            <input
                                id="city"
                                type="text"
                                className="validate" />
                            <label htmlFor="city">Ville</label>
                        </div> */}
                        {/* <div className="input-field col s12">
                            <input
                                id="phone_number"
                                type="text"
                                className="validate" />
                            <label htmlFor="phone_number">Numéro de téléphone</label>
                        </div> */}
                        <div className="input-field col s12">
                            <input
                                id="password"
                                type="text"
                                className="validate" />
                            <label htmlFor="password">Mot de Passe</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                id="confirm_password"
                                type="text"
                                className="validate" />
                            <label htmlFor="confirm_password">
                                Confirmer le Mot de Passe
                            </label>
                        </div>
                        <button
                            className="button btn waves-effect waves-light grey darken-3 "
                            type="submit"
                            name="action"
                        >
                            Valider les informations saisies
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Profile;