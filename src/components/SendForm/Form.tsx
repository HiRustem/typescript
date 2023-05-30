import { FormProps } from './models/interfaces'

const Form = ({ formValues, close }: FormProps) => {

    const { form, inputs, submit } = formValues

    return (
        <div className='form'>
            <form className='form right-margin' ref={form} onSubmit={(e) => submit(e)}>
                {
                    inputs.map((input) => (
                        <input key={input.id} type='hidden' name={input.name} value={input.value} />
                    ))
                }
                <input type='submit' value='Да' className='btn input-button' />
            </form>

            <button className='btn' onClick={close}>Нет</button>
        </div>
    )
}

export default Form