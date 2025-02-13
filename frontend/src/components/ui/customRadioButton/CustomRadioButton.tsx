import { useState } from 'react'
import styles from './styles.module.css'

interface Props {
    className?: string
    active?: boolean
    value: string
    onChange: (val: string) => void
    label: string,
    checked: string
}

export const CustomRadioButton = ({
    className,
    active = false,
    onChange,
    value,
    label,
    checked
}: Props) => {
    const funcOnChange = (value: string) => {
        onChange(value)
    }

    return (
        <label className={styles.label}>
            <input onChange={(e) => funcOnChange(e.target.value)} value={value} type="radio" checked={checked === value} className={styles.radio} />
            <span className={styles.radioStyle}></span>
            <span className='ml-7 leading-none'>{label}</span>
        </label>
    )
}