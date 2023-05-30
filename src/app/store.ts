import { configureStore } from '@reduxjs/toolkit'

import nameSlice from './slices/nameSlice'

import testSlice from './slices/testSlice'


export const store = configureStore({
    reducer: {
        name: nameSlice,
        test: testSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch