import { DELETE_FURNITURE } from "../Actions/BackFurnituresActions";

const BackFurnituresMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case DELETE_FURNITURE : {

            const response = await deleteFurniture(action.payload.id);
            // console.log('response delete furniture', responseProjects.status)

           

            break;
        }
        default:
            next(action);
    }

}

export default BackFurnituresMiddleware;