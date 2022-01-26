import { ACTIONS } from "../actions"
import { initialState } from "../store"

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TO_FAVOURITES: return {
            ...state,
            jobs: {
                ...state.jobs,
                favourites: [...state.jobs.favourites, action.payload]
            }
        }
        case ACTIONS.REMOVE_FROM_FAVOURITES: return {
            ...state,
            jobs: {
                ...state.jobs,
                favourites: state.jobs.favourites.filter(job => job._id !== action.payload)
            }
        } 
        case ACTIONS.UPDATE_SEARCH_QUERY: return {
            ...state,
            jobs: {
                ...state.jobs,
                searchQuery: action.payload
            }
        } 
        case ACTIONS.UPDATE_CATEGORY: return {
            ...state,
            jobs: {
                ...state.jobs,
                categories: action.payload
            }
        } 
        default: return state
    }
}

export default mainReducer