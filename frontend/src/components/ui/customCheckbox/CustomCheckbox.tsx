import React, { useState } from 'react';
import styles from './styles.module.css';

interface Props {
    value: string;
    label: string;
}

export const CustomCheckbox = ({
    value,
    label
}: Props) => {
    const [checked, setChecked] = useState(false)

    return (
        <label className={styles.label}>
            <input onChange={() => setChecked(prev => !prev)} type="checkbox" checked={checked} className={styles.checkbox} />
            <span className={styles.checkboxStyle}></span>
            <span className='ml-7 leading-none'>{label}</span>
        </label>
    );
};
