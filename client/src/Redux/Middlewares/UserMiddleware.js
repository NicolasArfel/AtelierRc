import jwt_decode from "jwt-decode";

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
                const { accessToken } = await requestLogin(email, password);
                // console.log('response', { accessToken });
                const decodedJwt = jwt_decode(accessToken);
                // console.log('decodedJwt', decodedJwt);
                localStorage.setItem('user', JSON.stringify(decodedJwt))
                localStorage.setItem('token', JSON.stringify(accessToken))
                store.dispatch(actionSaveUser(decodedJwt, accessToken))

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
            localStorage.removeItem('user');
            removeAuthorization();
            next(action);
            break;
        }

        default:
            next(action);
    }
};

export default UserMiddleware;