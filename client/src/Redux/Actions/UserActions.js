export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const LOGOUT = 'LOGOUT';
export const SUBMIT_PROFIL = 'SUBMIT_PROFIL'

export const actionSubmitProfil = (id) => ({
    type: SUBMIT_PROFIL,
    payload: {
        id
    }
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

export const actionSaveUser = (decodedJwt, accessToken) => ({
    type: SAVE_USER,
    payload: {
        decodedJwt,
        accessToken,
    },
});

export const actionLogout = () => ({ type: LOGOUT });
