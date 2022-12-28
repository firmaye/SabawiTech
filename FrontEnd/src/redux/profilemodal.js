import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openedmodal: "j"
}

export const profileModalSlice = createSlice({
    name: 'profileModal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            console.log(action.payload)
            state.openedmodal = action.payload
        },
        // increment: (state) => {

        // },
        // decrement: (state) => {
        //   state.value -= 1
        // },
        // incrementByAmount: (state, action) => {
        //   state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer function
export const { setModal } = profileModalSlice.actions

export default profileModalSlice.reducer