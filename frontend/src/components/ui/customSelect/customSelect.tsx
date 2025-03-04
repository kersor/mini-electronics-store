import { ChevronDown } from 'lucide-react'
import styles from './styles.module.css'
import { PropsWithChildren } from 'react'
import clsx from 'clsx'

type TypeSelectPlaceholder = "normal" | "outline"

interface Props {
    placeholder: string,
    type?: TypeSelectPlaceholder
}

export const CustomSelect = ({
    placeholder,
    children,
    type = "normal"
}: PropsWithChildren<Props>) => {

    const selectStyle: Record<TypeSelectPlaceholder, string> = {
        normal: styles.select_placeholder__normal,
        outline: styles.select_placeholder__outline
    }

    return (
        <div className={styles.select}>
            <div className={clsx(
                styles.select_placeholder,
                selectStyle[type]
            )}>
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