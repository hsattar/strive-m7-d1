export const ACTIONS = {
    ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES',
    REMOVE_FROM_FAVOURITES: 'REMOVE_FROM_FAVOURITES',
    UPDATE_SEARCH_QUERY: 'UPDATE_SEARCH_QUERY',
    UPDATE_CATEGORY: 'UPDATE_CATEGORY' 
}

export const addToFavouritesAction = job => ({
    type: ACTIONS.ADD_TO_FAVOURITES,
    payload: job
})

export const removeFromFavouritesAction = jobId => ({
    type: ACTIONS.REMOVE_FROM_FAVOURITES,
    payload: jobId
})

export const updateSearchQueryAction = query => ({
    type: ACTIONS.UPDATE_SEARCH_QUERY,
    payload: query
})

export const updateCategoryAction = categories => ({
    type: ACTIONS.UPDATE_CATEGORY,
    payload: categories
})