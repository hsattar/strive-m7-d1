import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import favouriteReducer from "./reducers/favouritesReducer"
import jobReducer from "./reducers/jobReducer"
import thunk from 'redux-thunk'

const composeSafely = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
    jobs: {
        searchQuery: '',
        categories: [],
        data: [],
        fetchLoading: false,
        fetchError: false
    },
    favourites: {
        jobs: []
    }
}

const rootReducer = combineReducers({
    jobs: jobReducer,
    favourites: favouriteReducer
})

const storeConfig = createStore(rootReducer, initialState, composeSafely(applyMiddleware(thunk)))

export default storeConfig