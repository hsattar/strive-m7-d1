import { ACTIONS } from "../actions"
import { initialState } from "../store"

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTIONS.ADD_TO_FAVOURITES:
            return {
                ...state,
                jobs: {
                    ...state.jobs,
                    favourites: [...state.jobs.favourites, action.payload]
                }
            } 
        default: 
            return state
    }
}

export default mainReducer