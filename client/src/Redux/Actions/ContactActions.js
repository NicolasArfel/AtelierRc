export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ACTION_SUBMIT_VALUE = 'ACTION_SUBMIT_VALUE';
export const ERROR_SENDING_EMAIL = 'ERROR_SENDING_EMAIL';
export const SUCCED_SENDING_EMAIL = 'SUCCED_SENDING_EMAIL';

// We create a type of action allowing us to recognize it to trigger the requests axios
export const changeInputValue = (value, name) => ({
    type: CHANGE_INPUT_VALUE,
    payload: {
        value,
        name
    }
})

export const actionSubmitContact = () => ({
    type: ACTION_SUBMIT_VALUE,
})

export const ErrorSendingEmail = () => ({
    type: ERROR_SENDING_EMAIL
})

export const SuccedSendingEmail = () => ({
    type: SUCCED_SENDING_EMAIL
})