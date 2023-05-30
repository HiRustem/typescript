import { AnswersObject } from '../../../app/slices/models/interfaces'

export interface CheckboxVariant {
    variantId: number
    variantText: string
}

export interface Question {
    questionId: number
    questionText: string
    questionQuantity: number
    variants: CheckboxVariant[]
}

export interface TestProps {
    questions: Question[]
}

export interface CheckboxQuestionProps {
    question: Question
}

export interface CheckboxProps {
    variant: CheckboxVariant
    question: Question
}

export interface IsCheckedValues {
    questionId: number
    variantId: number
}

export interface AddValues {
    questionId: number
    variantId: number
    questionQuantity: number
}

export interface RemoveValues {
    questionId: number
    variantId: number
}