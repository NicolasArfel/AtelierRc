import BackProjetFormInput from "./BackProjetFormInput/BackProjetFormInput";


const BackProjetForm = ({ projectName,
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
                    name='surface'
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

export default BackProjetForm;