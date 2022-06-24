import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackUpdateFurnituresFormInput from './BackUpdateFurnitureFormInput/BackUpdateFurnituresFormInput';

const BackUpdateFurnitureForm = ({
    furniture_id,
    furnitureName,
    type,
    editor,
    designer,
    date,
    dimensions,
    conditions,
    description,
    availability,
    photoCredit,
    userId,
    changeInputValue,
    handlePostFurnitures  }) => {

    // const [file, setFile] = useState(null)
    const [labelValue, setLabelValue] = useState(1)
    // console.log('labelValue', labelValue);

    const conditionsLabels = ['Etat correct', 'Bon état', 'Excellent état', 'Pour pièces']
    // console.log('labels', labels);

    let isConfirm = false;

    let navigate = useNavigate();
    const furnitureTitle = 'Nom du Mobilier';
    const typeTitle = 'Type';
    const editorTitle = 'Editeur';
    const designerTitle = 'Designer';
    const dateTitle = 'Année';
    const dimensionsTitle = 'Dimensions';
    const conditionTitle = 'Etat';
    const descriptionTitle = 'Description';
    const creditTitle = 'Crédit Photo';
    const handleSubmit = async (event) => {
        event.preventDefault();

        await handlePostFurnitures(furniture_id, labelValue);

        // I check if my input is empty or not. If is not i replace some carac for build a cool slug
        if (furnitureName) {
            // I format my projectName to skip spaces and some other carac for build a cool name
            const slugName = furnitureName.replace(/(?!\w|\s)./g, '')
                .replace(/\s+/g, ' ')
                .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
            // with my new cool name i build a slug and i exploit it to navigate when my project is updated
            const newSlugName = slugName.replace(/ +/g, "-").toLowerCase()
            let path = `/back-mobilier/updateMobilier/${newSlugName}`;
            navigate(path);
        }
    }

    return (
        <form className="col s12 left contact__form" onSubmit={handleSubmit}>
            {isConfirm === true ? <p className='isConfirm__form-update-project'>Changements enregistrés</p> : ''}
            <select id='label' value={labelValue} onChange={(e) => setLabelValue(e.target.value)}>
                {labels.map((option) => (
                    <option
                        key={option.id}
                        value={option.id}
                    >
                        {'*' + option.label}
                    </option>
                ))}
            </select>
            <label htmlFor="label">Choisi un label</label>
            
            <BackUpdateFurnituresFormInput
                type='text'
                name='project_name'
                title={'*' + projectTitle}
                value={projectName}
                onChange={changeInputValue}
                required
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='location'
                title={locationTitle}
                value={location}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='date'
                title={dateTitle}
                value={date}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='program'
                title={programTitle}
                value={program}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='surface_area'
                title={surfaceTitle}
                value={surface}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='type'
                title={typeTitle}
                value={type}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='client'
                title={clientTitle}
                value={client}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='design'
                title={designTitle}
                value={design}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='photo_credit'
                title={creditTitle}
                value={photoCredit}
                onChange={changeInputValue}
            />
            <p>(*) Champs obligatoires</p>
            <button
                className="btn waves-effect waves-light grey darken-3 button"
                type="submit"
                name="action"
                onClick={() => isConfirm = true}
            >
                Valider les modifications
            </button>
        </form>
    )
}

export default BackUpdateFurnitureForm;