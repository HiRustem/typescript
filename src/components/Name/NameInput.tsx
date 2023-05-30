import { NameInputProps } from './models/interfaces'

const NameInput = ({ input } : NameInputProps) => {
    const { placeholder, value, onFunction } = input

    return (
        <input className='nameInput' placeholder={placeholder} type='text' value={value} onChange={onFunction} />
    )
}

export default NameInput