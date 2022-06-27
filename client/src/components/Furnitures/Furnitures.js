import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Banner from "../Banner/Banner";
import './Furnitures.css';
const image = '../../images/contact_img.png'

const title = 'Mobilier';
const description = `Retrouvez ici quelques meubles et objets de décorations à vendre. `;


const Furnitures = () => {

    const furnitures = useSelector((state) => state.FurnituresReducer.furnitures)


    return (
        <main className="container">
            <Banner title={title} description={description} />
            <div className="row furniture__section">
                {furnitures.map(furniture => (
                    <div className="col s12 m4 furniture__card" key={furniture.id}>
                        <div className="card sticky-action">
                            <div className="furniture__card-image card-image waves-effect waves-block waves-light">
                                <img className="activator" src={`http://localhost:3001/image/furnitures/${furniture.name}`} alt={furniture.name}></img>
                            </div>
                            <div className="card-action">
                                <span className="card-title activator grey-text text-darken-4 furniture__card-title" >{furniture.furniture_name}<i className="material-icons right">more_vert</i></span>
                                <p>
                                    <NavLink
                                        to={`/contact/mobilier/${furniture.slug} `}

                                    >
                                        Me contacter
                                    </NavLink>
                                </p>
                                <p>
                                    <NavLink
                                        to={`/mobilier/${furniture.slug} `}

                                    >
                                        Plus d'infos
                                    </NavLink>
                                </p>
                            </div>
                            <div className="card-reveal furniture__card-reveal">
                                <span className="card-title grey-text text-darken-4 furniture__card-title">{furniture.furniture_name}<i className="material-icons right">close</i></span>
                                <div className="furniture__card-field">
                                    <p>{furniture.description}</p>
                                    {furniture.designer.toLowerCase() === 'anonyme' ? '' :<p>{furniture.designer}</p>}
                                    {furniture.editor.toLowerCase() === 'anonyme' ? '' :<p>{furniture.editor}</p>}
                                    <p>{furniture.date}</p>
                                    <p>{furniture.dimensions}</p>
                                    <p>{furniture.condition}</p>
                                    {furniture.availability === true ? <p style={{ color: 'green' }}>Disponible</p> : <p style={{ color: 'red' }}>Indisponible</p>}
                                    <p >{furniture.photo_credit}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </main>
    )
}

export default Furnitures;