import jwt_decode from "jwt-decode";

import { CHANGE_INPUT_VALUE, LOGOUT, SAVE_USER, ACTION_ERROR, ACTION_RESET_INPUT_PROFILE } from "../Actions/UserActions";

const token = localStorage.getItem('token');
// console.log('storageUser', token)
let decodedJwt = false
if (token) {
    decodedJwt = jwt_decode(token);
    // console.log(decodedJwt);
}
// console.log('storageUser', user)

export const initialState = {
    email: decodedJwt ? decodedJwt.email : '',
    password: '',
    confirmPassword: '',
    isLogged: decodedJwt && true,
    token: decodedJwt ? token : null,
    firstName: decodedJwt ? decodedJwt.firstname : '',
    lastName: decodedJwt ? decodedJwt.lastname : '',
    role: decodedJwt ? decodedJwt.role : 'visiteur',
    userId: decodedJwt ? decodedJwt.id : '',
    isSucceed: false,
    isErrored: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            // console.log('je suis dans CHANGE_INPUT_VALUE');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case ACTION_ERROR:
            // console.log('je suis dans CHANGE_INPUT_VALUE');
            return {
                ...state,
                isSucceed: false,
                isErrored: true,
                password: '',
                confirmPassword: '',
            }
        case ACTION_RESET_INPUT_PROFILE:
            // console.log('je suis dans CHANGE_INPUT_VALUE');
            return {
                ...state,
                isSucceed: false,
                isErrored: false,
                password: '',
                confirmPassword: '',
            }
        case SAVE_USER:
            // console.log('je suis dans SAVE_USER');
            return {
                ...state,
                // on est connecté donc on sauvegarde le pseudo, et on met isLogged=true
                isLogged: true,
                password: '',
                confirmPassword: '',
                token: action.payload.token,
                firstName: action.payload.decodedJwt.firstname,
                lastName: action.payload.decodedJwt.lastname,
                role: action.payload.decodedJwt.role,
                userId: action.payload.decodedJwt.id,
                isSucceed: true,
                isErrored: false,
            };
        case LOGOUT:
            // console.log('je suis dans LOGOUT');
            return {
                ...state,
                email: '',
                password: '',
                confirmPassword: '',
                isLogged: false,
                token: null,
                firstName: '',
                lastName: '',
                role: 'visiteur',
                userId: ''
            };

        default:
            return state;
    }
};


export default reducer;