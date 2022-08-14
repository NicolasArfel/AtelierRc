import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import BackAddFurnituresFormInput from "./BackAddFurnituresFormInput/BackAddFurnituresFormInput";

const BackAddFurnituresForm = ({
    imageHandler,
    setFile,
    file,
    furnitureName,
    type,
    editor,
    designer,
    date,
    dimensions,
    description,
    photoCredit,
    userId,
    changeInputValue,
    handlePostFurnitures }) => {

    const disabled = true;
    const navigate = useNavigate()
    const [labelValue, setLabelValue] = useState(1)
    const conditionsLabels = ['Etat correct', 'Bon état', 'Excellent état', 'Pour pièces']

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

        const formData = new FormData()

        formData.append('cover_image', file)
        formData.append('furniture_name', furnitureName)
        formData.append('type', type)
        formData.append('editor', editor)
        formData.append('designer', designer)
        formData.append('date', date)
        formData.append('availability', true)
        formData.append('dimensions', dimensions)
        formData.append('description', description)
        formData.append('photo_credit', photoCredit)
        formData.append('cover_photo', true)
        formData.append('condition', labelValue)
        formData.append('position', 1)
        formData.append('user_id', userId)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        handlePostFurnitures(formData, config);
        // dispatch(resetInputFormAddProject())
        let path = `/back-mobilier`;
        navigate(path);
    }

    const onChangeCoverImg = (e) => {
        setFile(e.target.files[0])
        imageHandler(e)
    }


    return (

        <form className="col s6 left contact__form" onSubmit={handleSubmit} >
            <div>
                <input
                    type="file"
                    name="cover_image"
                    accept="image/png, image/jpeg, image/jpg"
                    required
                    onChange={onChangeCoverImg}
                    className="input__file-cover-project"
                />
                <select id='condition' value={labelValue} onChange={(e) => setLabelValue(e.target.value)}>
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
                <BackAddFurnituresFormInput
                    type='text'
                    name='furniture_name'
                    title={'*' + furnitureTitle}
                    value={furnitureName}
                    onChange={changeInputValue}
                    required
                />
                <BackAddFurnituresFormInput
                    type='text'
                    name='type'
                    title={typeTitle}
                    value={type}
                    onChange={changeInputValue}
                />
                <BackAddFurnituresFormInput
                    type='text'
                    name='editor'
                    title={editorTitle}
                    value={editor}
                    onChange={changeInputValue}
                />
                <BackAddFurnituresFormInput
                    type='text'
                    name='designer'
                    title={designerTitle}
                    value={designer}
                    onChange={changeInputValue}
                />
                <BackAddFurnituresFormInput
                    type='text'
                    name='date'
                    title={dateTitle}
                    value={date}
                    onChange={changeInputValue}
                />
                <BackAddFurnituresFormInput
                    type='text'
                    name='dimensions'
                    title={dimensionsTitle}
                    value={dimensions}
                    onChange={changeInputValue}
                />
                <BackAddFurnituresFormInput
                    type='text'
                    name='description'
                    title={descriptionTitle}
                    value={description}
                    onChange={changeInputValue}
                />
                <BackAddFurnituresFormInput
                    type='text'
                    name='photo_credit'
                    title={creditTitle}
                    value={photoCredit}
                    onChange={changeInputValue}
                />

            </div>
            <p>(*) Champs obligatoires</p>
            <button
                className="btn waves-effect waves-light grey darken-3 button"
                type="submit"
                name="action"
                disabled={furnitureName === '' ? disabled : ''}
            >
                Ajouter le projet
            </button>
        </form>
    )

}



export default BackAddFurnituresForm;