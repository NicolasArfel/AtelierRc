import { CHANGE_INPUT_VALUE, SAVE_USER } from "../Actions/UserActions";

export const initialState = {
    email: '',
    password: '',
    isLogged: false,
    token: null,
    firstName: '',
    lastName:'',
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            console.log('je suis dans INPUT VALUE');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case SAVE_USER:
            console.log('je suis dans save_user');
            return {
                ...state,
                // on est connecté donc on sauvegarde le pseudo, et on met isLogged=true
                isLogged: true,
                token: action.payload.token,
                password: '',
                firstName: action.payload.user.firstname, 
                lastName: action.payload.user.lastname, 
            };

        default:
            return state;
    }
};


export default reducer;