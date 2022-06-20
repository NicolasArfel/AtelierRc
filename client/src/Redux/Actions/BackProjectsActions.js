export const CHANGE_BACK_INPUT_VALUE = 'CHANGE_BACK_INPUT_VALUE';
export const POST_PROJECT = 'POST_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DISPATCH_STATUS = 'DISPATCH_STATUS';
export const ACTION_AXIOS_LABEL = 'ACTION_AXIOS_LABEL';
export const ACTION_SUCCEED_PROJECT = 'ACTION_SUCCEED_PROJECT'
export const ACTION_ERROR_PROJECT = 'ACTION_ERROR_PROJECT'

export const changeBackInputValue = (value, name) => ({
    type: CHANGE_BACK_INPUT_VALUE,
    payload: {
        value,
        name
    }
})

export const actionPostProject = (formData, config) => ({
    type: POST_PROJECT,
    payload: {
        formData,
        config
    }
})

export const actionDeleteProject = (id) => ({
    type: DELETE_PROJECT,
    payload: {
        id,
    }
})

export const actionDispatchStatus = () => ({
    type: DISPATCH_STATUS
})


export const actionAxiosLabel = (responseLabel) => ({
    type: ACTION_AXIOS_LABEL,
    payload: {
        responseLabel
    }
})

export const actionAxiosSucceedProjects = () => ({
    type: ACTION_SUCCEED_PROJECT,
})

export const actionAxiosErrorProjects = () => ({
    type: ACTION_ERROR_PROJECT,
})
