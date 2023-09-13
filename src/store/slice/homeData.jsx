import { createSlice } from '@reduxjs/toolkit'

const homeData = createSlice({
    name: 'home',
    initialState: [],
    reducers: {
        loadData(state, action) {
            state.push(action.payload)
        }
    },
}
)

export const { loadData } = homeData.actions

export default homeData
