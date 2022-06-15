import { CHANGE_INPUT_VALUE } from "../Actions/UserActions";

export const initialState = {
    email: '', 
    password: '', 
    isLogged: false,
    token: null,
};

const reducer = (state = initialState, action = {}) => {
   
    switch (action.type) {
        case CHANGE_INPUT_VALUE :
            console.log('je suis dans INPUT VALUE');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        default:
            return state;
    }
};

export default reducer;