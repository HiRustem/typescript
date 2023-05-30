import { useAppSelector } from '../../../../../app/hooks'
import { FormInput } from '../../../../../components/SendForm/models/interfaces'

export const useFormValues = (): FormInput[] => {

    const { surname, name, middleName } = useAppSelector(state => state.name)

    const { resultString } = useAppSelector(state => state.test)

    const inputs = [
        {
            id: 0,
            name: 'name',
            value: `${surname} ${name} ${middleName}`
        },
        {
            id: 1,
            name: 'result',
            value: resultString,
        },
    ]

    return inputs
}