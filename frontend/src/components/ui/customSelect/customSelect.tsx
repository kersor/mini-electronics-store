import { ChevronDown } from 'lucide-react'
import styles from './styles.module.css'
import { PropsWithChildren } from 'react'

interface Props {
    placeholder: string
}

export const CustomSelect = ({
    placeholder,
    children
}: PropsWithChildren<Props>) => {
    return (
        <div className={styles.select}>
            <div className={styles.select_placeholder}>
                <div>{placeholder}</div>
                <div className={styles.select_placeholder_arrow}>
                    <ChevronDown size={20} strokeWidth={2.5} />
                </div>
            </div>
            <div className={styles.select_menu}>
                <div className={styles.select_list}>
                    {children}
                </div>
            </div>
        </div>
    )
}