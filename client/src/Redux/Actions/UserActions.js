export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';

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
