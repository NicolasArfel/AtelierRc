import BackAddFurnituresFormInput from "./BackAddFurnituresFormInput/BackAddFurnituresFormInput";

const BackAddFurnituresForm = ({
    furnitureName,
    type,
    editor,
    designer,
    date,
    dimensions,
    conditions,
    description,
    // availability,
    photoCredit,
    changeInputValue, }) => {

    const disabled = true;
    // const dispatch = useDispatch();
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



    return (

        <form className="col s6 left contact__form" >
            <div>
                <input
                    type="file"
                    name="cover_image"
                    accept="image/png, image/jpeg, image/jpg"
                    required
                    // onChange={(e) => { setFile(e.target.files[0]) }}
                    className="input__file-cover-project"
                />
                <select name='condition' value={conditions} onChange={changeInputValue}>
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