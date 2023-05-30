import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

import { CheckboxProps } from './models/interfaces'

import { useCheckboxFunctions } from './hooks/useCheckboxFunctions'

const Checkbox = ({ variant, question }: CheckboxProps) => {
    const { questionId, questionQuantity } = question
    const { variantId, variantText } = variant

    const { add, remove, useChecked } = useCheckboxFunctions()

    return (
        <li className='checkboxQuestionListElement'>
            {
                useChecked({ questionId, variantId }) ?
                
                    <button className='checkbox' onClick={() => add({ questionId, variantId, questionQuantity })}>
                        <MdCheckBoxOutlineBlank className='checkboxIcon' />
                    </button>

                :
                
                    <button className='checkbox' onClick={() => remove({ questionId, variantId })}>
                        <MdCheckBox className='checkboxIcon' />
                    </button>
            }

            <p className='checkboxText'>{ variantText }</p>
        </li>
    )
}

export default Checkbox