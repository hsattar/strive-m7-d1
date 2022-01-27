import axios from 'axios'

export const ACTIONS = {
    ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES',
    REMOVE_FROM_FAVOURITES: 'REMOVE_FROM_FAVOURITES',
    UPDATE_SEARCH_QUERY: 'UPDATE_SEARCH_QUERY',
    UPDATE_CATEGORY: 'UPDATE_CATEGORY',
    ADD_DATA_FROM_API: 'ADD_DATA_FROM_API',
    START_LOADING: 'START_LOADING'  
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

export const startLoadingAction = () => ({
    type: ACTIONS.START_LOADING
})

export const fetchDataAction = params => async dispatch => {
    const { REACT_APP_BASE_URL: BASE_URL } = process.env
    const controller = new AbortController()
    try {
        const response = await axios.get(`${BASE_URL}?${params}`, {
            signal: controller.signal
        })
        dispatch({
            type: ACTIONS.ADD_DATA_FROM_API,
            payload: {
                data: response.data.data,
                loading: false,
                error: false
            }
        })
    } catch (error) {
        if (error.message === 'canceled') return
        dispatch({
            type: ACTIONS.ADD_DATA_FROM_API,
            payload: {
                data: [],
                loading: false,
                error: true
            }
        })
    }
}