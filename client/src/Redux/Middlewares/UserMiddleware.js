import { SUBMIT_LOGIN } from "../Actions/UserActions";
import { requestLogin } from "../Requests/Requests";

const UserMiddleware = (store) => (next) => async (action) => {
    switch (action.type) {
       case SUBMIT_LOGIN:
          console.log('je suis  dans submit_login');
           const responseUserReducer = store.getState();
           // console.log(responseUserReducer);
           const {email, password} = responseUserReducer.UserReducer;
           // console.log({email, password});

           try{
                const response = await requestLogin(email, password);                 
                console.log('response', response);
           } catch(err) {
               console.error(err);
           }
           break;

        default:
            next(action);
    }
};

export default UserMiddleware;