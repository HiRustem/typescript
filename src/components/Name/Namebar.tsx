import { useInputs } from './hooks/useInputs'
import NameInput from './NameInput'

const Namebar = () => {

    const inputs = useInputs()

    return (
        <div className='mainContainers nameBar'>
            {
                inputs.map((input) => (
                    <NameInput key={input.id} input={input} />
                ))
            }
        </div>
    )
}

export default Namebar