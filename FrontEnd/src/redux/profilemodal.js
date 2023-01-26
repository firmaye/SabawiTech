import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    openedmodal: ""
}

export const profileModalSlice = createSlice({
    name: 'profileModal',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.openedmodal = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setModal } = profileModalSlice.actions

export default profileModalSlice.reducer