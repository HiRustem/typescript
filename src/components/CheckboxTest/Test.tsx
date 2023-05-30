import CheckboxQuestion from './CheckboxQuestion'
import { TestProps } from './models/interfaces'

const Test = ({ questions }: TestProps) => {
    return (
        <div className='mainContainer test'>
            <div className='questions'>
                {
                    questions.map((question) => (
                        <CheckboxQuestion key={question.questionId} question={question} />
                    ))
                }
            </div>
        </div>
    )
}

export default Test