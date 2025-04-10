    import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
    import styles from './styles.module.css';
    import { Control, Controller, FieldValues, Path } from 'react-hook-form';

    interface Props<T extends FieldValues> {
        control: Control<T>
        name: Path<T>
        rules?: object
        checkboxValues: string[]
        setCheckboxValues: Dispatch<SetStateAction<string[]>>
        value: string
        label: string
        data?: any
    }    

    export const CustomCheckbox = <T extends FieldValues>({
        value,
        label,
        data,
        control,
        name,
        rules,
        checkboxValues,
        setCheckboxValues
}: Props<T>) => {
        const [checked, setChecked] = useState(false)

        const funcOnChange = (value: string, field: any) => {
            setChecked(prev => !prev)
            const result = funcOnChangeCheckbox(value)

            field.onChange(result)
        }

        useEffect(() => {
            if (!checkboxValues.length) setChecked(false)
        }, [checkboxValues])

        const funcOnChangeCheckbox = (value: string) => {
            if(!!checkboxValues.length) {
                const isHas = checkboxValues.includes(value)
                if (isHas) {
                    const result = [...checkboxValues.filter(item => item !== value)]
                    setCheckboxValues(prev => result)
                    return result
                } else {
                    setCheckboxValues(prev => [...prev, value])
                    return [...checkboxValues, value]
                }
            }
            else {
                setCheckboxValues(prev => [value])
                return [value]
            }
        }

        return (
            <Controller 
                control={control}
                name={name}
                rules={rules}
                render={({field}) => (
                    <label className={styles.label}>
                        <input 
                            onChange={(e) => funcOnChange(e.target.value, field)} 
                            value={value} 
                            type="checkbox" 
                            checked={checked} 
                            className={styles.checkbox} 
                        />
                        <span className={styles.checkboxStyle}></span>
                        {data && data.hex && <div style={{background: data.hex ? data.hex : ""}} className='w-[18px] h-[18px] rounded-md ml-7 -mr-5'></div>}
                        <span className='ml-7 leading-none'>{label}</span>
                    </label>
                )}
            />
        );
    };
