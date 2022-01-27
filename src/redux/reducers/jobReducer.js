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
        default: return state
    }
}

export default jobReducer