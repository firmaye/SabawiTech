import { configureStore } from '@reduxjs/toolkit'
import profileModalReducer from './profilemodal'

export const store = configureStore({
    reducer: {

        profileModal: profileModalReducer
    },
})