import { AnyAction } from "redux"
import { ACTIONS } from "../actions"
import { initialState } from "../store"

const favouriteReducer = (state = initialState.favourites, action: AnyAction) => {
    switch(action.type) {
        case ACTIONS.ADD_TO_FAVOURITES: return {
            ...state,
            jobs: [...state.jobs, action.payload]
        }
        case ACTIONS.REMOVE_FROM_FAVOURITES: return {
            ...state,
            jobs: state.jobs.filter(job => job._id !== action.payload)
        }  
        default: return state
    }
}

export default favouriteReducer