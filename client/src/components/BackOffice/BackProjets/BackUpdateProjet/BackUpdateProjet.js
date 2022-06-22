import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


import { findProject } from '../../../../Redux/Selectors/projectsSelectors';

// import { actionAxiosProjectsPictures } from '../../../Redux/Actions/ProjetsActions';

import BannerBackOffice from '../../BannerBackOffice/BannerBackOffice';
import { actionAxiosProjectsPictures } from '../../../../Redux/Actions/ProjetsActions';
import BackUpdateProjetForm from './BackUpdateProjetForm/BackUpdateProjetForm';
import { changeBackInputValue, actionUpdateProjet, actionPostCoverPhotoProject } from '../../../../Redux/Actions/BackProjectsActions';


const title = 'Back Office'

const BackUpdateProjet = () => {

    const dispatch = useDispatch();

    // Slug is a variable of URL for dynamisation routes
    const { slug } = useParams();

    const [file, setFile] = useState(null)

    const projectName = useSelector((state) => state.BackProjectsReducer.project_name);
    const location = useSelector((state) => state.BackProjectsReducer.location);
    const date = useSelector((state) => state.BackProjectsReducer.date);
    const program = useSelector((state) => state.BackProjectsReducer.program);
    const surface = useSelector((state) => state.BackProjectsReducer.surface);
    const type = useSelector((state) => state.BackProjectsReducer.type);
    const client = useSelector((state) => state.BackProjectsReducer.client);
    const design = useSelector((state) => state.BackProjectsReducer.design);
    const photoCredit = useSelector((state) => state.BackProjectsReducer.photo_credit);
    const userId = useSelector((state) => state.UserReducer.userId);
    const pictures = useSelector((state) => state.ProjectsReducer.pictures);
    const isError = useSelector((state) => state.BackProjectsReducer.isError)

    // We use a .find method to store in a selectors folder. It allows you to sort the projects according to the url thanks to the 'SLUG' parameter
    const projet = useSelector((state) => findProject(state.ProjectsReducer.projects, slug))
    // console.log('projet = ', projet);

    // Effect active on page load
    useEffect(() => {
        projet && dispatch(actionAxiosProjectsPictures(projet.project_id));
    }, [dispatch, projet]);

    const handleSubmitCoverPhoto = (event) => {

        event.preventDefault();

        const formData = new FormData()

        formData.append('cover_image', file)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        console.log('project id =', projet.project_id);
        dispatch(actionPostCoverPhotoProject(projet.project_id, formData, config));

    }

    return (
        <>
            {projet && <main className="container" >
                <BannerBackOffice title={title} />
                <h3>Projet : {projet.project_name}</h3>
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
                        <div className='upload__form-project'>
                            {isError && <p className="ErrorUpload__coverPhotoProject">Il est impossible d'utiliser l'image à plusieurs reprises.</p>}
                            <form className="col s6 left contact__form" onSubmit={handleSubmitCoverPhoto}>
                                <div className='label__file-cover'>
                                    <input
                                        id='file'
                                        type="file"
                                        name="cover_image"
                                        accept="image/png, image/jpeg, image/jpg"
                                        required
                                        onChange={(e) => { setFile(e.target.files[0]) }}
                                        className="input__file-cover-project"
                                    />
                                    <button
                                        className="btn waves-effect waves-light grey darken-3 button"
                                        type="submit"
                                        name="action"
                                    >
                                        Modifier la photo de cover
                                    </button>
                                </div>
                            </form>
                            <form className="col s6 left contact__form" onSubmit={handleSubmitCoverPhoto}>
                                <div className='label__file-cover'>
                                    <input
                                        id='file'
                                        type="file"
                                        name="cover_image"
                                        accept="image/png, image/jpeg, image/jpg"
                                        required
                                        onChange={(e) => { setFile(e.target.files[0]) }}
                                        className="input__file-cover-project"
                                    />
                                    <button
                                        className="btn waves-effect waves-light grey darken-3 button"
                                        type="submit"
                                        name="action"
                                    >
                                        Ajouter d'autres photos
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col s12 update__project">
                            {pictures.map(picture => (
                                <article className="card card__article preview__update-project" key={picture.id}>
                                    <div className="card-image">
                                        <img className="responsive-img z-depth-2" alt={picture.name} src={`http://localhost:3001/image/projects/${picture.name}`} />
                                        {/* <img className="responsive-img z-depth-2" alt={picture.name} src={`http://www.salleanthony.fr:6520/image/projects/${picture.name}`} /> */}
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