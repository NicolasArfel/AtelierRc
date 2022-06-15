import { actionSaveUser, LOGOUT, SAVE_USER, SUBMIT_LOGIN } from "../Actions/UserActions";
import { requestLogin, saveAuthorization, removeAuthorization } from "../Requests/Requests";

const UserMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case SUBMIT_LOGIN: {
            console.log('je suis  dans SUBMIT_LOGIN');
            const responseUserReducer = store.getState();
            // console.log(responseUserReducer);
            const { email, password } = responseUserReducer.UserReducer;
            // console.log({email, password});

            try {
                const { user, accessToken } = await requestLogin(email, password);
                console.log('response', { user, accessToken });
                store.dispatch(actionSaveUser(user, accessToken))

            } catch (err) {
                console.error(err);
            }
            break;
        }
        case SAVE_USER: {
            console.log('je suis dans SAVE_USER middleware');
            saveAuthorization(action.payload.token);

            next(action);
            break;
        }
        case LOGOUT: {
            console.log('je suis dans LOGOUT middleware');
            // on supprime le token de axios
            removeAuthorization();
            next(action);
            break;
        }

        default:
            next(action);
    }
};

export default UserMiddleware;