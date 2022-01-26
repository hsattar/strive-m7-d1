export const ACTIONS = {
    ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES'
}

export const addToFavouritesAction = job => ({
    type: ACTIONS.ADD_TO_FAVOURITES,
    payload: job
})