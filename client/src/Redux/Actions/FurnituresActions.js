export const AXIOS_FURNITURES = 'AXIOS_FURNITURES';

export const actionAxiosFurnitures = () => ({
    type: AXIOS_FURNITURES
})

export const DISPATCH_FURNITURES = 'DISPATCH_FURNITURES';

export const actionDispatchFurnitures = (furnitures) => ({
    type: DISPATCH_FURNITURES,
    payload: {
        furnitures
    }
})  

