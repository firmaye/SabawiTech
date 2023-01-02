import { configureStore } from '@reduxjs/toolkit'
import profileModalReducer from './profilemodal'
import filterReducer from "./filter"
export const store = configureStore({
    reducer: {
        filter: filterReducer,
        profileModal: profileModalReducer
    },
})