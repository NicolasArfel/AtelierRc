import { actionDispatchFurnitures, AXIOS_FURNITURES } from "../Actions/FurnituresActions";
import { getAllFurnitures } from "../Requests/FurnituresRequests";

const FurnituresMiddleware = (store) => (next) => async (action) => {

    switch (action.type) {
        case AXIOS_FURNITURES: 
        console.log ('Je suis dans AXIOS_Furniture de Furnitures');
        try {
            const responseFurnitures = await getAllFurnitures();
            console.log('furnitures middleware response', responseFurnitures);
            store.dispatch(
                actionDispatchFurnitures(responseFurnitures.data)
            );
            
        } catch (err) {
            console.error(err);
        }
        break;
        
        default:
            next(action);
    }
}

export default FurnituresMiddleware;