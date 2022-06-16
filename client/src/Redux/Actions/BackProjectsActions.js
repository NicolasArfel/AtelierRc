export const CHANGE_BACK_INPUT_VALUE = 'CHANGE_BACK_INPUT_VALUE';

export const SUBMIT_PROJECT = 'SUBMIT_PROJECT';


export const changeBackInputValue = (value, name) => ({
    type: CHANGE_BACK_INPUT_VALUE,
    payload: {
        value,
        name
    }
})

export const actionSubmitProject = () => ({
    type : SUBMIT_PROJECT,
})