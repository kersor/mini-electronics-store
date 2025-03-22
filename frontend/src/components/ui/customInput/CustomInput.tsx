import clsx from 'clsx'
import styles from './styles.module.css'
import { useNumber } from '@/hooks/useNumber'
import { forwardRef } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

type typeInput = 'text' | 'password' | 'email' | 'number'

interface Props<T extends FieldValues> {
    classNameInput?: string
    classNameBox?: string
    type?: typeInput



    onChange?: (val: string, field: any) => void
    placeholder?: string
    name: Path<T>
    control: Control<T>; 

    error?: string;
    onClear?: () => void;
    rules?: object;
    label?: string
}

export const CustomInput = <T extends FieldValues>({
    classNameInput,
    classNameBox,
    type = 'text',
    onChange,
    name,
    control,
    rules,
    placeholder,
    label,
    error
}: Props<T>) => {
    const typeInput: Record<typeInput, string> = {
        text: "text",
        email: "email",
        password: "password",
        number: "text"
    }

    const funcOnChange = (val: string, field: any) => {
        if(type === 'number') {
            const numberValue = useNumber(val)
            if (onChange) {
                onChange(numberValue ?? "", field)
            } else {
                field.onChange(numberValue);
            }
        }
        else {
            if (onChange) {
                onChange(val ?? "", field)
            } else {
                field.onChange(val);
            }
        }
    }

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <div className='flex flex-col gap-1'> 
                    {label && <div className='text-[13px]'>{label}</div>}
                    <div className={clsx("bg-[#f6f7f9] py-1 px-3 rounded-lg w-full  relative", classNameBox, error && styles.error)}>
                        {error && <div className={styles.error_text}>{error}</div>}
                        <input 
                            className={clsx(
                                "bg-[#f6f7f9] outline-0 w-full", 
                                classNameInput
                            )} 
                            onChange={(e) => funcOnChange(e.target.value, field)} 
                            type={typeInput[type]} 
                            value={field.value || ""} 
                            placeholder={placeholder || ""}
                        />
                    </div>
                </div>
            )}
        />

    )
}

