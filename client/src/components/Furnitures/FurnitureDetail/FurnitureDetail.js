
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { actionAxiosFurnituresPictures } from "../../../Redux/Actions/FurnituresActions";

import { findFurniture } from "../../../Redux/Selectors/furnituresSelectors";
import Banner from "../../Banner/Banner";


const FurnitureDetail = () => {

    const dispatch = useDispatch();
    const { slug } = useParams();

    const furniture = useSelector((state) => findFurniture(state.FurnituresReducer.furnitures, slug))
    // console.log(furniture)

    useEffect(() => {
        furniture && dispatch(actionAxiosFurnituresPictures(furniture.furniture_id));
    }, [dispatch, furniture]);

    const pictures = useSelector((state) => state.FurnituresReducer.pictures)
    // console.log('pictures', pictures);

    return (
        <>
            {furniture && <main className="container" >
                <Banner title={'Mobilier'} description={''} />
                <div className="row detail__project">
                    <div className="col s6 sticky__details-project">
                        <h2 className="left card-title card__title">{furniture.furniture_name}</h2>
                        <div className="col s12">
                            <div className="left card card__detail">
                                <div className="card-content">
                                    {furniture.type}
                                    <p>{furniture.description}</p>
                                    {furniture.designer.toLowerCase() === 'anonyme' ? '' : <p>{furniture.designer}</p>}
                                    {furniture.editor.toLowerCase() === 'anonyme' ? '' : <p>{furniture.editor}</p>}
                                    <p>{furniture.date}</p>

                                </div>
                                <div className="card-content">
                                    <p>{furniture.dimensions}</p>
                                    <p>{furniture.condition}</p>
                                    {furniture.availability === true ? <p style={{ color: 'green' }}>Disponible</p> : <p style={{ color: 'red' }}>Indisponible</p>}
                                </div>
                                <div className="card-content">
                                    <p >{furniture.photo_credit}</p>
                                </div>


                            <NavLink to='/mobilier'>
                                <button
                                    className="btn waves-effect waves-light grey darken-3 button"
                                    name="action"
                                >
                                    Revenir aux mobiliers
                                </button>

                            </NavLink>
                            </div>
                        </div>
                    </div>
                    {pictures &&
                        <div className="col s6">
                            {pictures.map(picture => (
                                <article className="card card__article" key={picture.id}>
                                    <div className="card-image">
                                        <img className="responsive-img" alt={picture.name} src={`http://localhost:3001/image/furnitures/${picture.name}`} />
                                        {/* <img className="responsive-img z-depth-2" alt={picture.name} src={`http://www.salleanthony.fr:6520/image/projects/${picture.name}`} /> */}
                                    </div>
                                </article>
                            ))}
                        </div>
                    }
                </div>
            </main>}


        </>

    )
}

export default FurnitureDetail;