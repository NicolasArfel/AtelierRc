import { CHANGE_INPUT_VALUE, LOGOUT, SAVE_USER } from "../Actions/UserActions";

export const initialState = {
    email: '',
    password: '',
    isLogged: false,
    token: null,
    firstName: '',
    lastName: '',
    role: 'visiteur'
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            console.log('je suis dans CHANGE_INPUT_VALUE');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case SAVE_USER:
            console.log('je suis dans SAVE_USER');
            return {
                ...state,
                // on est connecté donc on sauvegarde le pseudo, et on met isLogged=true
                isLogged: true,
                token: action.payload.token,
                password: '',
                firstName: action.payload.user.firstname,
                lastName: action.payload.user.lastname,
                role: action.payload.user.role
            };
        case LOGOUT:
            console.log('je suis dans LOGOUT');
            return {
                ...state,
                isLogged: false,
                token: null,
                firstName: '',
                lastName: '',
                email: '',
                role: 'visiteur'
            };

        default:
            return state;
    }
};


export default reducer;