import axios from 'axios'
import { ThunkDispatch } from 'redux-thunk'
import { IJob } from '../../types/ReduxStore'

export const ACTIONS = {
    ADD_TO_FAVOURITES: 'ADD_TO_FAVOURITES',
    REMOVE_FROM_FAVOURITES: 'REMOVE_FROM_FAVOURITES',
    UPDATE_SEARCH_QUERY: 'UPDATE_SEARCH_QUERY',
    UPDATE_CATEGORY: 'UPDATE_CATEGORY',
    ADD_DATA_FROM_API: 'ADD_DATA_FROM_API',
    START_LOADING: 'START_LOADING'  
}

export const addToFavouritesAction = (job: IJob) => ({
    type: ACTIONS.ADD_TO_FAVOURITES,
    payload: job
})

export const removeFromFavouritesAction = (jobId: string) => ({
    type: ACTIONS.REMOVE_FROM_FAVOURITES,
    payload: jobId
})

export const updateSearchQueryAction = (query: string) => ({
    type: ACTIONS.UPDATE_SEARCH_QUERY,
    payload: query
})

export const updateCategoryAction = (categories: string[]) => ({
    type: ACTIONS.UPDATE_CATEGORY,
    payload: categories
})

export const startLoadingAction = () => ({
    type: ACTIONS.START_LOADING
})
// FIXME:
export const fetchDataAction = (params: string) => async (dispatch: ThunkDispatch<any, any, any>) => {
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
                error: false,
                moreData: response.data.data.length === 24
            }
        })
        // FIXME: 
    } catch (error: any) {
        if (error.message === 'canceled') return
        console.log(error)
        dispatch({
            type: ACTIONS.ADD_DATA_FROM_API,
            payload: {
                data: [],
                loading: false,
                error: true,
                moreData: false
            }
        })
    }
}