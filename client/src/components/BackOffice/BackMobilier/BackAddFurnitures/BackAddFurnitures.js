/* --- import modules --- */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionPostFurniture, actionRefreshFurnitureState, changeBackInputValue } from "../../../../Redux/Actions/BackFurnituresActions";

/* --- import components --- */

import BannerBackOffice from "../../BannerBackOffice/BannerBackOffice";
import BackAddFurnituresForm from "./BackAddFurnituresForm/BackAddFurnituresForm";

/* --- variables --- */

const title = 'Back Office'

/* --- BackAddFurnitures component --- */

const BackAddFurnitures = () => {

  const [file, setFile] = useState(null)
  // console.log('file', file);
  const [readerFile, setReaderFile] = useState({})
  // console.log('readerFile', readerFile);

  const dispatch = useDispatch();

  /* --- import state from BackFurnituresReducer --- */
  const furnitureName = useSelector((state) => state.BackFurnituresReducer.furniture_name);
  const type = useSelector((state) => state.BackFurnituresReducer.type);
  const editor = useSelector((state) => state.BackFurnituresReducer.editor);
  const designer = useSelector((state) => state.BackFurnituresReducer.designer);
  const date = useSelector((state) => state.BackFurnituresReducer.date);
  const dimensions = useSelector((state) => state.BackFurnituresReducer.dimensions);
  const conditions = useSelector((state) => state.BackFurnituresReducer.conditions);
  const description = useSelector((state) => state.BackFurnituresReducer.description);
  const photoCredit = useSelector((state) => state.BackFurnituresReducer.photo_credit);
  const userId = useSelector((state) => state.UserReducer.userId);

  useEffect(() => {
    dispatch(actionRefreshFurnitureState());
  }, [dispatch])

  const imageHandler = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log('reader.readyState',reader.readyState);
        setReaderFile({ profileImg: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  return (
    <main className="container" >
      <BannerBackOffice title={title} />

      <div className="row">
        <BackAddFurnituresForm
          imageHandler={imageHandler}
          setFile={setFile}
          file={file}
          furnitureName={furnitureName}
          type={type}
          editor={editor}
          designer={designer}
          date={date}
          dimensions={dimensions}
          description={description}
          photoCredit={photoCredit}
          userId={userId}
          changeInputValue={(value, name) => {
            // console.log('changeField', { value, name });
            dispatch(changeBackInputValue(value, name));
          }}
          handlePostFurnitures={(formData, config) => {
            // console.log('formdata et config',formData, config);
            dispatch(actionPostFurniture(formData, config))
          }}
        />
        <article className="col s4 right preview__project sticky__details-project">
          <ul>
            <h3>Preview du projet</h3>
            <picture>
              {file && <img className="responsive-img " alt='preview-img' src={readerFile.profileImg} />}
            </picture>
            {furnitureName && <ol><h4>Titre : {furnitureName}</h4></ol>}
            {type && <ol><p>Type: {type}</p></ol>}
            {date && <ol><p>date: {date}</p></ol>}
            {editor && <ol><p>editor: {editor}</p></ol>}
            {designer && <ol><p>designer: {designer}</p></ol>}
            {dimensions && <ol><p>dimensions: {dimensions}</p></ol>}
            {conditions && <ol><p>conditions: {conditions}</p></ol>}
            {description && <ol><p>description: {description}</p></ol>}
            {photoCredit && <ol><p>Photo credit: {photoCredit}</p></ol>}
          </ul>
        </article>
      </div>
    </main>
  )
}

export default BackAddFurnitures;