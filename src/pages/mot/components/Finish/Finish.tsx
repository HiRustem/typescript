import { SendForm } from '../../../../components'
import { useSubmit } from '../../../../components/SendForm/hooks/useSubmit'
import { useAnalysis } from './hooks/useAnalysis'
import { useFormValues } from './hooks/useFormValues'

const Finish = () => {

    const formValues = useSubmit({
        serviceId: '',
        templateId: '',
        publicKey: '',
        inputs: useFormValues()
    })

    const analysis = useAnalysis()

    return (
        <div className='mainContainer'>
            <SendForm formValues={formValues} analysis={analysis} />
        </div>
    )
}

export default Finish