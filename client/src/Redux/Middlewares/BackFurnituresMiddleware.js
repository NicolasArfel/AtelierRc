import {   DELETE_FURNITURE, POST_FURNITURE, UPDATE_FURNITURE } from "../Actions/BackFurnituresActions";
import { actionAxiosFurnitures, actionDispatchFurnitures } from "../Actions/FurnituresActions";
import { deleteFurniture, postNewFurniture, UpdateFurniture } from "../Requests/BackAdminFurnituresRequests";
import { filteredFurnitures } from "../Selectors/furnituresSelectors";

const BackFurnituresMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case DELETE_FURNITURE: {
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

        case POST_FURNITURE: {
            // console.log('je suis dans POST_FURNITURE');

            const { formData, config } = action.payload
            // console.log('stateBackProject = ', formData);

            try {
                const response = await postNewFurniture(formData, config);
                // console.log('reponse back', response)
                if (response.status === 200) {
                    store.dispatch(
                        actionAxiosFurnitures()
                    );
                }
            } catch (err) {
                console.error(err)
            }
        }
        break;

        case UPDATE_FURNITURE: {
            console.log('je suis dans UPDATE_FURNITURE');

            const { furniture_id, conditionLabelValue, availableLabelValue} = action.payload
            const responseBackReducer = store.getState();
            const data = responseBackReducer.BackFurnituresReducer;
            const newData = { ...data, conditionLabelValue: conditionLabelValue, availableLabelValue:availableLabelValue  }
            console.log('data', newData);
            // console.log('====================================');
            // console.log(newData);
            // console.log('====================================');

            try {
                const response = await UpdateFurniture(furniture_id, newData);
                console.log('reponse back', response)
                if (response.status === 200) {
                    store.dispatch(
                        actionAxiosFurnitures()
                    );
                }
            } catch (err) {
                console.error(err)
            }
        }
        break;
        
        default:
            next(action);
    }

}

export default BackFurnituresMiddleware;