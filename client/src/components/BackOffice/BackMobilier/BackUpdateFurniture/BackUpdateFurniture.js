import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { actionPostFurniture, actionUpdateFurnitures } from "../../../../Redux/Actions/BackFurnituresActions";
import { changeBackInputValue } from "../../../../Redux/Actions/BackFurnituresActions";
import { actionAxiosFurnituresPictures } from "../../../../Redux/Actions/FurnituresActions";
import { findFurniture } from "../../../../Redux/Selectors/furnituresSelectors";
import BannerBackOffice from "../../BannerBackOffice/BannerBackOffice";
import BackAddFurnituresForm from "../BackAddFurnitures/BackAddFurnituresForm/BackAddFurnituresForm";
import BackUpdateFurnitureForm from "./BackUpdateFurnituresForm/BackUpdateFurnitureForm";
import BackUpdateFurnituresFormInput from "./BackUpdateFurnituresForm/BackUpdateFurnitureFormInput/BackUpdateFurnituresFormInput";

const title = 'Back Office'

const BackUpdateFurniture = () => {

    const dispatch = useDispatch();

    // Slug is a variable of URL for dynamisation routes
    const { slug } = useParams();
    const [multyFile, setMultyFile] = useState(null)

    const furnitureName = useSelector((state) => state.BackFurnituresReducer.furniture_name);
    const type = useSelector((state) => state.BackFurnituresReducer.type);
    const editor = useSelector((state) => state.BackFurnituresReducer.editor);
    const designer = useSelector((state) => state.BackFurnituresReducer.designer);
    const date = useSelector((state) => state.BackFurnituresReducer.date);
    const dimensions = useSelector((state) => state.BackFurnituresReducer.dimensions);
    // const conditions = useSelector((state) => state.BackFurnituresReducer.conditions);
    const description = useSelector((state) => state.BackFurnituresReducer.description);
    // const availability = useSelector((state) => state.BackFurnituresReducer.availability);
    const photoCredit = useSelector((state) => state.BackFurnituresReducer.photo_credit);
    const userId = useSelector((state) => state.UserReducer.userId);

    const furnitures = useSelector((state) => findFurniture(state.FurnituresReducer.furnitures, slug))
    console.log(furnitures)
    const pictures = useSelector((state) => state.FurnituresReducer.pictures);
    useEffect(() => {
        furnitures && dispatch(actionAxiosFurnituresPictures(furnitures.furniture_id));
    }, [dispatch, furnitures]);

    // const handleSubmitMultiPhoto = (event) => {

    //     event.preventDefault();

    //     const formData = new FormData()

    //     // ajout de plusieurs fichier aux formData de façon dynamique
    //     Object.entries(multyFile).forEach(([key, value]) => {
    //         console.log('array file', [key, value])
    //         formData.append('uploadedImages', value)
    //     },
    //     );

    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     }

        // console.log('furniture id =', furnitures.furniture_id);
        // dispatch(actionPostMultyFilePhotoFurniture(furnitures.furniture_id, formData, config));
    // }
    return (
        <>
            {furnitures && <main className="container" >
                <BannerBackOffice title={title} />
                <Link to={`/mobilier/${furnitures.slug}`}>
                    <h3 className='title__backOffice-Project'>{furnitures.furniture_name}</h3>
                </Link>
                <div className="row detail__project">
                    <div className="col s6 sticky__details-project">
                        <div className="col s12"></div>
                        <BackUpdateFurnitureForm
                        furniture_id={furnitures.furniture_id}
                            furnitureName={furnitureName}
                            type={type}
                            editor={editor}
                            designer={designer}
                            date={date}
                            dimensions={dimensions}
                            // conditions={conditions}
                            description={description}
                            // availability={availability}
                            photoCredit={photoCredit}
                            userId={userId}
                            changeInputValue={(value, name) => {
                                // console.log('changeField', { value, name });
                                dispatch(changeBackInputValue(value, name));
                            }}
                            handleUpdateFurnitures={(furniture_id, conditionLabelValue, availableLabelValue) => {
                                    // console.log('les deux',furniture_id, conditionLabelValue, availableLabelValue);
                                    dispatch(actionUpdateFurnitures(furniture_id, conditionLabelValue, availableLabelValue))
                                }}
                        />
                    </div>
                </div>
                {/* <div className="col s6 sticky__details-project">
                    <form className="col s6 left contact__form" onSubmit={handleSubmitMultiPhoto}>
                        <div className='label__file-cover'>
                            <input
                                id='file'
                                type="file"
                                name="uploadedImages"
                                accept="image/png, image/jpeg, image/jpg"
                                multiple
                                required
                                onChange={(e) => { setMultyFile(e.target.files) }}
                                className="input__file-cover-project"
                            />
                            <p>*Ne sont acceptées que les images de type : jpeg, jpg, png et taille 15mb.</p>
                            <button
                                className="btn waves-effect waves-light grey darken-3 button"
                                type="submit"
                                name="action"
                            >
                                Ajouter d'autres photos
                            </button>
                        </div>
                    </form>
                    <div className="col s12 update__project">
                        {pictures.map(picture => (
                            <article className="card__article preview__update-project" key={picture.id}>
                                <div className="card-image">
                                    <div className="card__image-photo-project">
                                        {picture.cover_photo === true ? <p className='cover__photo-project'>Cover</p> : ''}
                                        <img className="responsive-img z-depth-2" alt={picture.name} src={`http://localhost:3001/image/projects/${picture.name}`} />
                                    </div>
                                    <div className='card__button-flex-projet'>
                                        {picture.cover_photo === false ? <button
                                            className='btn-flat btn__toggle-supprimer'
                                            onClick={(event) => {
                                                event.preventDefault();
                                                console.log('photo id =', picture.id);
                                                dispatch(actionDeletePhotoFurniture(picture.id));
                                            }}
                                        >Supprimer
                                        </button> : ''}
                                        {picture.cover_photo === false ? <button
                                            className='btn-flat btn__toggle-updateCover'
                                            onClick={(event) => {
                                                event.preventDefault();
                                                console.log('photo id =', picture.id);
                                                dispatch(actionPostCoverPhotoFurniture(picture.id));
                                            }}
                                        >Ajouter cover
                                        </button> : ''}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div> */}

            </main>}
        </>
    )
}

export default BackUpdateFurniture;