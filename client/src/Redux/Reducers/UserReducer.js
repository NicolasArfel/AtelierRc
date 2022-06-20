import { CHANGE_INPUT_VALUE, LOGOUT, SAVE_USER } from "../Actions/UserActions";

const user = JSON.parse(localStorage.getItem('user'));
const token = JSON.parse(localStorage.getItem('token'));

// console.log('storageUser', user)

export const initialState = {
    email: user ? user.email : '',
    password: '',
    isLogged: user && true,
    token: user ? token : null,
    firstName: user ? user.firstname : '',
    lastName: user ? user.lastname : '',
    role: user ? user.role : 'visiteur',
    userId: user ? user.id : '',
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
                firstName: action.payload.decodedJwt.firstname,
                lastName: action.payload.decodedJwt.lastname,
                role: action.payload.decodedJwt.role
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