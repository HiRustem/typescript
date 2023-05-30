export interface FormInput {
    id: number
    name: string
    value: string
}

export interface FormValues {
    form: React.LegacyRef<HTMLFormElement> | null
    inputs: FormInput[]
    submit: (event: React.FormEvent<HTMLFormElement>) => void
}

export interface FormProps {
    formValues: FormValues
    close: () => void
}

export interface SendFormProps {
    formValues: FormValues
    analysis: () => boolean
}

export interface SendValues {
    serviceId: string 
    templateId: string
    publicKey: string
    inputs: FormInput[]
}

export interface FormOpen {
    analysis: () => boolean
}

export interface OpenValues {
    isOpen: boolean
    open: () => void
    close: () => void
}