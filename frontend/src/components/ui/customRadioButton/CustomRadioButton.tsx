import { useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'

interface Props {
    className?: string
    active?: boolean
    value: string
    onChange: (val: string) => void
    label: string,
    checked: string,
    vsbSircle?: boolean
}

export const CustomRadioButton = ({
    className,
    active = false,
    onChange,
    value,
    label,
    checked,
    vsbSircle = true
}: Props) => {

    const funcOnChange = (value: string) => {
        onChange(value)
    }

    return (
        <label className={styles.label}>
            <input onChange={(e) => funcOnChange(e.target.value)} value={value} type="radio" checked={checked === value} className={styles.radio} />
            {vsbSircle && <span className={styles.radioStyle}></span>}
            <span className={clsx(styles.label_title, vsbSircle ? "ml-7" : "")}>{label}</span>
        </label>
    )
}