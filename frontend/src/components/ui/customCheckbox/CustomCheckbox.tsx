import React, { useState } from 'react';
import styles from './styles.module.css';

interface Props {
    value: string;
    label: string;
    onChange: (val: string) => void
}

export const CustomCheckbox = ({
    value,
    label,
    onChange
}: Props) => {
    const [checked, setChecked] = useState(false)

    const funcOnChange = (value: string) => {
        setChecked(prev => !prev)
        onChange(value)
    }

    return (
        <label className={styles.label}>
            <input onChange={(e) => funcOnChange(e.target.value)} value={value} type="checkbox" checked={checked} className={styles.checkbox} />
            <span className={styles.checkboxStyle}></span>
            <span className='ml-7 leading-none'>{label}</span>
        </label>
    );
};
