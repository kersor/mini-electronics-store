import { useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface Props<T extends FieldValues> {
    className?: string
    active?: boolean
    onChange: (val: string) => void
    checked: string,
    vsbSircle?: boolean
    name: Path<T>
    control: Control<T>; 
    item: any
}

export const CustomRadioButton = <T extends FieldValues>({
    className,
    active = false,
    onChange,
    checked,
    vsbSircle = true,
    name,
    control,
    item
}: Props<T>) => {

    const funcOnChange = (value: string, field: any) => {
        onChange(value)
        field.onChange(value)
    }

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <label className={styles.label}>
                    <input 
                        {...field} 
                        onChange={(e) => funcOnChange(e.target.value, field)} 
                        type="radio"
                        value={item.id}
                        className={styles.radio} 
                    />
                    {vsbSircle && <span className={styles.radioStyle}></span>}
                    <span className={clsx(
                        styles.label_title, 
                        field.value === item.id && "font-bold",
                        vsbSircle ? "ml-7" : ""
                    )}>{item.title}</span>
                </label>
            )}
        />
    )
}