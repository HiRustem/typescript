import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

interface NameState {
    surname: string
    name: string
    middleName: string
}

const initialState: NameState = {
    surname: '',
    name: '',
    middleName: '',
}

export const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        setSurname: (state, action: PayloadAction<string>) => {
            state.surname = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setMiddleName: (state, action: PayloadAction<string>) => {
            state.middleName = action.payload
        },
    }
})

export const { setSurname, setName, setMiddleName } = nameSlice.actions

export default nameSlice.reducer