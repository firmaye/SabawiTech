import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    filterState: { location: [], status: [], type: [] }
}

export const filterSlice = createSlice({
    name: 'filterSlice',
    initialState, reducers: {
        setFilterLocation: (state, action) => {
            state.filterState.location = [...state.filterState.location, action.payload]
        },
        removeFilterLocation: (state, action) => {
            const index = state.filterState.location.indexOf(action.payload);
            if (index > -1) { // only splice array when item is found
                state.filterState.location.splice(index, 1); // 2nd parameter means remove one item only
            }
        },
        setFilterStatus: (state, action) => {
            state.filterState.status = [...state.filterState.status, action.payload]

        },
        removeFilterStatus: (state, action) => {
            const index = state.filterState.status.indexOf(action.payload);
            if (index > -1) { // only splice array when item is found
                state.filterState.status.splice(index, 1); // 2nd parameter means remove one item only
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setFilterLocation, removeFilterLocation, setFilterStatus, removeFilterStatus } = filterSlice.actions

export default filterSlice.reducer