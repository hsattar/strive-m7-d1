import { createStore } from "redux"
import mainReducer from "./reducers"

export const initialState = {
    jobs: {
        searchQuery: '',
        favourites: []
    }
}

const storeConfig = createStore(mainReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default storeConfig