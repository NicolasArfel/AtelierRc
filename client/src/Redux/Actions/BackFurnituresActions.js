export const DELETE_FURNITURE = 'DELETE_FURNITURE';
export const CHANGE_BACK_INPUT_VALUE = 'CHANGE_BACK_INPUT_VALUE';
export const POST_FURNITURE = 'POST_FURNITURE';


export const actionDeleteFurniture = (id) => ({
    
    type: DELETE_FURNITURE,
    payload: {
        id,
    },
})

export const changeBackInputValue = (value, name) => ({
    type: CHANGE_BACK_INPUT_VALUE,
    payload: {
        value,
        name
    }
})

export const actionPostFurniture = (formData, config) => ({
    type: POST_FURNITURE,
    payload: {
        formData,
        config
    }
})