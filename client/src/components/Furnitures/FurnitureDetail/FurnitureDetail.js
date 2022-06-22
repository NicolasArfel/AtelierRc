import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findFurniture } from "../../../Redux/Selectors/furnituresSelectors";
import Banner from "../../Banner/Banner";

const FurnitureDetail = () => {
    const dispatch = useDispatch();

    const {slug} = useParams();

    const furniture = useSelector((state) => findFurniture(state.FurnituresReducer.furnitures, slug));

    const pictures = useSelector((state) => state.FurnituresReducer.pictures)
    

    return (

        <>
            {projet &&
                <main className="container" >
                    <Banner title={`Design par ${projet.design}`} description={projet.program}/>
                    <div className="row detail__project">
                        <div className="col s6 sticky__details-project">
                            <div className="col s12">
                                <div className="card card__detail">
                                    <div className="card-content black-text">
                                        <h2 className="center card-title card__title">{projet.project_name}</h2>
                                        <p className='card__section-title'>Projet :</p>
                                        {projet.program &&
                                            <p>{projet.program}</p>
                                        }
                                    </div>
                                    {projet.type && projet.surface_area &&
                                        <div className="card-content">
                                            <p className='card__section-title'>Type && surface:</p>
                                            <p>{projet.type} de {projet.surface_area}</p>
                                        </div>
                                    }
                                    {projet.location &&
                                        <div className="card-content">
                                            <p className='card__section-title'>location :</p>
                                            <p>{projet.location}</p>
                                        </div>
                                    }
                                    {projet.demande &&
                                        <div className="card-content">
                                            <p className='card__section-title'>Demande :</p>
                                            <p>{projet.demande}</p>
                                        </div>
                                    }
                                    <div className="card-content">
                                        <p>{projet.client}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {pictures &&
                            <div className="col s6">
                                {pictures.map(picture => (
                                    <article className="card card__article" key={picture.id}>
                                        <div className="card-image">
                                            <img className="responsive-img z-depth-2" alt={picture.name} src={`http://localhost:3001/image/projects/${picture.name}`} />
                                            {/* <img className="responsive-img z-depth-2" alt={picture.name} src={`http://www.salleanthony.fr:6520/image/projects/${picture.name}`} /> */}
                                        </div>
                                    </article>
                                ))}
                            </div>
                        }
                    </div>
                </main>}
        </ >
    )
}

export default FurnitureDetail;