import clsx from 'clsx'
import styles from './styles.module.css'
import { useNumber } from '@/hooks/useNumber'

type typeInput = 'text' | 'password' | 'email' | 'number'

interface Props {
    classNameInput?: string
    classNameBox?: string
    type?: typeInput


    value: string
    onChange: (val: string) => void
}

export const CustomInput = ({
    classNameInput,
    classNameBox,
    type = 'text',
    onChange,
    value
}: Props) => {
    const typeInput: Record<typeInput, string> = {
        text: "text",
        email: "email",
        password: "password",
        number: "text"
    }

    const funcOnChange = (val: string) => {
        if(type === 'number') {
            const numberValue = useNumber(val)
            onChange(String(numberValue))
        }
        else {
            onChange(val)
        }
    }

    return (
        <div className={clsx("bg-[#f6f7f9] py-1 px-3 rounded-lg w-full", classNameBox)}>
            <input 
                className={clsx(
                    "bg-[#f6f7f9] outline-0 w-full", 
                    classNameInput
                )} 
                onChange={(e) => funcOnChange(e.target.value)} 
                type={typeInput[type]} 
                value={value} 
            />
        </div>
    )
}