import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

import { AddValues, RemoveValues } from '../../components/CheckboxTest/models/interfaces'

import { AnswersObject } from './models/interfaces'

interface TestState {
    answers: AnswersObject
    result: number[]
    resultString: string
}

const initialState: TestState = {
    answers: {},
    result: [0, 0, 0, 0, 0],
    resultString: '',
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        addAnswer: (state, action: PayloadAction<AddValues>) => {
            const { questionId, variantId, questionQuantity } = action.payload

            if (state.answers[questionId] === undefined) {
                const newObject = {...state.answers}

                newObject[questionId] = []

                state.answers = newObject
            }

            if (state.answers[questionId].length <= questionQuantity - 1) {
                state.answers[questionId].push(variantId)
            } else {
                alert('Недопустимое количество вариантов')
            }
        },
        removeAnswer: (state, action: PayloadAction<RemoveValues>) => {
            const { questionId, variantId } = action.payload

            const answers = state.answers
            const index: number = state.answers[questionId].indexOf(variantId)

            answers[questionId].splice(index, 1)

            state.answers = answers
        },
        setResultString: (state, action: PayloadAction<string>) => {
            state.resultString = action.payload
        },
    }
})

export const { addAnswer, removeAnswer, setResultString } = testSlice.actions

export default testSlice.reducer