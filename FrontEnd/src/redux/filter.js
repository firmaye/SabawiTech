import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filterState: { location: [], status: [], type: [] }
}

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState, reducers: {
        setFilterLocation: (state, action) => {
            console.log("state.filterState.location")
            console.log(state.filterState.location)
            state.filterState.location = [...state.filterState.location, action.payload]
            console.log(state.filterState.location)
        },
        removeFilterLocation: (state, action) => {
            const index = state.filterState.location.indexOf(action.payload);
            if (index > -1) { // only splice array when item is found
                state.filterState.location.splice(index, 1); // 2nd parameter means remove one item only
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFilterLocation, removeFilterLocation } = filterSlice.actions

export default filterSlice.reducer