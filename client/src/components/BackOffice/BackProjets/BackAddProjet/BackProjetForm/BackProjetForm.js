import PropTypes from 'prop-types';

import BackProjetFormInput from "./BackProjetFormInput/BackProjetFormInput";

const BackProjetForm = ({ projectName,
    slug,
    location,
    date,
    program,
    surface,
    type,
    client,
    design,
    photoCredit,
    changeInputValue,
    handlePostProject }) => {

    const projectTitle = 'Nom du projet';
    const slugTitle = 'URL';
    const locationTitle = 'Localisation';
    const dateTitle = 'Année';
    const programTitle = 'Programme';
    const surfaceTitle = 'Surface';
    const typeTitle = 'Type';
    const clientTitle = 'Commenditaire';
    const designTitle = 'Conception';
    const creditTitle = 'Crédit Photo';

    const handleSubmit = async (event) => {
        event.preventDefault();
        handlePostProject();
    }

    return (

        <form className="col s6 left contact__form" onSubmit={handleSubmit}>
            <div>
                <BackProjetFormInput
                    type='text'
                    name='project_name'
                    title={projectTitle}
                    value={projectName}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='slug'
                    title={slugTitle}
                    value={slug}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='location'
                    title={locationTitle}
                    value={location}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='date'
                    title={dateTitle}
                    value={date}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='program'
                    title={programTitle}
                    value={program}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='surface_area'
                    title={surfaceTitle}
                    value={surface}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='type'
                    title={typeTitle}
                    value={type}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='client'
                    title={clientTitle}
                    value={client}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='design'
                    title={designTitle}
                    value={design}
                    onChange={changeInputValue}
                />
                <BackProjetFormInput
                    type='text'
                    name='photo_credit'
                    title={creditTitle}
                    value={photoCredit}
                    onChange={changeInputValue}
                />

            </div>
            <button className="btn waves-effect waves-light grey darken-3 button" type="submit" name="action">Ajouter le projet</button>
        </form>
    )

}

BackProjetForm.propTypes = {
    projectName: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
    surface: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    design: PropTypes.string.isRequired,
    photoCredit: PropTypes.string.isRequired,
    changeInputValue: PropTypes.string.isRequired,
    handlePostProject: PropTypes.string.isRequired,
}

export default BackProjetForm;