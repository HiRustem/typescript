export interface NameInputInterface {
    id: number
    placeholder: string
    value: string
    onFunction: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export interface NamebarProps {
    inputs: NameInputInterface[]
}

export interface NameInputProps {
    input: NameInputInterface
}

