import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { actionPostProject, changeBackInputValue, actionResetFormAddProject } from "../../../../Redux/Actions/BackProjectsActions";
import BannerBackOffice from "../../BannerBackOffice/BannerBackOffice";
import BackProjetForm from "./BackProjetForm/BackProjetForm";


const BackAddProjet = () => {

  const [file, setFile] = useState(null)
  // console.log('file', file);
  const [readerFile, setReaderFile] = useState({})
  // console.log('readerFile', readerFile);

  const dispatch = useDispatch();

  // Effect active on page load
  useEffect(() => {
    dispatch(actionResetFormAddProject());
  }, [dispatch]);

  const projectName = useSelector((state) => state.BackProjectsReducer.project_name);
  const location = useSelector((state) => state.BackProjectsReducer.location);
  const date = useSelector((state) => state.BackProjectsReducer.date);
  const program = useSelector((state) => state.BackProjectsReducer.program);
  const surface = useSelector((state) => state.BackProjectsReducer.surface_area);
  const type = useSelector((state) => state.BackProjectsReducer.type);
  const client = useSelector((state) => state.BackProjectsReducer.client);
  const design = useSelector((state) => state.BackProjectsReducer.design);
  const photoCredit = useSelector((state) => state.BackProjectsReducer.photo_credit);
  const label = useSelector((state) => state.BackProjectsReducer.label);
  const userId = useSelector((state) => state.UserReducer.userId);
  console.log('userId dans backAddProject', userId);

  const imageHandler = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        // console.log(reader.readyState);
        setReaderFile({ profileImg: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const title = 'Back Office'

  return (
    <main className="container" >
      <BannerBackOffice title={title} />

      <div className="row">
        <BackProjetForm
          imageHandler={imageHandler}
          setFile={setFile}
          file={file}
          projectName={projectName}
          location={location}
          date={date}
          program={program}
          surface={surface}
          type={type}
          client={client}
          design={design}
          photoCredit={photoCredit}
          label={label}
          userId={userId}
          changeInputValue={(value, name) => {
            // console.log('changeField', { value, name });
            dispatch(changeBackInputValue(value, name));
          }}
          handlePostProject={(formData, config) => {
            // console.log(formData, config);
            dispatch(actionPostProject(formData, config))
          }}
        />
        <article className="col s4 right preview__project sticky__details-project">
          <ul>
            <h3>Preview du projet</h3>
            <picture>
              {file && <img className="responsive-img " alt='preview-img' src={readerFile.profileImg} />}
            </picture>
            {projectName && <ol><h4>Titre : {projectName}</h4></ol>}
            {location && <ol><p>Localisation: {location}</p></ol>}
            {date && <ol><p>Année: {date}</p></ol>}
            {program && <ol><p>Programme: {program}</p></ol>}
            {surface && <ol><p>Surface: {surface}m²</p></ol>}
            {type && <ol><p>Type: {type}</p></ol>}
            {client && <ol><p>Commenditaire: {client}</p></ol>}
            {design && <ol><p>Conception: {design}</p></ol>}
            {photoCredit && <ol><p>Crédit Photo: {photoCredit}</p></ol>}
          </ul>
        </article>
      </div>
    </main>
  )
}

export default BackAddProjet;