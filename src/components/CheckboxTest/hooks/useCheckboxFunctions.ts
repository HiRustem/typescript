import { AddValues, IsCheckedValues, RemoveValues } from '../models/interfaces'

import { useAppDispatch, useAppSelector } from '../../../app/hooks'
import { addAnswer, removeAnswer } from '../../../app/slices/testSlice'

export const useCheckboxFunctions = () => {
    const dispatch = useAppDispatch()

    const { answers } = useAppSelector(state => state.test)

    const add = ({ questionId, variantId, questionQuantity }: AddValues) => {
        dispatch(addAnswer({
            questionId,
            variantId,
            questionQuantity
        }))
    }

    const remove = ({ questionId, variantId }: RemoveValues) => {
        dispatch(removeAnswer({
            questionId,
            variantId,
        }))
    }

    const useChecked = ({ questionId, variantId }: IsCheckedValues) => {
        return answers[questionId] && answers[questionId].includes(variantId) ? false : true
    }

    const functions = {
        add,
        remove,
        useChecked,
    }

    return functions

}