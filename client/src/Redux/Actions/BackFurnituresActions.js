export const DELETE_FURNITURE = 'DELETE_FURNITURE';
export const CHANGE_BACK_INPUT_VALUE = 'CHANGE_BACK_INPUT_VALUE';
export const POST_FURNITURE = 'POST_FURNITURE';
export const UPDATE_FURNITURE = 'UPDATE_FURNITURE';
export const POST_MULTY_PHOTO_FURNITURE = 'POST_MULTY_PHOTO_FURNITURE';
export const ACTION_DELETE_PHOTO_FURNITURE = 'ACTION_DELETE_PHOTO_FURNITURE';
export const POST_COVER_PHOTO_FURNITURE = 'POST_COVER_PHOTO_FURNITURE';
export const ACTION_DISPATCH_FURNITURE_FORM_AUTO_COMPLET = 'ACTION_DISPATCH_FURNITURE_FORM_AUTO_COMPLET';
export const ACTION_REFRESH_FURNITURES_STATE = 'ACTION_REFRESH_FURNITURES_STATE';

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

export const actionUpdateFurnitures = (furniture_id, conditionLabelValue, availableLabelValue) => ({
    type: UPDATE_FURNITURE,
    payload: {
        furniture_id,
        conditionLabelValue,
        availableLabelValue
    }
})

export const actionDispatchFurnitureFormAutoComplet = (furniture) => ({
    type: ACTION_DISPATCH_FURNITURE_FORM_AUTO_COMPLET,
    payload: {
        furniture
    }
})

export const actionPostMultyFilePhotoFurniture = (furniture_id, formData, config) => ({
    type: POST_MULTY_PHOTO_FURNITURE,
    payload: {
        furniture_id,
        formData,
        config
    }
})

export const actionDeletePhotoFurniture = (id) => ({
    type: ACTION_DELETE_PHOTO_FURNITURE,
    payload: {
        id
    }
})

export const actionPostCoverPhotoFurniture = (id) => ({
    type: POST_COVER_PHOTO_FURNITURE,
    payload: {
        id
    }
})

export const actionRefreshFurnitureState = () => ({
    type: ACTION_REFRESH_FURNITURES_STATE
})