import { useAppDispatch, useAppSelector } from '../../../app/hooks'

import { setSurname, setName, setMiddleName } from '../../../app/slices/nameSlice'

import { NameInputInterface } from '../models/interfaces'

export const useInputs = (): NameInputInterface[] => {
    const dispatch = useAppDispatch()

    const { surname, name, middleName } = useAppSelector(state => state.name)

    const surnameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSurname(event.target.value))
    }

    const nameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(event.target.value))
    }

    const middleNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setMiddleName(event.target.value))
    }

    const inputs: NameInputInterface[] = [
        {
            id: 0,
            placeholder: 'Введите фамилию',
            value: surname,
            onFunction: surnameOnChange,
        },
        {
            id: 1,
            placeholder: 'Введите имя',
            value: name,
            onFunction: nameOnChange,
        },
        {
            id: 2,
            placeholder: 'Введите отчество',
            value: middleName,
            onFunction: middleNameOnChange,
        },
    ]

    return inputs
}