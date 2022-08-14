
import jwt_decode from "jwt-decode";

import { actionSaveUser, LOGOUT, SUBMIT_LOGIN, SUBMIT_PROFIL, actionError } from "../Actions/UserActions";
import { updateProfile } from "../Requests/ProfileRequests";
import { requestLogin } from "../Requests/Requests";

const UserMiddleware = (store) => (next) => async (action) => {

    const getTokenOnReducer = store.getState()
    // console.log('getTokenOnReducer', getTokenOnReducer);
    const token = getTokenOnReducer.UserReducer.token

    switch (action.type) {
        case SUBMIT_PROFIL: {
            // console.log('je suis dans SUBMIT_PROFIL');
            const responseUserReducer = store.getState();

            const { firstName, lastName, email, password, token } = responseUserReducer.UserReducer;
            // console.log('nouveau contenu', { firstName, lastName, email, password,token });

            const decodedJwt = jwt_decode(token);
            // console.log('tokendec', decodedJwt)
            const userId = decodedJwt.id
            // console.log('usermiddle',userId)

            try {
                const response = await updateProfile(userId, firstName, lastName, email, password, token)
                // console.log('toto',userId, firstName,lastName,email,password) 
                // console.log('accessToken', response.data.accessToken)

                const accessToken = response.data.accessToken;

                const decodedJwt = jwt_decode(accessToken);
                // console.log('decodedJwt', decodedJwt);
                localStorage.setItem('token', accessToken)

                store.dispatch(actionSaveUser(decodedJwt, accessToken))

            } catch (err) {
                console.error(err)
            }

            break;
        }

        case SUBMIT_LOGIN: {
            console.log('je suis  dans SUBMIT_LOGIN');
            const responseUserReducer = store.getState();
            console.log(responseUserReducer);
            const { email, password } = responseUserReducer.UserReducer;
            console.log({email, password});

            try {
                const response = await requestLogin(email, password);
                // console.log('response1',response);
                if(!response) {
                    store.dispatch(actionError());
                } else {
                    const decodedJwt = jwt_decode(response.data.accessToken);
                    // console.log('decodedJwt', decodedJwt);
                    localStorage.setItem('token', JSON.stringify(response.data.accessToken))
                    localStorage.setItem('token', response.data.accessToken)
                    store.dispatch(actionSaveUser(decodedJwt, response.data.accessToken))
                }

            } catch (err) {
                console.error(err);
                console.log('response2',err);
            }
            return;
        }
        case LOGOUT: {
            // console.log('je suis dans LOGOUT middleware');
            // on supprime le token de axios
            localStorage.removeItem('token');
            next(action);
            break;
        }

        default:
            next(action);
    }
};

export default UserMiddleware;