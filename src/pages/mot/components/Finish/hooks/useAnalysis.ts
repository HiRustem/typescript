import { useAppSelector, useAppDispatch } from '../../../../../app/hooks'
import { setResultString } from '../../../../../app/slices/testSlice'

import { keysArray } from '../../../data/keys'

import { AnswersObject } from '../../../../../app/slices/models/interfaces'


const analysis = (answers: AnswersObject) => {

    let result = [0, 0, 0, 0, 0]

    for (let objectKey in Object.keys(answers)) {

        let selectedAnswers = answers[objectKey]
        let keys = keysArray[+objectKey]
            
        for (let a = 0; a < selectedAnswers.length; a++) {
            let answer = selectedAnswers[a]

            for (let k = 0; k < keys.length; k++) {
                if (keys[k].includes(answer)) {
                    result[k] = result[k] + 1
                }
            }

        }

    }

    return result
}

const createResultString = (result: number[]) => {
    const names = ['Инструментальный тип', 'Профессиональный тип', 'Патриотический тип', 'Хозяйский тип', 'Люмпензированный тип']

    let resultString = '<table style="border-collapse: collapse;"><tbody>'

    for (let i = 0; i < result.length; i++) {
        resultString += `<tr><td style="border: 2px solid black; padding: 4px;">${names[i]}</td><td style="border: 2px solid black; padding: 4px; text-align: end;">${result[i]}</td></tr>`
    }

    resultString += '</tbody></table>'

    return resultString
}


export const useAnalysis = () => {
    const { surname, name, middleName } = useAppSelector(state => state.name)
    const { answers } = useAppSelector(state => state.test)

    const dispatch = useAppDispatch()

    return (): boolean => {

        if (Object.keys(answers).length < keysArray.length) {
            alert('Ответьте на все вопросы')
            return false
        }

        if (surname === '' || name === '' || middleName === '') {
            alert('Заполните ФИО')
            return false
        }

        const result = analysis(answers)
        const resultString = createResultString(result)
    
        dispatch(setResultString(resultString))
        console.log(result)
        console.log(resultString)
        return true
    }
}