import { DISPATCH_FURNITURES } from "../Actions/FurnituresActions";

export const initialState = {
    furnitures: []
};

const reducer = (state = initialState, action = {}) => {
   
    switch (action.type) {
        case DISPATCH_FURNITURES:
            console.log('JE SUIS DANS DISPATCH_FURNITURES');
            return {
                ...state,
                furnitures: action.payload.furnitures,
            }
        default:
            return state;
    }
};

export default reducer;