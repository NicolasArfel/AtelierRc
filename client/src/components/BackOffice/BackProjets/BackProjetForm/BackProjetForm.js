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
    changeInputValue }) => {

    const projectTitle = 'Nom du projet';
    const locationTitle = 'Localisation';
    const dateTitle = 'Année';
    const programTitle = 'Programme';
    const surfaceTitle = 'Surface';
    const typeTitle = 'Type';
    const clientTitle = 'Commenditaire';
    const designTitle = 'Conception';
    const creditTitle = 'Crédit Photo';

    return (

        <form className="col s6 left contact__form">
            {/* <div className="file-field input-field col s12">
            <div className="btn">
              <span>File</span>
              <input type="file" multiple />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" placeholder="Upload one or more files" />
            </div>
          </div> */}
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