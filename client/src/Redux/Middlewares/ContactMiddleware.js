import { ACTION_SUBMIT_VALUE } from "../Actions/ContactActions";

const ContactMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case ACTION_SUBMIT_VALUE: {
            console.log('je suis  dans ACTION_SUBMIT_VALUE');

            // I retrieve my info stored in ContactReducer and break it down
            const responseContactReducer = store.getState();
            // console.log('responseContactReducer', responseContactReducer);
            const { firstname, lastname, email, subject, text } = responseContactReducer.ContactReducer;
            console.log('returned value input contact', { firstname, lastname, email, subject, text });

            try {

                

            } catch (err) {
                console.error(err);
            }

            break;
        }
        default:
            next(action);
    }
};

export default ContactMiddleware;