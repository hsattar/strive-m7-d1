import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import favouriteReducer from "./reducers/favouritesReducer"
import jobReducer from "./reducers/jobReducer"

export const initialState = {
    jobs: {
        searchQuery: '',
        categories: [],
    },
    favourites: {
        jobs: []
    }
}

const rootReducer = combineReducers({
    jobs: jobReducer,
    favourites: favouriteReducer
})

const storeConfig = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default storeConfig