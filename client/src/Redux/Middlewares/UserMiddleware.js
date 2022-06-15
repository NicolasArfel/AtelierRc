import { actionSaveUser, SAVE_USER, SUBMIT_LOGIN } from "../Actions/UserActions";
import { requestLogin, saveAuthorization } from "../Requests/Requests";

const UserMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
        case SUBMIT_LOGIN: {
            console.log('je suis  dans submit_login');
            const responseUserReducer = store.getState();
            // console.log(responseUserReducer);
            const { email, password } = responseUserReducer.UserReducer;
            // console.log({email, password});
            
            try {
                const {user, accessToken} = await requestLogin(email, password);
                console.log('response', {user, accessToken});
                store.dispatch(actionSaveUser(user, accessToken))
            } catch (err) {
                console.error(err);
            }
            break;
        }
        case SAVE_USER: {
            console.log('je suis dans saveUser middleware');
            saveAuthorization(action.payload.token);

            next(action);
            break;
        }
            

        default:
            next(action);
    }
};

export default UserMiddleware;