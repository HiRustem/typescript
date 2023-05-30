import { SendFormProps } from './models/interfaces'

import { useFormOpen } from './hooks/useFormOpen'

import Form from './Form'

const SendForm = ({ formValues, analysis }: SendFormProps) => {

    const { isOpen, open, close } = useFormOpen({ analysis })

    return (
        <div className='send'>
            <button className={`${isOpen ? 'hiddenComponent' : ''} btn`} onClick={open}>Отправить</button>

            <div className={`${isOpen ? 'sendForm' : 'hiddenComponent'}`}>
                <Form formValues={formValues} close={close} />
            </div>
        </div>
    )
}

export default SendForm