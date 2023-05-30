import { useState } from 'react'
import { FormOpen, OpenValues } from '../models/interfaces'

export const useFormOpen = ({ analysis }: FormOpen): OpenValues => {

    const [isOpen, setIsOpen] = useState(false)

    const open = () => {
        if (analysis()) {
            setIsOpen(true)
        }
    }

    const close = () => {
        setIsOpen(false)
    }

    const openValues = {
        isOpen,
        open,
        close
    }

    return openValues
}