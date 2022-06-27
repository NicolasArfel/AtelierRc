export const DELETE_FURNITURE = 'DELETE_FURNITURE';


export const actionDeleteFurniture = (id) => ({
    
    type: DELETE_FURNITURE,
    payload: {
        id,
    },
})
