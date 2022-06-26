import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import { findProject } from '../../../../Redux/Selectors/projectsSelectors';

// import { actionAxiosProjectsPictures } from '../../../Redux/Actions/ProjetsActions';

import BannerBackOffice from '../../BannerBackOffice/BannerBackOffice';
import { actionAxiosProjectsPictures } from '../../../../Redux/Actions/ProjetsActions';
import BackUpdateProjetForm from './BackUpdateProjetForm/BackUpdateProjetForm';
import { changeBackInputValue, actionUpdateProjet, actionPostCoverPhotoProject, actionPostMultyFilePhotoProject, actionDeletePhotoProject, actionDispatchProjetFormAutoComplet } from '../../../../Redux/Actions/BackProjectsActions';


const title = 'Back Office'

const BackUpdateProjet = () => {

    const dispatch = useDispatch();

    // Slug is a variable of URL for dynamisation routes
    const { slug } = useParams();
    const [multyFile, setMultyFile] = useState(null)
    // console.log('multyFile', multyFile);

    const projectName = useSelector((state) => state.BackProjectsReducer.project_name);
    const location = useSelector((state) => state.BackProjectsReducer.location);
    const date = useSelector((state) => state.BackProjectsReducer.date);
    const program = useSelector((state) => state.BackProjectsReducer.program);
    const surface = useSelector((state) => state.BackProjectsReducer.surface_area);
    const type = useSelector((state) => state.BackProjectsReducer.type);
    const client = useSelector((state) => state.BackProjectsReducer.client);
    const design = useSelector((state) => state.BackProjectsReducer.design);
    const photoCredit = useSelector((state) => state.BackProjectsReducer.photo_credit);
    const userId = useSelector((state) => state.UserReducer.userId);
    const pictures = useSelector((state) => state.ProjectsReducer.pictures);

    // We use a .find method to store in a selectors folder. It allows you to sort the projects according to the url thanks to the 'SLUG' parameter
    const projet = useSelector((state) => findProject(state.ProjectsReducer.projects, slug))
    // console.log('projet = ', projet);

    // Effect active on page load
    useEffect(() => {
        projet && dispatch(actionAxiosProjectsPictures(projet.project_id));
        projet && dispatch(actionDispatchProjetFormAutoComplet(projet));
    }, [dispatch, projet]);

    const handleSubmitMultiPhoto = (event) => {

        event.preventDefault();

        const formData = new FormData()

        // ajout de plusieurs fichier aux formData de façon dynamique
        Object.entries(multyFile).forEach(([key, value]) => {
            // console.log('array file', [key, value])
            formData.append('uploadedImages', value)
        },
        );

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        // console.log('project id =', projet.project_id);
        dispatch(actionPostMultyFilePhotoProject(projet.project_id, formData, config));
    }

    return (
        <>
            {projet && <main className="container" >
                <BannerBackOffice title={title} />
                <Link to={`/projet/${projet.slug}`}>
                    <h3 className='title__backOffice-Project'>{projet.project_name}</h3>
                </Link>
                <div className="row detail__project">
                    <div className="col s6 sticky__details-project">
                        <div className="col s12">
                            <BackUpdateProjetForm
                                slug={projet.slug}
                                project_id={projet.project_id}
                                projectName={projectName}
                                location={location}
                                date={date}
                                program={program}
                                surface={surface}
                                type={type}
                                client={client}
                                design={design}
                                photoCredit={photoCredit}
                                userId={userId}
                                changeInputValue={(value, name) => {
                                    // console.log('changeField', { value, name });
                                    dispatch(changeBackInputValue(value, name));
                                }}
                                handlePostProject={(project_id, labelValue) => {
                                    // console.log(formData, config);
                                    dispatch(actionUpdateProjet(project_id, labelValue))
                                }}
                            />
                        </div>
                    </div>
                    <div className="col s6 sticky__details-project">
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
                                                    dispatch(actionDeletePhotoProject(picture.id));
                                                }}
                                            >Supprimer
                                            </button> : ''}
                                            {picture.cover_photo === false ? <button
                                                className='btn-flat btn__toggle-updateCover'
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    console.log('photo id =', picture.id);
                                                    dispatch(actionPostCoverPhotoProject(picture.id));
                                                }}
                                            >Ajouter cover
                                            </button> : ''}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </main>}
        </>
    )
}

export default BackUpdateProjet