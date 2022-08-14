export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const LOGOUT = 'LOGOUT';
export const SUBMIT_PROFIL = 'SUBMIT_PROFIL';
export const ACTION_ERROR = 'ACTION_ERROR';
export const ACTION_RESET_INPUT_PROFILE = 'ACTION_RESET_INPUT_PROFILE';

export const actionSubmitProfil = (id) => ({
    type: SUBMIT_PROFIL,
    payload: {
        id
    }
})

export const actionError = () => ({
    type: ACTION_ERROR,
})

export const changeInputValue = (value, name) => ({
    type: CHANGE_INPUT_VALUE,
    payload: {
        value,
        name
    }
})

export const actionSubmitLogin = () => ({
    type: SUBMIT_LOGIN,
})

export const actionResetInputProfile = () => ({
    type: ACTION_RESET_INPUT_PROFILE,
})

export const actionSaveUser = (decodedJwt, token) => ({
    type: SAVE_USER,
    payload: {
        decodedJwt,
        token,
    },
});

export const actionLogout = () => ({ type: LOGOUT });
