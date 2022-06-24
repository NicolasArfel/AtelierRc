/* --- import modules --- */

import { useSelector } from "react-redux";

/* --- import components --- */

import BannerBackOffice from "../../BannerBackOffice/BannerBackOffice";
import BackAddFurnituresForm from "./BackAddFurnituresForm/BackAddFurnituresForm";

/* --- variables --- */

const title = 'Back Office'

/* --- BackAddFurnitures component --- */

const BackAddFurnitures = () => {

    /* --- import state from BackFurnituresReducer --- */
    const furnitureName = useSelector((state) => state.BackFurnituresReducer.furnitureName);
    const type = useSelector((state) => state.BackFurnituresReducer.type);
    const editor = useSelector((state) => state.BackFurnituresReducer.editor);
    const designer = useSelector((state) => state.BackFurnituresReducer.designer);
    const date = useSelector((state) => state.BackFurnituresReducer.date);
    const dimensions = useSelector((state) => state.BackFurnituresReducer.editor);
    const conditions = useSelector((state) => state.BackFurnituresReducer.conditions);
    const description = useSelector((state) => state.BackFurnituresReducer.description);
    const availability = useSelector((state) => state.BackFurnituresReducer.availability);
    const photoCredit = useSelector((state) => state.BackFurnituresReducer.photoCredit);

    return (
        <main className="container" >
        <BannerBackOffice title={title} />
  
        <div className="row">
          <BackAddFurnituresForm
            furnitureName={furnitureName}
            type={type}
            editor={editor}
            designer={designer}
            date={date}
            dimensions={dimensions}
            conditions={conditions}
            description={description}
            availability={availability}
            photoCredit={photoCredit}
            changeInputValue={(value, name) => {
              // console.log('changeField', { value, name });
            //   dispatch(changeBackInputValue(value, name));
            }}
            handlePostProject={(formData, config) => {
              // console.log(formData, config);
            //   dispatch(actionPostProject(formData, config))
            }}
          />
        </div>
      </main>
    )
}

export default  BackAddFurnitures;