import { ACTIONS } from "../actions"
import { initialState } from "../store"

const jobReducer = (state = initialState.jobs, action) => {
    switch(action.type) {
        case ACTIONS.UPDATE_SEARCH_QUERY: return {
            ...state,
            searchQuery: action.payload
        } 
        case ACTIONS.UPDATE_CATEGORY: return {
            ...state,
            categories: action.payload
        }
        case ACTIONS.START_LOADING: return {
            ...state,
            fetchLoading: true
        }
        case ACTIONS.ADD_JOBS_FROM_API: return {
            ...state,
            data: action.payload.data,
            fetchLoading: action.payload.loading,
            fetchErrors: action.payload.error
        }
        default: return state
    }
}

export default jobReducer