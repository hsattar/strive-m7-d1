import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import favouriteReducer from "./reducers/favouritesReducer"
import jobReducer from "./reducers/jobReducer"
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { encryptTransform } from 'redux-persist-transform-encrypt'
import { IReduxStore } from "../types/ReduxStore"

const composeSafely = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState: IReduxStore = {
    jobs: {
        searchQuery: '',
        categories: [],
        data: [],
        fetchLoading: false,
        fetchError: false,
        moreDataToFetch: false
    },
    favourites: {
        jobs: []
    }
}

const persistConfig: any = {
    key: 'root',
    storage,
    transforms: [
        // FIXME: ???
        encryptTransform({
            secretKey: process.env.REACT_APP_SECRET_KEY as string,
            onError: err => console.log(err)
        })
    ]
  }

const rootReducer = combineReducers({
    jobs: jobReducer,
    favourites: favouriteReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const storeConfig = createStore(persistedReducer, initialState, composeSafely(applyMiddleware(thunk)))

export const persistor = persistStore(storeConfig)