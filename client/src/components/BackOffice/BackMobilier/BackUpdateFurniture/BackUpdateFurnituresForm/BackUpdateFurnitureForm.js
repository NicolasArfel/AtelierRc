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
    // conditions,
    description,
    // availability,
    photoCredit,
    userId,
    changeInputValue,
    handleUpdateFurnitures }) => {


    const conditionsLabels = [
        'Bon état',
        'Etat correct',
        'Excellent état',
        'Pour pièces']
    const availableLabels = [
        true,
        false ]

    let isConfirm = false;

    const furnitureTitle = 'Nom du Mobilier';
    const typeTitle = 'Type';
    const editorTitle = 'Editeur';
    const designerTitle = 'Designer';
    const dateTitle = 'Année';
    const dimensionsTitle = 'Dimensions';
    const conditionTitle = 'Etat';
    const availableTitle = 'Disponibilité';
    const descriptionTitle = 'Description';
    const creditTitle = 'Crédit Photo';
    // const [file, setFile] = useState(null)
    const [conditionLabelValue, setConditionLabelValue] = useState('Bon état')
    const [availableLabelValue, setAvailableLabelValue] = useState(true)

    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleUpdateFurnitures(furniture_id, conditionLabelValue, availableLabelValue);
        
    }

    return (
        <form className="col s12 left contact__form" onSubmit={handleSubmit}>
            {isConfirm === true ? <p className='isConfirm__form-update-project'>Changements enregistrés</p> : ''}
            <select id='label' value={conditionLabelValue} onChange={(e) => setConditionLabelValue(e.target.value)}>
                {conditionsLabels.map((option) => (
                    <option
                        key={option}
                        value={option}
                    >
                        {'*' + option}
                    </option>
                ))}
            </select>
            <label htmlFor="label">Choisis un {conditionTitle}</label>

            <select id='label' value={availableLabelValue} onChange={(e) => setAvailableLabelValue(e.target.value)}>
                {availableLabels.map((option) => (
                    <option
                        key={option}
                        value={option }
                    >
                        {option === true ? '* Disponible' : '* Indisponible'}
                    </option>
                ))}
            </select>
            <label htmlFor="label">Choisis un {availableTitle}</label>

            <BackUpdateFurnituresFormInput
                type='text'
                name='furniture_name'
                title={'*' + furnitureTitle}
                value={furnitureName}
                onChange={changeInputValue}
                required
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
                name='editor'
                title={editorTitle}
                value={editor}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='designer'
                title={designerTitle}
                value={designer}
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
                name='dimensions'
                title={dimensionsTitle}
                value={dimensions}
                onChange={changeInputValue}
            />
            <BackUpdateFurnituresFormInput
                type='text'
                name='description'
                title={descriptionTitle}
                value={description}
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