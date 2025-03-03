import React, { useState } from 'react';
import styles from './styles.module.css';

interface Props {
    value: string;
    label: string;
    onChange: (val: string) => void
    data?: any
}

export const CustomCheckbox = ({
    value,
    label,
    onChange,
    data
}: Props) => {
    const [checked, setChecked] = useState(false)

    const funcOnChange = (value: string) => {
        setChecked(prev => !prev)
        onChange(value)
    }
    console.log(data.hex)
    return (
        <label className={styles.label}>
            <input onChange={(e) => funcOnChange(e.target.value)} value={value} type="checkbox" checked={checked} className={styles.checkbox} />
            <span className={styles.checkboxStyle}></span>
            {data && data.hex && <div style={{background: data.hex ? data.hex : ""}} className='w-[18px] h-[18px] rounded-md ml-7 -mr-5'></div>}
            <span className='ml-7 leading-none'>{label}</span>
        </label>
    );
};
