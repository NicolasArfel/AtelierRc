import { CHANGE_INPUT_VALUE, ERROR_SENDING_EMAIL, SUCCED_SENDING_EMAIL } from "../Actions/ContactActions";

export const initialState = {
    lastname: '',
    firstname: '',
    from: '',
    subject: '',
    text: '',
    error: false,
    succed: false
};

const ContactReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            // console.log('je suis dans CHANGE_INPUT_VALUE de ContactReducer');
            return {
                ...state,
                [action.payload.name]: action.payload.value,
            }
        case ERROR_SENDING_EMAIL:
            return {
                ...state,
                error: true,
                succed: false,
            }
        case SUCCED_SENDING_EMAIL:
            return {
                ...state,
                error: false,
                succed: true,
                lastname: '',
                firstname: '',
                from: '',
                subject: '',
                text: '',
            }
        default:
            return state;
    }
};

export default ContactReducer;