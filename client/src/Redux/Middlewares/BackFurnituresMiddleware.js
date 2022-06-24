import {  DELETE_FURNITURE } from "../Actions/BackFurnituresActions";
import { actionDispatchFurnitures } from "../Actions/FurnituresActions";
import { deleteFurniture } from "../Requests/BackAdminFurnituresRequests";
import { filteredFurnitures } from "../Selectors/furnituresSelectors";

const BackFurnituresMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case DELETE_FURNITURE : {
            const response = await deleteFurniture(action.payload.id);
            console.log('response delete furniture', response)

            if (response.status === 204) {
                const responseFurnitureReducer = store.getState();
                const newState = filteredFurnitures(responseFurnitureReducer.FurnituresReducer.furnitures, action.payload.id);
                console.log('newstate', newState)
                store.dispatch(
                    actionDispatchFurnitures(newState)
                );
            }

            break;
        }
        
        default:
            next(action);
    }

}

export default BackFurnituresMiddleware;