import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormValues, SendValues } from '../models/interfaces'

export const useSubmit = ({ serviceId, templateId, publicKey, inputs }: SendValues): FormValues => {

    const navigate = useNavigate()

    const form = useRef<HTMLFormElement>(null)

    const submit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log('Отправил')
        console.log(form.current)
    
        navigate('/finish')

    }

    const formValues = {
        form,
        inputs,
        submit,
    }

    return formValues
}