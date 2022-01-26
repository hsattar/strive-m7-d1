export const ACTIONS = {
    ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES',
    REMOVE_FROM_FAVOURITES: 'REMOVE_FROM_FAVOURITES'
}

export const addToFavouritesAction = job => ({
    type: ACTIONS.ADD_TO_FAVOURITES,
    payload: job
})

export const removeFromFavouritesAction = jobId => ({
    type: ACTIONS.REMOVE_FROM_FAVOURITES,
    payload: jobId
})