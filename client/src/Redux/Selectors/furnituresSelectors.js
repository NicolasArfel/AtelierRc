export function findFurniture(FurnituresReducer, searchedSlug) {
    const furniture = FurnituresReducer.find((findedFurniture) => {
        return findedFurniture.slug === searchedSlug;
    })
    return furniture;
}

export function filteredFurnitures(furnitures, id) {
    const newFurnituresList = furnitures.filter((furniture) => {
        return furniture.furniture_id !== id;
    })
    // console.log('newFurnituresList', newFurnituresList )
    return newFurnituresList;
}