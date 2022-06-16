export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const ACTION_SUBMIT_VALUE = 'ACTION_SUBMIT_VALUE';

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