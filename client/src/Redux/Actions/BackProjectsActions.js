export const CHANGE_BACK_INPUT_VALUE = 'CHANGE_BACK_INPUT_VALUE';

export const POST_PROJECT = 'POST_PROJECT';

export const DELETE_PROJECT = 'DELETE_PROJECT';

export const changeBackInputValue = (value, name) => ({
    type: CHANGE_BACK_INPUT_VALUE,
    payload: {
        value,
        name
    }
})

export const actionPostProject = () => ({
    type : POST_PROJECT,
})

export const actionDeleteProject = () => ({
    type : DELETE_PROJECT,
})